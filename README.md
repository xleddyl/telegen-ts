# Telegrambot-TS

A simple and effective wrapper that solely provides an implementation of the official [Telegram Bot API](https://core.telegram.org/bots/api). The webhooks and polling mechanism are not included, as this module is meant for custom logic implementation.

## 📚 Docs

This module doesn't need much documentation as all the infos can be retrieved from the official telegram's docs: <https://core.telegram.org/bots/api>

However all the methods and types are well documented within the editor's linter 😉

## ⚙️ Installation

```cli
npm install @xleddyl/telegrambot-ts
```

```js
const { TelegramBotTS, Types } = require('@xleddyl/telegrambot-ts')

const TOKEN = '1234' // token that BotFather gives you
const bot = new TelegramBotTS(TOKEN)
```

- `TelegramBotTS` is a class from which all the [Available methods](https://core.telegram.org/bots/api#available-methods) can be called (alongside with the ones explained [here](https://core.telegram.org/bots/api#getting-updates))
- `Types` contains all the [Available types](https://core.telegram.org/bots/api#available-types) used as return values/function parameters (alongside with the ones explained [here](https://core.telegram.org/bots/api#getting-updates))
  - suitable for type casting in TypeScript

## 🤖 Example

Get the latest message sent to the bot and respond with the same text

```js
const bot = new TelegramBotTS(TOKEN)

const msg = (await bot.getUpdates()).pop() // .pop() to get only the last msg
await bot.sendMessage(msg.message.text, msg.message.chat.id, { reply_to_message_id: msg.message.message_id })
```
