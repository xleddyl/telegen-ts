jest.mock('axios')

import { TelegramApiParser } from '../utils/translator'
import { JSDOM } from 'jsdom'

const parser = new TelegramApiParser('/tmp/test-output')

// Access private methods for unit testing
const normalizeType = (type: string | undefined) => (parser as any).normalizeType(type)
const parseProperties = (table: Element) => (parser as any).parseProperties(table)
const decodeDocument = (doc: Document) => (parser as any).decodeDocument(doc)
const parseVersionInfo = (doc: Document) => (parser as any).parseVersionInfo(doc)

describe('normalizeType', () => {
   test('maps primitive types', () => {
      expect(normalizeType('Integer')).toBe('number')
      expect(normalizeType('String')).toBe('string')
      expect(normalizeType('Boolean')).toBe('boolean')
      expect(normalizeType('Float')).toBe('number')
      expect(normalizeType('Float number')).toBe('number')
      expect(normalizeType('True')).toBe('boolean')
      expect(normalizeType('False')).toBe('boolean')
   })

   test('returns "any" for undefined/empty', () => {
      expect(normalizeType(undefined)).toBe('any')
   })

   test('preserves custom types', () => {
      expect(normalizeType('Message')).toBe('Message')
      expect(normalizeType('User')).toBe('User')
      expect(normalizeType('PhotoSize')).toBe('PhotoSize')
   })

   test('handles union types with "or"', () => {
      expect(normalizeType('Integer or String')).toBe('number|string')
   })

   test('handles union types with "and"', () => {
      expect(normalizeType('Integer and String')).toBe('number|string')
   })

   test('handles union types with comma', () => {
      expect(normalizeType('Integer, String')).toBe('number|string')
   })

   test('handles simple Array of', () => {
      expect(normalizeType('Array of String')).toBe('string[]')
      expect(normalizeType('Array of Integer')).toBe('number[]')
      expect(normalizeType('Array of Message')).toBe('Message[]')
   })

   test('handles nested Array of Array of', () => {
      expect(normalizeType('Array of Array of PhotoSize')).toBe('PhotoSize[][]')
      expect(normalizeType('Array of Array of KeyboardButton')).toBe('KeyboardButton[][]')
      expect(normalizeType('Array of Array of InlineKeyboardButton')).toBe('InlineKeyboardButton[][]')
   })

   test('handles InputFile or String', () => {
      expect(normalizeType('InputFile or String')).toBe('InputFile|string')
   })

   test('handles complex union with multiple types', () => {
      const result = normalizeType('InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply')
      expect(result).toBe('InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply')
   })
})

describe('parseProperties', () => {
   function makeTable(headers: string[], rows: string[][]): Element {
      const dom = new JSDOM(`<table>
         <tr>${headers.map((h) => `<th>${h}</th>`).join('')}</tr>
         ${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('')}
      </table>`)
      return dom.window.document.querySelector('table')!
   }

   test('parses type table (3 columns: Field, Type, Description)', () => {
      const table = makeTable(
         ['Field', 'Type', 'Description'],
         [
            ['update_id', 'Integer', 'The update identifier'],
            ['message', 'Message', 'Optional. New incoming message'],
         ],
      )
      const props = parseProperties(table)
      expect(props).toHaveLength(2)
      expect(props![0]).toEqual({
         name: 'update_id',
         type: 'number',
         optional: false,
         description: 'The update identifier',
      })
      expect(props![1]).toEqual({
         name: 'message',
         type: 'Message',
         optional: true,
         description: 'Optional. New incoming message',
      })
   })

   test('parses method table (4 columns: Parameter, Type, Required, Description)', () => {
      const table = makeTable(
         ['Parameter', 'Type', 'Required', 'Description'],
         [
            ['chat_id', 'Integer or String', 'Yes', 'Unique identifier for the target chat'],
            ['text', 'String', 'Yes', 'Text of the message'],
            ['parse_mode', 'String', 'Optional', 'Mode for parsing entities'],
         ],
      )
      const props = parseProperties(table)
      expect(props).toHaveLength(3)

      // Required params come first (sorted by optional)
      expect(props![0].name).toBe('chat_id')
      expect(props![0].optional).toBe(false)
      expect(props![0].type).toBe('number|string')

      expect(props![1].name).toBe('text')
      expect(props![1].optional).toBe(false)

      expect(props![2].name).toBe('parse_mode')
      expect(props![2].optional).toBe(true)
   })

   test('returns undefined for empty table', () => {
      const table = makeTable(['Field', 'Type', 'Description'], [])
      expect(parseProperties(table)).toBeUndefined()
   })

   test('handles Array of Array types in table', () => {
      const table = makeTable(
         ['Field', 'Type', 'Description'],
         [['photos', 'Array of Array of PhotoSize', 'Requested profile pictures']],
      )
      const props = parseProperties(table)
      expect(props![0].type).toBe('PhotoSize[][]')
   })
})

