/**
 * Translate Telegram's Bot API docs into TypeScript interfaces and methods
 * docs: https://core.telegram.org/bots/api
 *
 *
 * <div id="dev_page_content">
 *    <h4></h4>                     <!-- name of the method/type -->
 *    <p></p>                       <!-- description of the method/type -->
 *    <table class="table"></table>  <!-- properties of the method/type -->
 * </div>
 *
 *
 * This method is based on a very "fragile" scraping mechanism due to the lack
 * of a standard description of the API :(
 */

const axios = require('axios')
const jsdom = require('jsdom')
const path = require('path')
const fs = require('fs')

;(async () => {
   const response = await axios.get('https://core.telegram.org/bots/api')
   const document = new jsdom.JSDOM(response.data).window.document
   const saveApiDocument = true

   const api = decode(document, saveApiDocument)
   translateMethods(api.filter((i) => i.category === 'method'))
   translateTypes(api.filter((i) => i.category === 'type'))

   function decode(document, save = false) {
      let prev = false
      let startParsing = false
      let index = 0
      let version = '0'
      const parsed = []

      const dev_page_content = document.querySelector('div#dev_page_content')
      const elements = Array.from(dev_page_content.querySelectorAll(':scope > h4, :scope > p, :scope > table'))

      elements.forEach((element) => {
         if (!startParsing) {
            startParsing = element.textContent === 'Update'
            if (element.textContent.startsWith('Bot API')) {
               version = element.textContent > version ? element.textContent : version
            }
         }

         if (startParsing && element.nodeName === 'H4' && !element.textContent.includes(' ')) {
            const category =
               element.textContent.charAt(0) === element.textContent.charAt(0).toUpperCase() ? 'type' : 'method'
            parsed[index] = {
               name: element.textContent,
               category: category,
               description: '',
               return: category === 'method' ? 'any' : undefined,
            }
            index++
            prev = true
         } else if (startParsing && prev && element.nodeName === 'P') {
            parsed[index - 1].description += element.textContent
         } else if (startParsing && element.nodeName === 'TABLE') {
            const tr = Array.from(element.querySelectorAll('tr')).map((element) =>
               element.textContent.trim().split('\n'),
            )

            tr.shift()

            const properties = tr
               .map((row) => {
                  let type = row[1]
                  if (type.match(/\bFloat number\b/)) type = type.replaceAll(/\bFloat number/g, 'Float')
                  if (type.match(/\bInteger\b/)) type = type.replaceAll(/\bInteger/g, 'number')
                  if (type.match(/\bFloat\b/)) type = type.replaceAll(/\bFloat/g, 'number')
                  if (type.match(/\bString\b/)) type = type.replaceAll(/\bString/g, 'string')
                  if (type.match(/\bBoolean\b/)) type = type.replaceAll(/\bBoolean/g, 'boolean')
                  if (type.match(/\bFalse\b/)) type = type.replaceAll(/\bFalse/g, 'boolean')
                  if (type.match(/\bTrue\b/)) type = type.replaceAll(/\bTrue/g, 'boolean')
                  if (type.includes(' or ')) type = type.replaceAll(' or ', '|')
                  if (type.includes(' and ')) type = type.replaceAll(' and ', '|')
                  if (type.includes(', ')) type = type.replaceAll(', ', '|')
                  if (type.includes('Array of ')) {
                     if (type.includes('|')) {
                        type = type
                           .replace('Array of ', '')
                           .split('|')
                           .map((t) => t.concat('[]'))
                           .join('|')
                     } else type = type.replace('Array of ', '').concat('[]')
                  }
                  if (type.includes('Array of ')) {
                     if (type.includes('|')) {
                        type = type
                           .replace('Array of ', '')
                           .split('|')
                           .map((t) => t.concat('[]'))
                           .join('|')
                     } else type = type.replace('Array of ', '').concat('[]')
                  }
                  const obj = {
                     name: row[0],
                     type: type,
                     optional: row[2].startsWith('Optional'),
                     description: parsed[index - 1].category === 'type' ? row[2] : row[3],
                  }
                  return obj
               })
               .sort((a, b) => (a.optional === true ? 1 : -1))

            parsed[index - 1].properties = properties
            prev = false
         } else {
            prev = false
         }
      })

      if (save)
         fs.writeFileSync(
            path.join(__dirname, '../core/telegram', version.replaceAll(' ', '_') + '.json'),
            JSON.stringify(parsed),
         )

      return parsed
   }

   function translateMethods(methods) {
      const file = fs.createWriteStream(path.join(__dirname, '../core/telegram', 'autogen-Methods.ts'), { flags: 'w' })
      file.write(`import * as types from './autogen-types'\n\n`)
      file.write(`export abstract class Methods {\n\n`)
      file.write(`abstract makeRequest(methodName: string, body?: any, extra?: any): Promise<any>\n\n`)
      methods.forEach((method) => {
         file.write(`/**\n`)
         file.write(` * ${method.description}\n`)
         file.write(` */\n`)
         file.write(`async ${method.name} (\n`)
         let args = ''
         if (method.properties) {
            args = args.concat(',')
            const requireds = method.properties.filter((p) => p.optional === false)
            const optionals = method.properties.filter((p) => p.optional === true)
            if (requireds.length > 0) {
               requireds.forEach((prop) => {
                  let type = ''
                  if (prop.type.includes('|')) {
                     type = prop.type
                        .split('|')
                        .map((t) => (t.charAt(0) === t.charAt(0).toUpperCase() ? `types.${t}` : t))
                        .join('|')
                  } else {
                     type = prop.type.charAt(0) === prop.type.charAt(0).toUpperCase() ? `types.${prop.type}` : prop.type
                  }
                  file.write(`/** ${prop.description} */\n`)
                  file.write(`${prop.name}: ${type},\n`)
               })
               args = args
                  .concat('{')
                  .concat(requireds.map((prop) => prop.name).join(',\n'))
                  .concat('},')
            }
            if (optionals.length > 0) {
               file.write(`/** Extra options that could be provided */\n`)
               file.write(`extra? :{\n`)
               optionals.forEach((prop) => {
                  let type = ''
                  if (prop.type.includes('|')) {
                     type = prop.type
                        .split('|')
                        .map((t) => (t.charAt(0) === t.charAt(0).toUpperCase() ? `types.${t}` : t))
                        .join('|')
                  } else {
                     type = prop.type.charAt(0) === prop.type.charAt(0).toUpperCase() ? `types.${prop.type}` : prop.type
                  }
                  file.write(`/** ${prop.description} */\n`)
                  file.write(`${prop.name}?: ${type},\n`)
               })
               args = args.concat('extra')
               file.write(`}`)
            }
         }
         file.write(`): Promise<${method.return}>{\n`)
         file.write(`try{ return await this.makeRequest('${method.name}' ${args}) } catch(e: any) { throw e }\n`)
         file.write(`}\n\n`)
      })
      file.write(`}`)
      file.end()
   }

   function translateTypes(types) {
      const file = fs.createWriteStream(path.join(__dirname, '../core/telegram', 'autogen-types.ts'), { flags: 'w' })
      file.write(`// placeholder'\n\n`)
      types.forEach((type) => {
         file.write(`/**\n`)
         file.write(` * ${type.description}\n`)
         file.write(` */\n`)
         file.write(`export interface ${type.name} {\n`)
         if (type.properties) {
            type.properties.forEach((prop) => {
               file.write(`/** ${prop.description} */\n`)
               file.write(`${prop.name}${prop.optional ? '?' : ''}: ${prop.type},\n`)
            })
         }
         file.write(`}\n\n`)
      })
      file.end()
   }
})()
