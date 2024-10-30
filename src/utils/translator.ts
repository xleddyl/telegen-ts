import axios from 'axios'
import { JSDOM } from 'jsdom'
import * as path from 'path'
import * as fs from 'fs/promises'

type ApiItem = {
   version: number
   name: string
   category: 'type' | 'method'
   description: string
   return?: string
   properties?: Property[]
}

type Property = {
   name: string
   type: string
   optional: boolean
   description: string
}

const TYPE_MAPPINGS = new Map([
   ['Float number', 'number'],
   ['Integer', 'number'],
   ['Float', 'number'],
   ['String', 'string'],
   ['Boolean', 'boolean'],
   ['False', 'boolean'],
   ['True', 'boolean'],
])

class TelegramApiParser {
   private readonly API_URL = 'https://core.telegram.org/bots/api'
   private readonly OUTPUT_DIR: string

   constructor(outputDir: string) {
      this.OUTPUT_DIR = outputDir
   }

   private normalizeType(type: string | undefined): string {
      if (!type) return 'any'

      // Apply type mappings
      for (const [from, to] of TYPE_MAPPINGS.entries()) {
         type = type.replace(new RegExp(`\\b${from}\\b`, 'g'), to)
      }

      // Handle arrays and unions
      type = type.replace(/\s+or\s+|\s+and\s+|,\s+/g, '|').replace(/Array of (.*?)(?=(\||$))/g, (_, p1) => {
         if (p1.includes('|')) {
            return p1
               .split('|')
               .map((t: any) => t.trim() + '[]')
               .join('|')
         }
         return p1.trim() + '[]'
      })

      return type
   }

   private async ensureDirectory(): Promise<void> {
      await fs.mkdir(this.OUTPUT_DIR, { recursive: true })
   }

   private async fetchApiDoc(): Promise<Document> {
      try {
         const response = await axios.get(this.API_URL)
         return new JSDOM(response.data).window.document
      } catch (error) {
         throw new Error(
            `Failed to fetch API documentation: ${error instanceof Error ? error.message : 'Unknown error'}`,
         )
      }
   }

   private parseApiVersion(element: Element): string {
      const versionText = element.textContent || ''
      const match = versionText.match(/Bot API (\d+(\.\d+)*)/)
      return match ? match[1] : '0.0.0'
   }

   private parseProperties(table: Element): Property[] | undefined {
      const rows = Array.from(table.querySelectorAll('tr'))
      const transformedRows: Property[] = []
      rows.shift() // Remove header row

      rows.forEach((row) => {
         const cells = Array.from(row.cells).map((cell) => cell.textContent?.trim() || '')
         if (!!Number(cells[0]) || Number(cells[0]) === 0) return

         transformedRows.push({
            name: cells[0],
            type: this.normalizeType(cells[1]),
            optional: (cells[3] || cells[2] || '').startsWith('Optional'),
            description: cells[3] || cells[2] || '',
         })
      })

      return transformedRows.length
         ? transformedRows.sort((a, b) => Number(a.optional) - Number(b.optional))
         : undefined
   }

   private decodeDocument(document: Document): ApiItem[] {
      const content = document.querySelector('div#dev_page_content')
      if (!content) throw new Error('Could not find API content')

      const elements = Array.from(content.querySelectorAll(':scope > h4, :scope > p, :scope > table'))
      const parsed: ApiItem[] = []
      let currentItem: ApiItem | null = null
      let startParsing = false
      let version = 0

      elements.forEach((element) => {
         if (element.textContent?.startsWith('Bot API')) {
            version = Number(this.parseApiVersion(element))
         }

         if (!startParsing && element.textContent === 'Update') {
            startParsing = true
         }

         if (!startParsing) return

         if (element.nodeName === 'H4' && !element.textContent?.includes(' ')) {
            const name = element.textContent || ''
            currentItem = {
               version,
               name,
               category: name[0] === name[0].toUpperCase() ? 'type' : 'method',
               description: '',
               return: name[0] === name[0].toUpperCase() ? undefined : 'Promise<any>',
            }

            parsed.push(currentItem)
         } else if (element.nodeName === 'P' && currentItem) {
            currentItem.description += element.textContent || ''
         } else if (element.nodeName === 'TABLE' && currentItem) {
            const properties = this.parseProperties(element)
            if (properties) {
               currentItem.properties = properties
            }
         }
      })

      return parsed
   }

   private generateMethodsFile(methods: ApiItem[], types: ApiItem[]): string {
      let output = `import {${types.map((t) => t.name).join(',')}} from './autogen-types';\n\n`
      output += `export abstract class Methods {\n`
      output += `    abstract makeRequest(methodName: string, body?: any, extra?: any): Promise<any>;\n\n`

      methods
         .sort((m1, m2) => (m1.version > m2.version ? 1 : -1))
         .forEach((method) => {
            const params = method.properties || []
            const required = params.filter((p) => !p.optional)
            const optional = params.filter((p) => p.optional)

            output += `    /**\n     * ${method.description}\n     */\n`
            output += `    async ${method.name}(\n`

            if (required.length > 0) {
               output += `        body: {\n`
               required.forEach((prop) => {
                  const type = this.normalizeType(prop.type)
                  output += `            /** ${prop.description} */\n`
                  output += `            ${prop.name}: ${type};\n`
               })
               output += `        },\n`
            }

            if (optional.length > 0) {
               output += `        extra?: {\n`
               optional.forEach((prop) => {
                  const type = this.normalizeType(prop.type)
                  output += `            /** ${prop.description} */\n`
                  output += `            ${prop.name}?: ${type};\n`
               })
               output += `        }\n`
            }

            output += `    ): ${method.return} {\n`
            output += `        try {\n`
            output += `            return await this.makeRequest('${method.name}'${required.length ? ', body' : ''}${
               optional.length ? ', extra' : ''
            });\n`
            output += `        } catch (error: any) {\n`
            output += `            throw error;\n`
            output += `        }\n    }\n\n`
         })

      output += `}\n`
      return output
   }

   private generateTypesFile(types: ApiItem[]): string {
      let output = ''
      types
         .sort((m1, m2) => (m1.version > m2.version ? 1 : -1))
         .forEach((type) => {
            output += `/**\n * ${type.description}\n */\n`
            output += `export interface ${type.name} {\n`

            if (type.properties) {
               type.properties.forEach((prop) => {
                  const normalizedType = this.normalizeType(prop.type)
                  output += `    /** ${prop.description} */\n`
                  output += `    ${prop.name}${prop.optional ? '?' : ''}: ${normalizedType};\n`
               })
            }

            output += `}\n\n`
         })
      return output
   }

   public async generate(): Promise<void> {
      try {
         await this.ensureDirectory()

         const document = await this.fetchApiDoc()

         const api = this.decodeDocument(document)

         const methods = api.filter((item) => item.category === 'method')
         const types = api.filter((item) => item.category === 'type')

         const methodsContent = this.generateMethodsFile(methods, types)
         const typesContent = this.generateTypesFile(types)

         await Promise.all([
            fs.writeFile(path.join(this.OUTPUT_DIR, 'autogen-methods.ts'), methodsContent),
            fs.writeFile(path.join(this.OUTPUT_DIR, 'autogen-types.ts'), typesContent),
         ])
      } catch (error) {
         throw error
      }
   }
}

// Usage
;(async () => {
   const parser = new TelegramApiParser(path.join(__dirname, '../core/telegram'))
   try {
      await parser.generate()
   } catch (error) {
      process.exit(1)
   }
})()