describe('decodeDocument', () => {
   function makeDocument(bodyHtml: string): Document {
      return new JSDOM(`<div id="dev_page_content">${bodyHtml}</div>`).window.document
   }

   test('parses a type with properties', () => {
      const doc = makeDocument(`
         <h4>Update</h4>
         <p>This object represents an incoming update.</p>
         <table>
            <tr><th>Field</th><th>Type</th><th>Description</th></tr>
            <tr><td>update_id</td><td>Integer</td><td>The update identifier</td></tr>
         </table>
      `)
      const items = decodeDocument(doc)
      expect(items).toHaveLength(1)
      expect(items[0].name).toBe('Update')
      expect(items[0].category).toBe('type')
      expect(items[0].description).toBe('This object represents an incoming update.')
      expect(items[0].properties).toHaveLength(1)
      expect(items[0].properties[0].name).toBe('update_id')
   })

   test('parses a method (lowercase name)', () => {
      const doc = makeDocument(`
         <h4>Update</h4>
         <p>Dummy type.</p>
         <h4>getUpdates</h4>
         <p>Use this method to receive incoming updates.</p>
         <table>
            <tr><th>Parameter</th><th>Type</th><th>Required</th><th>Description</th></tr>
            <tr><td>offset</td><td>Integer</td><td>Optional</td><td>Identifier of the first update</td></tr>
         </table>
      `)
      const items = decodeDocument(doc)
      const method = items.find((i: any) => i.name === 'getUpdates')
      expect(method).toBeDefined()
      expect(method!.category).toBe('method')
      expect(method!.return).toBe('Promise<T>')
   })

   test('h3 resets currentItem (no description bleed between sections)', () => {
      const doc = makeDocument(`
         <h4>Update</h4>
         <p>An incoming update.</p>
         <h4>GameHighScore</h4>
         <p>One row of high scores.</p>
         <table>
            <tr><th>Field</th><th>Type</th><th>Description</th></tr>
            <tr><td>score</td><td>Integer</td><td>Score</td></tr>
         </table>
         <h3>Games</h3>
         <p>Your bot can offer users HTML5 games to play.</p>
         <p>More info about games here.</p>
         <h4>sendGame</h4>
         <p>Use this method to send a game.</p>
      `)
      const items = decodeDocument(doc)
      const highScore = items.find((i: any) => i.name === 'GameHighScore')
      expect(highScore!.description).toBe('One row of high scores.')
      expect(highScore!.description).not.toContain('HTML5 games')
   })

   test('h4 with spaces resets currentItem (no bleed from doc sections)', () => {
      const doc = makeDocument(`
         <h4>Update</h4>
         <p>An update.</p>
         <h4>sendMessage</h4>
         <p>Use this method to send text messages.</p>
         <table>
            <tr><th>Parameter</th><th>Type</th><th>Required</th><th>Description</th></tr>
            <tr><td>chat_id</td><td>Integer</td><td>Yes</td><td>Target chat</td></tr>
         </table>
         <h4>Formatting options</h4>
         <p>The Bot API supports basic formatting for messages.</p>
         <p>Note that clients will display an alert.</p>
         <h4>sendPhoto</h4>
         <p>Use this method to send photos.</p>
      `)
      const items = decodeDocument(doc)
      const sendMessage = items.find((i: any) => i.name === 'sendMessage')
      expect(sendMessage!.description).toBe('Use this method to send text messages.')
      expect(sendMessage!.description).not.toContain('basic formatting')

      // "Formatting options" should NOT appear as a parsed item
      const formattingItem = items.find((i: any) => i.name === 'Formatting options')
      expect(formattingItem).toBeUndefined()

      // sendPhoto should be clean
      const sendPhoto = items.find((i: any) => i.name === 'sendPhoto')
      expect(sendPhoto!.description).toBe('Use this method to send photos.')
   })

   test('hr resets currentItem (no bleed from page footer)', () => {
      const doc = makeDocument(`
         <h4>Update</h4>
         <p>An update.</p>
         <h4>GameHighScore</h4>
         <p>One row of high scores.</p>
         <hr>
         <p>And that's about all we've got for now.</p>
      `)
      const items = decodeDocument(doc)
      const highScore = items.find((i: any) => i.name === 'GameHighScore')
      expect(highScore!.description).toBe('One row of high scores.')
      expect(highScore!.description).not.toContain("that's about all")
   })

   test('does not parse items before Update', () => {
      const doc = makeDocument(`
         <h4>SomethingBefore</h4>
         <p>Should be skipped.</p>
         <h4>Update</h4>
         <p>First real type.</p>
      `)
      const items = decodeDocument(doc)
      expect(items).toHaveLength(1)
      expect(items[0].name).toBe('Update')
   })

   test('type without properties creates empty interface', () => {
      const doc = makeDocument(`
         <h4>Update</h4>
         <p>An update.</p>
         <h4>CallbackGame</h4>
         <p>A placeholder, currently holds no information.</p>
      `)
      const items = decodeDocument(doc)
      const callbackGame = items.find((i: any) => i.name === 'CallbackGame')
      expect(callbackGame).toBeDefined()
      expect(callbackGame!.properties).toBeUndefined()
   })
})

describe('parseVersionInfo', () => {
   test('extracts version and date', () => {
      const doc = new JSDOM(`
         <h4>March 1, 2026</h4>
         <p><strong>Bot API 9.5</strong></p>
      `).window.document
      const info = parseVersionInfo(doc)
      expect(info.version).toBe('9.5')
      expect(info.date).toBe('March 1, 2026')
   })

   test('handles double-digit minor version', () => {
      const doc = new JSDOM(`
         <h4>January 1, 2025</h4>
         <p><strong>Bot API 7.10</strong></p>
      `).window.document
      const info = parseVersionInfo(doc)
      expect(info.version).toBe('7.10')
   })

   test('throws if no h4', () => {
      const doc = new JSDOM('<p>No header</p>').window.document
      expect(() => parseVersionInfo(doc)).toThrow('Could not find version header')
   })

   test('throws if no version match', () => {
      const doc = new JSDOM('<h4>Some date</h4><p>No version here</p>').window.document
      expect(() => parseVersionInfo(doc)).toThrow('Could not parse Bot API version')
   })
})
