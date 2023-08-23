# Telegen-TS

A simple and effective library that solely provides an implementation of the official [Telegram Bot API](https://core.telegram.org/bots/api).

- Current version: [**Bot API 6.8**](https://core.telegram.org/bots/api#august-18-2023) (_august-18-2023_)

## 📚 Docs

This module doesn't need much documentation as all the infos can be retrieved from the official telegram's docs: <https://core.telegram.org/bots/api>

However all the methods and types are well documented within the editor's linter 😉

## 💡 How does Telegen-TS works?

EASY! Telegen works by scraping all the important info relative to methods and types from the official API page (cited above). Then it autogenerates (_telegram + autogen = telegen_ eheheh) two files:

- [autogen-Methods.ts](./src/core/telegram/autogen-Methods.ts) contains the abstract class `Methods`, containing all the methods
  - `TelegenTS` extends `Methods`
  - all the methods simply call `Methods.makeRequest(...)` with the right parameters
  - `makeRequest` is an abstract method that is then implemented in`TelegenTS`
- [autogen-types.ts](./src/core/telegram/autogen-types.ts) containing TypeScript's interfaces
  - used in `Methods` for defining the types for parameters

Finally we have the most importante piece of the puzzle: [translator.js](./src/utils/translator.js)\
This is the file that manages the scraping and the translation of the API (surely it can be improved but literally who cares, probably no one other than me will ever read it lol)

## ⚙️ Installation

```cli
npm install @xleddyl/telegen-ts
```

## 💻 Usage

First import `@xleddyl/telegen-ts` into your project

```js
const { TelegenTS, Types } = require('@xleddyl/telegen-ts') // JavaScript
import { TelegenTS, Types } from '@xleddyl/telegen-ts' // TypeScript
```

Then create a new `TelegenTS` instance by passing your bot's token to the constructor

```js
const bot = new TelegenTS(TOKEN)
```

And you are pretty much ready to go now. Here I just leave a small recap on what you will import from this library:

- `TelegenTS` is a class from which all the [Available methods](https://core.telegram.org/bots/api#available-methods) can be called (alongside with the ones explained [here](https://core.telegram.org/bots/api#getting-updates))
- `Types` contains all the [Available types](https://core.telegram.org/bots/api#available-types) used as return values/function parameters (alongside with the ones explained [here](https://core.telegram.org/bots/api#getting-updates))
  - suitable for type casting in TypeScript
  - note: for return types manual inference is required 🤧 (read the docs to determine the return type of methods)

## 🧪 Examples

### Get the latest message sent to the bot and respond with the same text

JavaScript example

```js
const { TelegenTS, Types } = require('@xleddyl/telegen-ts')
const bot = new TelegenTS('1234567890:ASDFGHJKL')

const update = (await bot.getUpdates()).pop() // .pop() to get only the last message
const msg = update.message
if(msg !== undefined) {
  await bot.sendMessage(msg.text, msg.chat.id, { reply_to_message_id: msg.message_id })
}
```

### Very simple and dumb polling mechanism

TypeScript example

```js
import { TelegenTS, Types } from '@xleddyl/telegen-ts'
const bot = new TelegenTS('1234567890:ASDFGHJKL')

async function poll(callbackfn: (updates: Types.Update[]) => Promise<void>) {
   let lastUpdateId = 0
   while (1) {
      try {
         const updates: Types.Update[] = await bot.getUpdates({ offset: lastUpdateId })
         if (updates === undefined) break
         if (updates.length === 0) continue
         lastUpdateId = updates[updates.length - 1].update_id + 1
         await callbackfn(updates)
      } catch (e) {
         console.log(e)
         return
      }
   }
}

async function handler(update: Update[]) {
   try {
      for (const update of updates) {
         const msg = update.message
         if(msg === undefined) continue
         await bot.sendMessage('ciao', msg.chat.id, {reply_to_message_id: msg.message_id})
      }
   } catch (e) {
      console.log(e)
   }
}

poll(handler)
```

### Sending a media file

If you want you can send files whenever the API specifies that the method accepts an `InputFile` type as parameter. To do so please use `fs.createReadStream(path)` (I've not tested other methods for uploading files so you'll need to experiment)

```js
const fs = require('fs')

const img = fs.createReadStream('./testimg.png')
await bot.sendPhoto(img, msg.chat.id)
```

---

And that's pretty much it!! 🥳\
Happy botting! 🤖
