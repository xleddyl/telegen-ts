# A TypeScript wrapper for Telegram Bot API

Simple and effective wrapper for [Telegram Bot API](https://core.telegram.org/bots/api)

```js
// Un testone goliardico

const { TelegramBotTS, Types } = require('./lib/index')
const bot = new TelegramBotTS(TOKEN)

try {
   const msg = (await bot.getUpdates()).pop()
   console.log(msg)
   await bot.sendMessage(
      msg.message.text,
      msg.message.chat.id,
      { reply_to_message_id: msg.message.message_id })
} catch (e) {
   console.log(e)
}
```
