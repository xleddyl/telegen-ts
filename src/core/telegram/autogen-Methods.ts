import * as types from './autogen-types'

export abstract class Methods {
   abstract makeRequest(methodName: string, body?: any, extra?: any): Promise<any>

   /**
    * Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. Returns an Array of GameHighScore objects.
    */
   async getGameHighScores(
      body: {
         /** Yes */
         user_id: number
      },
      extra?: {
         /** Optional */
         chat_id?: number
         /** Optional */
         message_id?: number
         /** Optional */
         inline_message_id?: string
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('getGameHighScores', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to set the score of the specified user in a game message. On success, if the message is not an inline message, the Message is returned, otherwise True is returned. Returns an error, if the new score is not greater than the user's current score in the chat and force is False.
    */
   async setGameScore(
      body: {
         /** Yes */
         user_id: number
         /** Yes */
         score: number
      },
      extra?: {
         /** Optional */
         force?: boolean
         /** Optional */
         disable_edit_message?: boolean
         /** Optional */
         chat_id?: number
         /** Optional */
         message_id?: number
         /** Optional */
         inline_message_id?: string
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('setGameScore', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to send a game. On success, the sent Message is returned.
    */
   async sendGame(
      body: {
         /** Yes */
         chat_id: number
         /** Yes */
         game_short_name: string
      },
      extra?: {
         /** Optional */
         business_connection_id?: string
         /** Optional */
         message_thread_id?: number
         /** Optional */
         disable_notification?: boolean
         /** Optional */
         protect_content?: boolean
         /** Optional */
         message_effect_id?: string
         /** Optional */
         reply_parameters?: ReplyParameters
         /** Optional */
         reply_markup?: InlineKeyboardMarkup
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('sendGame', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Informs a user that some of the Telegram Passport elements they provided contains errors. The user will not be able to re-submit their Passport to you until the errors are fixed (the contents of the field for which you returned the error must change). Returns True on success.Use this if the data submitted by the user doesn't satisfy the standards your service requires for any reason. For example, if a birthday date seems invalid, a submitted document is blurry, a scan shows evidence of tampering, etc. Supply some details in the error message to make sure the user knows how to correct the issues.
    */
   async setPassportDataErrors(body: {
      /** Yes */
      user_id: number
      /** Yes */
      errors: PassportElementError[]
   }): Promise<any> {
      try {
         return await this.makeRequest('setPassportDataErrors', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Refunds a successful payment in Telegram Stars. Returns True on success.
    */
   async refundStarPayment(body: {
      /** Yes */
      user_id: number
      /** Yes */
      telegram_payment_charge_id: string
   }): Promise<any> {
      try {
         return await this.makeRequest('refundStarPayment', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Returns the bot's Telegram Star transactions in chronological order. On success, returns a StarTransactions object.
    */
   async getStarTransactions(extra?: {
      /** Optional */
      offset?: number
      /** Optional */
      limit?: number
   }): Promise<any> {
      try {
         return await this.makeRequest('getStarTransactions', extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an Update with the field pre_checkout_query. Use this method to respond to such pre-checkout queries. On success, True is returned. Note: The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.
    */
   async answerPreCheckoutQuery(
      body: {
         /** Yes */
         pre_checkout_query_id: string
         /** Yes */
         ok: boolean
      },
      extra?: {
         /** Optional */
         error_message?: string
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('answerPreCheckoutQuery', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * If you sent an invoice requesting a shipping address and the parameter is_flexible was specified, the Bot API will send an Update with a shipping_query field to the bot. Use this method to reply to shipping queries. On success, True is returned.
    */
   async answerShippingQuery(
      body: {
         /** Yes */
         shipping_query_id: string
         /** Yes */
         ok: boolean
      },
      extra?: {
         /** Optional */
         shipping_options?: ShippingOption[]
         /** Optional */
         error_message?: string
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('answerShippingQuery', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to create a link for an invoice. Returns the created invoice link as String on success.
    */
   async createInvoiceLink(
      body: {
         /** Yes */
         title: string
         /** Yes */
         description: string
         /** Yes */
         payload: string
         /** Yes */
         currency: string
         /** Yes */
         prices: LabeledPrice[]
      },
      extra?: {
         /** Optional */
         provider_token?: string
         /** Optional */
         max_tip_amount?: number
         /** Optional */
         suggested_tip_amounts?: number[]
         /** Optional */
         provider_data?: string
         /** Optional */
         photo_url?: string
         /** Optional */
         photo_size?: number
         /** Optional */
         photo_width?: number
         /** Optional */
         photo_height?: number
         /** Optional */
         need_name?: boolean
         /** Optional */
         need_phone_number?: boolean
         /** Optional */
         need_email?: boolean
         /** Optional */
         need_shipping_address?: boolean
         /** Optional */
         send_phone_number_to_provider?: boolean
         /** Optional */
         send_email_to_provider?: boolean
         /** Optional */
         is_flexible?: boolean
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('createInvoiceLink', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to send invoices. On success, the sent Message is returned.
    */
   async sendInvoice(
      body: {
         /** Yes */
         chat_id: number | string
         /** Yes */
         title: string
         /** Yes */
         description: string
         /** Yes */
         payload: string
         /** Yes */
         currency: string
         /** Yes */
         prices: LabeledPrice[]
      },
      extra?: {
         /** Optional */
         message_thread_id?: number
         /** Optional */
         provider_token?: string
         /** Optional */
         max_tip_amount?: number
         /** Optional */
         suggested_tip_amounts?: number[]
         /** Optional */
         start_parameter?: string
         /** Optional */
         provider_data?: string
         /** Optional */
         photo_url?: string
         /** Optional */
         photo_size?: number
         /** Optional */
         photo_width?: number
         /** Optional */
         photo_height?: number
         /** Optional */
         need_name?: boolean
         /** Optional */
         need_phone_number?: boolean
         /** Optional */
         need_email?: boolean
         /** Optional */
         need_shipping_address?: boolean
         /** Optional */
         send_phone_number_to_provider?: boolean
         /** Optional */
         send_email_to_provider?: boolean
         /** Optional */
         is_flexible?: boolean
         /** Optional */
         disable_notification?: boolean
         /** Optional */
         protect_content?: boolean
         /** Optional */
         message_effect_id?: string
         /** Optional */
         reply_parameters?: ReplyParameters
         /** Optional */
         reply_markup?: InlineKeyboardMarkup
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('sendInvoice', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to set the result of an interaction with a Web App and send a corresponding message on behalf of the user to the chat from which the query originated. On success, a SentWebAppMessage object is returned.
    */
   async answerWebAppQuery(body: {
      /** Yes */
      web_app_query_id: string
      /** Yes */
      result: InlineQueryResult
   }): Promise<any> {
      try {
         return await this.makeRequest('answerWebAppQuery', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to send answers to an inline query. On success, True is returned.No more than 50 results per query are allowed.
    */
   async answerInlineQuery(
      body: {
         /** Yes */
         inline_query_id: string
         /** Yes */
         results: InlineQueryResult[]
      },
      extra?: {
         /** Optional */
         cache_time?: number
         /** Optional */
         is_personal?: boolean
         /** Optional */
         next_offset?: string
         /** Optional */
         button?: InlineQueryResultsButton
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('answerInlineQuery', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to delete a sticker set that was created by the bot. Returns True on success.The following methods and objects allow your bot to work in inline mode.Please see our Introduction to Inline bots for more details.To enable this option, send the /setinline command to @BotFather and provide the placeholder text that the user will see in the input field after typing your bot's name.
    */
   async deleteStickerSet(body: {
      /** Yes */
      name: string
   }): Promise<any> {
      try {
         return await this.makeRequest('deleteStickerSet', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to set the thumbnail of a custom emoji sticker set. Returns True on success.
    */
   async setCustomEmojiStickerSetThumbnail(
      body: {
         /** Yes */
         name: string
      },
      extra?: {
         /** Optional */
         custom_emoji_id?: string
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('setCustomEmojiStickerSetThumbnail', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to set the thumbnail of a regular or mask sticker set. The format of the thumbnail file must match the format of the stickers in the set. Returns True on success.
    */
   async setStickerSetThumbnail(
      body: {
         /** Yes */
         name: string
         /** Yes */
         user_id: number
         /** Yes */
         format: string
      },
      extra?: {
         /** Optional */
         thumbnail?: InputFile | string
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('setStickerSetThumbnail', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to set the title of a created sticker set. Returns True on success.
    */
   async setStickerSetTitle(body: {
      /** Yes */
      name: string
      /** Yes */
      title: string
   }): Promise<any> {
      try {
         return await this.makeRequest('setStickerSetTitle', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to change the mask position of a mask sticker. The sticker must belong to a sticker set that was created by the bot. Returns True on success.
    */
   async setStickerMaskPosition(
      body: {
         /** Yes */
         sticker: string
      },
      extra?: {
         /** Optional */
         mask_position?: MaskPosition
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('setStickerMaskPosition', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to change search keywords assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.
    */
   async setStickerKeywords(
      body: {
         /** Yes */
         sticker: string
      },
      extra?: {
         /** Optional */
         keywords?: string[]
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('setStickerKeywords', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to change the list of emoji assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.
    */
   async setStickerEmojiList(body: {
      /** Yes */
      sticker: string
      /** Yes */
      emoji_list: string[]
   }): Promise<any> {
      try {
         return await this.makeRequest('setStickerEmojiList', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to replace an existing sticker in a sticker set with a new one. The method is equivalent to calling deleteStickerFromSet, then addStickerToSet, then setStickerPositionInSet. Returns True on success.
    */
   async replaceStickerInSet(body: {
      /** Yes */
      user_id: number
      /** Yes */
      name: string
      /** Yes */
      old_sticker: string
      /** Yes */
      sticker: InputSticker
   }): Promise<any> {
      try {
         return await this.makeRequest('replaceStickerInSet', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to delete a sticker from a set created by the bot. Returns True on success.
    */
   async deleteStickerFromSet(body: {
      /** Yes */
      sticker: string
   }): Promise<any> {
      try {
         return await this.makeRequest('deleteStickerFromSet', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to move a sticker in a set created by the bot to a specific position. Returns True on success.
    */
   async setStickerPositionInSet(body: {
      /** Yes */
      sticker: string
      /** Yes */
      position: number
   }): Promise<any> {
      try {
         return await this.makeRequest('setStickerPositionInSet', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to add a new sticker to a set created by the bot. Emoji sticker sets can have up to 200 stickers. Other sticker sets can have up to 120 stickers. Returns True on success.
    */
   async addStickerToSet(body: {
      /** Yes */
      user_id: number
      /** Yes */
      name: string
      /** Yes */
      sticker: InputSticker
   }): Promise<any> {
      try {
         return await this.makeRequest('addStickerToSet', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. Returns True on success.
    */
   async createNewStickerSet(
      body: {
         /** Yes */
         user_id: number
         /** Yes */
         name: string
         /** Yes */
         title: string
         /** Yes */
         stickers: InputSticker[]
      },
      extra?: {
         /** Optional */
         sticker_type?: string
         /** Optional */
         needs_repainting?: boolean
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('createNewStickerSet', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to upload a file with a sticker for later use in the createNewStickerSet, addStickerToSet, or replaceStickerInSet methods (the file can be used multiple times). Returns the uploaded File on success.
    */
   async uploadStickerFile(body: {
      /** Yes */
      user_id: number
      /** Yes */
      sticker: InputFile
      /** Yes */
      sticker_format: string
   }): Promise<any> {
      try {
         return await this.makeRequest('uploadStickerFile', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to get information about custom emoji stickers by their identifiers. Returns an Array of Sticker objects.
    */
   async getCustomEmojiStickers(body: {
      /** Yes */
      custom_emoji_ids: string[]
   }): Promise<any> {
      try {
         return await this.makeRequest('getCustomEmojiStickers', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to get a sticker set. On success, a StickerSet object is returned.
    */
   async getStickerSet(body: {
      /** Yes */
      name: string
   }): Promise<any> {
      try {
         return await this.makeRequest('getStickerSet', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to send static .WEBP, animated .TGS, or video .WEBM stickers. On success, the sent Message is returned.
    */
   async sendSticker(
      body: {
         /** Yes */
         chat_id: number | string
         /** Yes */
         sticker: InputFile | string
      },
      extra?: {
         /** Optional */
         business_connection_id?: string
         /** Optional */
         message_thread_id?: number
         /** Optional */
         emoji?: string
         /** Optional */
         disable_notification?: boolean
         /** Optional */
         protect_content?: boolean
         /** Optional */
         message_effect_id?: string
         /** Optional */
         reply_parameters?: ReplyParameters
         /** Optional */
         reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('sendSticker', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to delete multiple messages simultaneously. If some of the specified messages can't be found, they are skipped. Returns True on success.The following methods and objects allow your bot to handle stickers and sticker sets.
    */
   async deleteMessages(body: {
      /** Yes */
      chat_id: number | string
      /** Yes */
      message_ids: number[]
   }): Promise<any> {
      try {
         return await this.makeRequest('deleteMessages', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to delete a message, including service messages, with the following limitations:- A message can only be deleted if it was sent less than 48 hours ago.- Service messages about a supergroup, channel, or forum topic creation can't be deleted.- A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.- Bots can delete outgoing messages in private chats, groups, and supergroups.- Bots can delete incoming messages in private chats.- Bots granted can_post_messages permissions can delete outgoing messages in channels.- If the bot is an administrator of a group, it can delete any message there.- If the bot has can_delete_messages permission in a supergroup or a channel, it can delete any message there.Returns True on success.
    */
   async deleteMessage(body: {
      /** Yes */
      chat_id: number | string
      /** Yes */
      message_id: number
   }): Promise<any> {
      try {
         return await this.makeRequest('deleteMessage', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to stop a poll which was sent by the bot. On success, the stopped Poll is returned.
    */
   async stopPoll(
      body: {
         /** Yes */
         chat_id: number | string
         /** Yes */
         message_id: number
      },
      extra?: {
         /** Optional */
         business_connection_id?: string
         /** Optional */
         reply_markup?: InlineKeyboardMarkup
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('stopPoll', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.
    */
   async editMessageReplyMarkup(extra?: {
      /** Optional */
      business_connection_id?: string
      /** Optional */
      chat_id?: number | string
      /** Optional */
      message_id?: number
      /** Optional */
      inline_message_id?: string
      /** Optional */
      reply_markup?: InlineKeyboardMarkup
   }): Promise<any> {
      try {
         return await this.makeRequest('editMessageReplyMarkup', extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to stop updating a live location message before live_period expires. On success, if the message is not an inline message, the edited Message is returned, otherwise True is returned.
    */
   async stopMessageLiveLocation(extra?: {
      /** Optional */
      business_connection_id?: string
      /** Optional */
      chat_id?: number | string
      /** Optional */
      message_id?: number
      /** Optional */
      inline_message_id?: string
      /** Optional */
      reply_markup?: InlineKeyboardMarkup
   }): Promise<any> {
      try {
         return await this.makeRequest('stopMessageLiveLocation', extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to edit live location messages. A location can be edited until its live_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
    */
   async editMessageLiveLocation(
      body: {
         /** Yes */
         latitude: number
         /** Yes */
         longitude: number
      },
      extra?: {
         /** Optional */
         business_connection_id?: string
         /** Optional */
         chat_id?: number | string
         /** Optional */
         message_id?: number
         /** Optional */
         inline_message_id?: string
         /** Optional */
         live_period?: number
         /** Optional */
         horizontal_accuracy?: number
         /** Optional */
         heading?: number
         /** Optional */
         proximity_alert_radius?: number
         /** Optional */
         reply_markup?: InlineKeyboardMarkup
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('editMessageLiveLocation', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to edit animation, audio, document, photo, or video messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can't be uploaded; use a previously uploaded file via its file_id or specify a URL. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.
    */
   async editMessageMedia(
      body: {
         /** Yes */
         media: InputMedia
      },
      extra?: {
         /** Optional */
         business_connection_id?: string
         /** Optional */
         chat_id?: number | string
         /** Optional */
         message_id?: number
         /** Optional */
         inline_message_id?: string
         /** Optional */
         reply_markup?: InlineKeyboardMarkup
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('editMessageMedia', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.
    */
   async editMessageCaption(extra?: {
      /** Optional */
      business_connection_id?: string
      /** Optional */
      chat_id?: number | string
      /** Optional */
      message_id?: number
      /** Optional */
      inline_message_id?: string
      /** Optional */
      caption?: string
      /** Optional */
      parse_mode?: string
      /** Optional */
      caption_entities?: MessageEntity[]
      /** Optional */
      show_caption_above_media?: boolean
      /** Optional */
      reply_markup?: InlineKeyboardMarkup
   }): Promise<any> {
      try {
         return await this.makeRequest('editMessageCaption', extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to edit text and game messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.
    */
   async editMessageText(
      body: {
         /** Yes */
         text: string
      },
      extra?: {
         /** Optional */
         business_connection_id?: string
         /** Optional */
         chat_id?: number | string
         /** Optional */
         message_id?: number
         /** Optional */
         inline_message_id?: string
         /** Optional */
         parse_mode?: string
         /** Optional */
         entities?: MessageEntity[]
         /** Optional */
         link_preview_options?: LinkPreviewOptions
         /** Optional */
         reply_markup?: InlineKeyboardMarkup
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('editMessageText', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to get the current default administrator rights of the bot. Returns ChatAdministratorRights on success.Methods and objects used in the inline mode are described in the Inline mode section.The following methods allow you to change an existing message in the message history instead of sending a new one with a result of an action. This is most useful for messages with inline keyboards using callback queries, but can also help reduce clutter in conversations with regular chat bots.Please note, that it is currently only possible to edit messages without reply_markup or with inline keyboards.
    */
   async getMyDefaultAdministratorRights(extra?: {
      /** Optional */
      for_channels?: boolean
   }): Promise<any> {
      try {
         return await this.makeRequest('getMyDefaultAdministratorRights', extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to change the default administrator rights requested by the bot when it's added as an administrator to groups or channels. These rights will be suggested to users, but they are free to modify the list before adding the bot. Returns True on success.
    */
   async setMyDefaultAdministratorRights(extra?: {
      /** Optional */
      rights?: ChatAdministratorRights
      /** Optional */
      for_channels?: boolean
   }): Promise<any> {
      try {
         return await this.makeRequest('setMyDefaultAdministratorRights', extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to get the current value of the bot's menu button in a private chat, or the default menu button. Returns MenuButton on success.
    */
   async getChatMenuButton(extra?: {
      /** Optional */
      chat_id?: number
   }): Promise<any> {
      try {
         return await this.makeRequest('getChatMenuButton', extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to change the bot's menu button in a private chat, or the default menu button. Returns True on success.
    */
   async setChatMenuButton(extra?: {
      /** Optional */
      chat_id?: number
      /** Optional */
      menu_button?: MenuButton
   }): Promise<any> {
      try {
         return await this.makeRequest('setChatMenuButton', extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to get the current bot short description for the given user language. Returns BotShortDescription on success.
    */
   async getMyShortDescription(extra?: {
      /** Optional */
      language_code?: string
   }): Promise<any> {
      try {
         return await this.makeRequest('getMyShortDescription', extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to change the bot's short description, which is shown on the bot's profile page and is sent together with the link when users share the bot. Returns True on success.
    */
   async setMyShortDescription(extra?: {
      /** Optional */
      short_description?: string
      /** Optional */
      language_code?: string
   }): Promise<any> {
      try {
         return await this.makeRequest('setMyShortDescription', extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to get the current bot description for the given user language. Returns BotDescription on success.
    */
   async getMyDescription(extra?: {
      /** Optional */
      language_code?: string
   }): Promise<any> {
      try {
         return await this.makeRequest('getMyDescription', extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to change the bot's description, which is shown in the chat with the bot if the chat is empty. Returns True on success.
    */
   async setMyDescription(extra?: {
      /** Optional */
      description?: string
      /** Optional */
      language_code?: string
   }): Promise<any> {
      try {
         return await this.makeRequest('setMyDescription', extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to get the current bot name for the given user language. Returns BotName on success.
    */
   async getMyName(extra?: {
      /** Optional */
      language_code?: string
   }): Promise<any> {
      try {
         return await this.makeRequest('getMyName', extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to change the bot's name. Returns True on success.
    */
   async setMyName(extra?: {
      /** Optional */
      name?: string
      /** Optional */
      language_code?: string
   }): Promise<any> {
      try {
         return await this.makeRequest('setMyName', extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to get the current list of the bot's commands for the given scope and user language. Returns an Array of BotCommand objects. If commands aren't set, an empty list is returned.
    */
   async getMyCommands(extra?: {
      /** Optional */
      scope?: BotCommandScope
      /** Optional */
      language_code?: string
   }): Promise<any> {
      try {
         return await this.makeRequest('getMyCommands', extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to delete the list of the bot's commands for the given scope and user language. After deletion, higher level commands will be shown to affected users. Returns True on success.
    */
   async deleteMyCommands(extra?: {
      /** Optional */
      scope?: BotCommandScope
      /** Optional */
      language_code?: string
   }): Promise<any> {
      try {
         return await this.makeRequest('deleteMyCommands', extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to change the list of the bot's commands. See this manual for more details about bot commands. Returns True on success.
    */
   async setMyCommands(
      body: {
         /** Yes */
         commands: BotCommand[]
      },
      extra?: {
         /** Optional */
         scope?: BotCommandScope
         /** Optional */
         language_code?: string
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('setMyCommands', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to get information about the connection of the bot with a business account. Returns a BusinessConnection object on success.
    */
   async getBusinessConnection(body: {
      /** Yes */
      business_connection_id: string
   }): Promise<any> {
      try {
         return await this.makeRequest('getBusinessConnection', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to get the list of boosts added to a chat by a user. Requires administrator rights in the chat. Returns a UserChatBoosts object.
    */
   async getUserChatBoosts(body: {
      /** Yes */
      chat_id: number | string
      /** Yes */
      user_id: number
   }): Promise<any> {
      try {
         return await this.makeRequest('getUserChatBoosts', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to send answers to callback queries sent from inline keyboards. The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, True is returned.
    */
   async answerCallbackQuery(
      body: {
         /** Yes */
         callback_query_id: string
      },
      extra?: {
         /** Optional */
         text?: string
         /** Optional */
         show_alert?: boolean
         /** Optional */
         url?: string
         /** Optional */
         cache_time?: number
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('answerCallbackQuery', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to clear the list of pinned messages in a General forum topic. The bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success.
    */
   async unpinAllGeneralForumTopicMessages(body: {
      /** Yes */
      chat_id: number | string
   }): Promise<any> {
      try {
         return await this.makeRequest('unpinAllGeneralForumTopicMessages', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to unhide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.
    */
   async unhideGeneralForumTopic(body: {
      /** Yes */
      chat_id: number | string
   }): Promise<any> {
      try {
         return await this.makeRequest('unhideGeneralForumTopic', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to hide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically closed if it was open. Returns True on success.
    */
   async hideGeneralForumTopic(body: {
      /** Yes */
      chat_id: number | string
   }): Promise<any> {
      try {
         return await this.makeRequest('hideGeneralForumTopic', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to reopen a closed 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically unhidden if it was hidden. Returns True on success.
    */
   async reopenGeneralForumTopic(body: {
      /** Yes */
      chat_id: number | string
   }): Promise<any> {
      try {
         return await this.makeRequest('reopenGeneralForumTopic', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to close an open 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.
    */
   async closeGeneralForumTopic(body: {
      /** Yes */
      chat_id: number | string
   }): Promise<any> {
      try {
         return await this.makeRequest('closeGeneralForumTopic', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to edit the name of the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.
    */
   async editGeneralForumTopic(body: {
      /** Yes */
      chat_id: number | string
      /** Yes */
      name: string
   }): Promise<any> {
      try {
         return await this.makeRequest('editGeneralForumTopic', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to clear the list of pinned messages in a forum topic. The bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success.
    */
   async unpinAllForumTopicMessages(body: {
      /** Yes */
      chat_id: number | string
      /** Yes */
      message_thread_id: number
   }): Promise<any> {
      try {
         return await this.makeRequest('unpinAllForumTopicMessages', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to delete a forum topic along with all its messages in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_delete_messages administrator rights. Returns True on success.
    */
   async deleteForumTopic(body: {
      /** Yes */
      chat_id: number | string
      /** Yes */
      message_thread_id: number
   }): Promise<any> {
      try {
         return await this.makeRequest('deleteForumTopic', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to reopen a closed topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.
    */
   async reopenForumTopic(body: {
      /** Yes */
      chat_id: number | string
      /** Yes */
      message_thread_id: number
   }): Promise<any> {
      try {
         return await this.makeRequest('reopenForumTopic', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to close an open topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.
    */
   async closeForumTopic(body: {
      /** Yes */
      chat_id: number | string
      /** Yes */
      message_thread_id: number
   }): Promise<any> {
      try {
         return await this.makeRequest('closeForumTopic', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to edit name and icon of a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.
    */
   async editForumTopic(
      body: {
         /** Yes */
         chat_id: number | string
         /** Yes */
         message_thread_id: number
      },
      extra?: {
         /** Optional */
         name?: string
         /** Optional */
         icon_custom_emoji_id?: string
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('editForumTopic', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to create a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns information about the created topic as a ForumTopic object.
    */
   async createForumTopic(
      body: {
         /** Yes */
         chat_id: number | string
         /** Yes */
         name: string
      },
      extra?: {
         /** Optional */
         icon_color?: number
         /** Optional */
         icon_custom_emoji_id?: string
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('createForumTopic', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to get custom emoji stickers, which can be used as a forum topic icon by any user. Requires no parameters. Returns an Array of Sticker objects.
    */
   async getForumTopicIconStickers(): Promise<any> {
      try {
         return await this.makeRequest('getForumTopicIconStickers')
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.
    */
   async deleteChatStickerSet(body: {
      /** Yes */
      chat_id: number | string
   }): Promise<any> {
      try {
         return await this.makeRequest('deleteChatStickerSet', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.
    */
   async setChatStickerSet(body: {
      /** Yes */
      chat_id: number | string
      /** Yes */
      sticker_set_name: string
   }): Promise<any> {
      try {
         return await this.makeRequest('setChatStickerSet', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to get information about a member of a chat. The method is only guaranteed to work for other users if the bot is an administrator in the chat. Returns a ChatMember object on success.
    */
   async getChatMember(body: {
      /** Yes */
      chat_id: number | string
      /** Yes */
      user_id: number
   }): Promise<any> {
      try {
         return await this.makeRequest('getChatMember', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to get the number of members in a chat. Returns Int on success.
    */
   async getChatMemberCount(body: {
      /** Yes */
      chat_id: number | string
   }): Promise<any> {
      try {
         return await this.makeRequest('getChatMemberCount', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to get a list of administrators in a chat, which aren't bots. Returns an Array of ChatMember objects.
    */
   async getChatAdministrators(body: {
      /** Yes */
      chat_id: number | string
   }): Promise<any> {
      try {
         return await this.makeRequest('getChatAdministrators', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to get up-to-date information about the chat. Returns a ChatFullInfo object on success.
    */
   async getChat(body: {
      /** Yes */
      chat_id: number | string
   }): Promise<any> {
      try {
         return await this.makeRequest('getChat', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method for your bot to leave a group, supergroup or channel. Returns True on success.
    */
   async leaveChat(body: {
      /** Yes */
      chat_id: number | string
   }): Promise<any> {
      try {
         return await this.makeRequest('leaveChat', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to clear the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success.
    */
   async unpinAllChatMessages(body: {
      /** Yes */
      chat_id: number | string
   }): Promise<any> {
      try {
         return await this.makeRequest('unpinAllChatMessages', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to remove a message from the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success.
    */
   async unpinChatMessage(
      body: {
         /** Yes */
         chat_id: number | string
      },
      extra?: {
         /** Optional */
         business_connection_id?: string
         /** Optional */
         message_id?: number
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('unpinChatMessage', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to add a message to the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success.
    */
   async pinChatMessage(
      body: {
         /** Yes */
         chat_id: number | string
         /** Yes */
         message_id: number
      },
      extra?: {
         /** Optional */
         business_connection_id?: string
         /** Optional */
         disable_notification?: boolean
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('pinChatMessage', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
    */
   async setChatDescription(
      body: {
         /** Yes */
         chat_id: number | string
      },
      extra?: {
         /** Optional */
         description?: string
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('setChatDescription', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
    */
   async setChatTitle(body: {
      /** Yes */
      chat_id: number | string
      /** Yes */
      title: string
   }): Promise<any> {
      try {
         return await this.makeRequest('setChatTitle', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
    */
   async deleteChatPhoto(body: {
      /** Yes */
      chat_id: number | string
   }): Promise<any> {
      try {
         return await this.makeRequest('deleteChatPhoto', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
    */
   async setChatPhoto(body: {
      /** Yes */
      chat_id: number | string
      /** Yes */
      photo: InputFile
   }): Promise<any> {
      try {
         return await this.makeRequest('setChatPhoto', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to decline a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success.
    */
   async declineChatJoinRequest(body: {
      /** Yes */
      chat_id: number | string
      /** Yes */
      user_id: number
   }): Promise<any> {
      try {
         return await this.makeRequest('declineChatJoinRequest', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to approve a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success.
    */
   async approveChatJoinRequest(body: {
      /** Yes */
      chat_id: number | string
      /** Yes */
      user_id: number
   }): Promise<any> {
      try {
         return await this.makeRequest('approveChatJoinRequest', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new link is automatically generated. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the revoked invite link as ChatInviteLink object.
    */
   async revokeChatInviteLink(body: {
      /** Yes */
      chat_id: number | string
      /** Yes */
      invite_link: string
   }): Promise<any> {
      try {
         return await this.makeRequest('revokeChatInviteLink', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to edit a subscription invite link created by the bot. The bot must have the can_invite_users administrator rights. Returns the edited invite link as a ChatInviteLink object.
    */
   async editChatSubscriptionInviteLink(
      body: {
         /** Yes */
         chat_id: number | string
         /** Yes */
         invite_link: string
      },
      extra?: {
         /** Optional */
         name?: string
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('editChatSubscriptionInviteLink', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to create a subscription invite link for a channel chat. The bot must have the can_invite_users administrator rights. The link can be edited using the method editChatSubscriptionInviteLink or revoked using the method revokeChatInviteLink. Returns the new invite link as a ChatInviteLink object.
    */
   async createChatSubscriptionInviteLink(
      body: {
         /** Yes */
         chat_id: number | string
         /** Yes */
         subscription_period: number
         /** Yes */
         subscription_price: number
      },
      extra?: {
         /** Optional */
         name?: string
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('createChatSubscriptionInviteLink', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the edited invite link as a ChatInviteLink object.
    */
   async editChatInviteLink(
      body: {
         /** Yes */
         chat_id: number | string
         /** Yes */
         invite_link: string
      },
      extra?: {
         /** Optional */
         name?: string
         /** Optional */
         expire_date?: number
         /** Optional */
         member_limit?: number
         /** Optional */
         creates_join_request?: boolean
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('editChatInviteLink', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to create an additional invite link for a chat. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. The link can be revoked using the method revokeChatInviteLink. Returns the new invite link as ChatInviteLink object.
    */
   async createChatInviteLink(
      body: {
         /** Yes */
         chat_id: number | string
      },
      extra?: {
         /** Optional */
         name?: string
         /** Optional */
         expire_date?: number
         /** Optional */
         member_limit?: number
         /** Optional */
         creates_join_request?: boolean
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('createChatInviteLink', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to generate a new primary invite link for a chat; any previously generated primary link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the new invite link as String on success.
    */
   async exportChatInviteLink(body: {
      /** Yes */
      chat_id: number | string
   }): Promise<any> {
      try {
         return await this.makeRequest('exportChatInviteLink', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the can_restrict_members administrator rights. Returns True on success.
    */
   async setChatPermissions(
      body: {
         /** Yes */
         chat_id: number | string
         /** Yes */
         permissions: ChatPermissions
      },
      extra?: {
         /** Optional */
         use_independent_chat_permissions?: boolean
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('setChatPermissions', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to unban a previously banned channel chat in a supergroup or channel. The bot must be an administrator for this to work and must have the appropriate administrator rights. Returns True on success.
    */
   async unbanChatSenderChat(body: {
      /** Yes */
      chat_id: number | string
      /** Yes */
      sender_chat_id: number
   }): Promise<any> {
      try {
         return await this.makeRequest('unbanChatSenderChat', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to ban a channel chat in a supergroup or a channel. Until the chat is unbanned, the owner of the banned chat won't be able to send messages on behalf of any of their channels. The bot must be an administrator in the supergroup or channel for this to work and must have the appropriate administrator rights. Returns True on success.
    */
   async banChatSenderChat(body: {
      /** Yes */
      chat_id: number | string
      /** Yes */
      sender_chat_id: number
   }): Promise<any> {
      try {
         return await this.makeRequest('banChatSenderChat', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns True on success.
    */
   async setChatAdministratorCustomTitle(body: {
      /** Yes */
      chat_id: number | string
      /** Yes */
      user_id: number
      /** Yes */
      custom_title: string
   }): Promise<any> {
      try {
         return await this.makeRequest('setChatAdministratorCustomTitle', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Pass False for all boolean parameters to demote a user. Returns True on success.
    */
   async promoteChatMember(
      body: {
         /** Yes */
         chat_id: number | string
         /** Yes */
         user_id: number
      },
      extra?: {
         /** Optional */
         is_anonymous?: boolean
         /** Optional */
         can_manage_chat?: boolean
         /** Optional */
         can_delete_messages?: boolean
         /** Optional */
         can_manage_video_chats?: boolean
         /** Optional */
         can_restrict_members?: boolean
         /** Optional */
         can_promote_members?: boolean
         /** Optional */
         can_change_info?: boolean
         /** Optional */
         can_invite_users?: boolean
         /** Optional */
         can_post_stories?: boolean
         /** Optional */
         can_edit_stories?: boolean
         /** Optional */
         can_delete_stories?: boolean
         /** Optional */
         can_post_messages?: boolean
         /** Optional */
         can_edit_messages?: boolean
         /** Optional */
         can_pin_messages?: boolean
         /** Optional */
         can_manage_topics?: boolean
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('promoteChatMember', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate administrator rights. Pass True for all permissions to lift restrictions from a user. Returns True on success.
    */
   async restrictChatMember(
      body: {
         /** Yes */
         chat_id: number | string
         /** Yes */
         user_id: number
         /** Yes */
         permissions: ChatPermissions
      },
      extra?: {
         /** Optional */
         use_independent_chat_permissions?: boolean
         /** Optional */
         until_date?: number
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('restrictChatMember', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to unban a previously banned user in a supergroup or channel. The user will not return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be removed from the chat. If you don't want this, use the parameter only_if_banned. Returns True on success.
    */
   async unbanChatMember(
      body: {
         /** Yes */
         chat_id: number | string
         /** Yes */
         user_id: number
      },
      extra?: {
         /** Optional */
         only_if_banned?: boolean
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('unbanChatMember', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to ban a user in a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the chat on their own using invite links, etc., unless unbanned first. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
    */
   async banChatMember(
      body: {
         /** Yes */
         chat_id: number | string
         /** Yes */
         user_id: number
      },
      extra?: {
         /** Optional */
         until_date?: number
         /** Optional */
         revoke_messages?: boolean
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('banChatMember', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to get basic information about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a File object is returned. The file can then be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>, where <file_path> is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile again.Note: This function may not preserve the original file name and MIME type. You should save the file's MIME type and name (if available) when the File object is received.
    */
   async getFile(body: {
      /** Yes */
      file_id: string
   }): Promise<any> {
      try {
         return await this.makeRequest('getFile', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to get a list of profile pictures for a user. Returns a UserProfilePhotos object.
    */
   async getUserProfilePhotos(
      body: {
         /** Yes */
         user_id: number
      },
      extra?: {
         /** Optional */
         offset?: number
         /** Optional */
         limit?: number
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('getUserProfilePhotos', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to change the chosen reactions on a message. Service messages can't be reacted to. Automatically forwarded messages from a channel to its discussion group have the same available reactions as messages in the channel. Bots can't use paid reactions. Returns True on success.
    */
   async setMessageReaction(
      body: {
         /** Yes */
         chat_id: number | string
         /** Yes */
         message_id: number
      },
      extra?: {
         /** Optional */
         reaction?: ReactionType[]
         /** Optional */
         is_big?: boolean
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('setMessageReaction', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method when you need to tell the user that something is happening on the bot's side. The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status). Returns True on success.We only recommend using this method when a response from the bot will take a noticeable amount of time to arrive.
    */
   async sendChatAction(
      body: {
         /** Yes */
         chat_id: number | string
         /** Yes */
         action: string
      },
      extra?: {
         /** Optional */
         business_connection_id?: string
         /** Optional */
         message_thread_id?: number
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('sendChatAction', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to send an animated emoji that will display a random value. On success, the sent Message is returned.
    */
   async sendDice(
      body: {
         /** Yes */
         chat_id: number | string
      },
      extra?: {
         /** Optional */
         business_connection_id?: string
         /** Optional */
         message_thread_id?: number
         /** Optional */
         emoji?: string
         /** Optional */
         disable_notification?: boolean
         /** Optional */
         protect_content?: boolean
         /** Optional */
         message_effect_id?: string
         /** Optional */
         reply_parameters?: ReplyParameters
         /** Optional */
         reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('sendDice', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to send a native poll. On success, the sent Message is returned.
    */
   async sendPoll(
      body: {
         /** Yes */
         chat_id: number | string
         /** Yes */
         question: string
         /** Yes */
         options: InputPollOption[]
      },
      extra?: {
         /** Optional */
         business_connection_id?: string
         /** Optional */
         message_thread_id?: number
         /** Optional */
         question_parse_mode?: string
         /** Optional */
         question_entities?: MessageEntity[]
         /** Optional */
         is_anonymous?: boolean
         /** Optional */
         type?: string
         /** Optional */
         allows_multiple_answers?: boolean
         /** Optional */
         correct_option_id?: number
         /** Optional */
         explanation?: string
         /** Optional */
         explanation_parse_mode?: string
         /** Optional */
         explanation_entities?: MessageEntity[]
         /** Optional */
         open_period?: number
         /** Optional */
         close_date?: number
         /** Optional */
         is_closed?: boolean
         /** Optional */
         disable_notification?: boolean
         /** Optional */
         protect_content?: boolean
         /** Optional */
         message_effect_id?: string
         /** Optional */
         reply_parameters?: ReplyParameters
         /** Optional */
         reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('sendPoll', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to send phone contacts. On success, the sent Message is returned.
    */
   async sendContact(
      body: {
         /** Yes */
         chat_id: number | string
         /** Yes */
         phone_number: string
         /** Yes */
         first_name: string
      },
      extra?: {
         /** Optional */
         business_connection_id?: string
         /** Optional */
         message_thread_id?: number
         /** Optional */
         last_name?: string
         /** Optional */
         vcard?: string
         /** Optional */
         disable_notification?: boolean
         /** Optional */
         protect_content?: boolean
         /** Optional */
         message_effect_id?: string
         /** Optional */
         reply_parameters?: ReplyParameters
         /** Optional */
         reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('sendContact', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to send information about a venue. On success, the sent Message is returned.
    */
   async sendVenue(
      body: {
         /** Yes */
         chat_id: number | string
         /** Yes */
         latitude: number
         /** Yes */
         longitude: number
         /** Yes */
         title: string
         /** Yes */
         address: string
      },
      extra?: {
         /** Optional */
         business_connection_id?: string
         /** Optional */
         message_thread_id?: number
         /** Optional */
         foursquare_id?: string
         /** Optional */
         foursquare_type?: string
         /** Optional */
         google_place_id?: string
         /** Optional */
         google_place_type?: string
         /** Optional */
         disable_notification?: boolean
         /** Optional */
         protect_content?: boolean
         /** Optional */
         message_effect_id?: string
         /** Optional */
         reply_parameters?: ReplyParameters
         /** Optional */
         reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('sendVenue', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to send point on the map. On success, the sent Message is returned.
    */
   async sendLocation(
      body: {
         /** Yes */
         chat_id: number | string
         /** Yes */
         latitude: number
         /** Yes */
         longitude: number
      },
      extra?: {
         /** Optional */
         business_connection_id?: string
         /** Optional */
         message_thread_id?: number
         /** Optional */
         horizontal_accuracy?: number
         /** Optional */
         live_period?: number
         /** Optional */
         heading?: number
         /** Optional */
         proximity_alert_radius?: number
         /** Optional */
         disable_notification?: boolean
         /** Optional */
         protect_content?: boolean
         /** Optional */
         message_effect_id?: string
         /** Optional */
         reply_parameters?: ReplyParameters
         /** Optional */
         reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('sendLocation', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of Messages that were sent is returned.
    */
   async sendMediaGroup(
      body: {
         /** Yes */
         chat_id: number | string
         /** Yes */
         media: InputMediaAudio[] | InputMediaDocument | InputMediaPhoto | InputMediaVideo
      },
      extra?: {
         /** Optional */
         business_connection_id?: string
         /** Optional */
         message_thread_id?: number
         /** Optional */
         disable_notification?: boolean
         /** Optional */
         protect_content?: boolean
         /** Optional */
         message_effect_id?: string
         /** Optional */
         reply_parameters?: ReplyParameters
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('sendMediaGroup', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to send paid media. On success, the sent Message is returned.
    */
   async sendPaidMedia(
      body: {
         /** Yes */
         chat_id: number | string
         /** Yes */
         star_count: number
         /** Yes */
         media: InputPaidMedia[]
      },
      extra?: {
         /** Optional */
         business_connection_id?: string
         /** Optional */
         payload?: string
         /** Optional */
         caption?: string
         /** Optional */
         parse_mode?: string
         /** Optional */
         caption_entities?: MessageEntity[]
         /** Optional */
         show_caption_above_media?: boolean
         /** Optional */
         disable_notification?: boolean
         /** Optional */
         protect_content?: boolean
         /** Optional */
         reply_parameters?: ReplyParameters
         /** Optional */
         reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('sendPaidMedia', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * As of v.4.0, Telegram clients support rounded square MPEG4 videos of up to 1 minute long. Use this method to send video messages. On success, the sent Message is returned.
    */
   async sendVideoNote(
      body: {
         /** Yes */
         chat_id: number | string
         /** Yes */
         video_note: InputFile | string
      },
      extra?: {
         /** Optional */
         business_connection_id?: string
         /** Optional */
         message_thread_id?: number
         /** Optional */
         duration?: number
         /** Optional */
         length?: number
         /** Optional */
         thumbnail?: InputFile | string
         /** Optional */
         disable_notification?: boolean
         /** Optional */
         protect_content?: boolean
         /** Optional */
         message_effect_id?: string
         /** Optional */
         reply_parameters?: ReplyParameters
         /** Optional */
         reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('sendVideoNote', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS, or in .MP3 format, or in .M4A format (other formats may be sent as Audio or Document). On success, the sent Message is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.
    */
   async sendVoice(
      body: {
         /** Yes */
         chat_id: number | string
         /** Yes */
         voice: InputFile | string
      },
      extra?: {
         /** Optional */
         business_connection_id?: string
         /** Optional */
         message_thread_id?: number
         /** Optional */
         caption?: string
         /** Optional */
         parse_mode?: string
         /** Optional */
         caption_entities?: MessageEntity[]
         /** Optional */
         duration?: number
         /** Optional */
         disable_notification?: boolean
         /** Optional */
         protect_content?: boolean
         /** Optional */
         message_effect_id?: string
         /** Optional */
         reply_parameters?: ReplyParameters
         /** Optional */
         reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('sendVoice', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success, the sent Message is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future.
    */
   async sendAnimation(
      body: {
         /** Yes */
         chat_id: number | string
         /** Yes */
         animation: InputFile | string
      },
      extra?: {
         /** Optional */
         business_connection_id?: string
         /** Optional */
         message_thread_id?: number
         /** Optional */
         duration?: number
         /** Optional */
         width?: number
         /** Optional */
         height?: number
         /** Optional */
         thumbnail?: InputFile | string
         /** Optional */
         caption?: string
         /** Optional */
         parse_mode?: string
         /** Optional */
         caption_entities?: MessageEntity[]
         /** Optional */
         show_caption_above_media?: boolean
         /** Optional */
         has_spoiler?: boolean
         /** Optional */
         disable_notification?: boolean
         /** Optional */
         protect_content?: boolean
         /** Optional */
         message_effect_id?: string
         /** Optional */
         reply_parameters?: ReplyParameters
         /** Optional */
         reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('sendAnimation', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to send video files, Telegram clients support MPEG4 videos (other formats may be sent as Document). On success, the sent Message is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.
    */
   async sendVideo(
      body: {
         /** Yes */
         chat_id: number | string
         /** Yes */
         video: InputFile | string
      },
      extra?: {
         /** Optional */
         business_connection_id?: string
         /** Optional */
         message_thread_id?: number
         /** Optional */
         duration?: number
         /** Optional */
         width?: number
         /** Optional */
         height?: number
         /** Optional */
         thumbnail?: InputFile | string
         /** Optional */
         caption?: string
         /** Optional */
         parse_mode?: string
         /** Optional */
         caption_entities?: MessageEntity[]
         /** Optional */
         show_caption_above_media?: boolean
         /** Optional */
         has_spoiler?: boolean
         /** Optional */
         supports_streaming?: boolean
         /** Optional */
         disable_notification?: boolean
         /** Optional */
         protect_content?: boolean
         /** Optional */
         message_effect_id?: string
         /** Optional */
         reply_parameters?: ReplyParameters
         /** Optional */
         reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('sendVideo', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to send general files. On success, the sent Message is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.
    */
   async sendDocument(
      body: {
         /** Yes */
         chat_id: number | string
         /** Yes */
         document: InputFile | string
      },
      extra?: {
         /** Optional */
         business_connection_id?: string
         /** Optional */
         message_thread_id?: number
         /** Optional */
         thumbnail?: InputFile | string
         /** Optional */
         caption?: string
         /** Optional */
         parse_mode?: string
         /** Optional */
         caption_entities?: MessageEntity[]
         /** Optional */
         disable_content_type_detection?: boolean
         /** Optional */
         disable_notification?: boolean
         /** Optional */
         protect_content?: boolean
         /** Optional */
         message_effect_id?: string
         /** Optional */
         reply_parameters?: ReplyParameters
         /** Optional */
         reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('sendDocument', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent Message is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.For sending voice messages, use the sendVoice method instead.
    */
   async sendAudio(
      body: {
         /** Yes */
         chat_id: number | string
         /** Yes */
         audio: InputFile | string
      },
      extra?: {
         /** Optional */
         business_connection_id?: string
         /** Optional */
         message_thread_id?: number
         /** Optional */
         caption?: string
         /** Optional */
         parse_mode?: string
         /** Optional */
         caption_entities?: MessageEntity[]
         /** Optional */
         duration?: number
         /** Optional */
         performer?: string
         /** Optional */
         title?: string
         /** Optional */
         thumbnail?: InputFile | string
         /** Optional */
         disable_notification?: boolean
         /** Optional */
         protect_content?: boolean
         /** Optional */
         message_effect_id?: string
         /** Optional */
         reply_parameters?: ReplyParameters
         /** Optional */
         reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('sendAudio', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to send photos. On success, the sent Message is returned.
    */
   async sendPhoto(
      body: {
         /** Yes */
         chat_id: number | string
         /** Yes */
         photo: InputFile | string
      },
      extra?: {
         /** Optional */
         business_connection_id?: string
         /** Optional */
         message_thread_id?: number
         /** Optional */
         caption?: string
         /** Optional */
         parse_mode?: string
         /** Optional */
         caption_entities?: MessageEntity[]
         /** Optional */
         show_caption_above_media?: boolean
         /** Optional */
         has_spoiler?: boolean
         /** Optional */
         disable_notification?: boolean
         /** Optional */
         protect_content?: boolean
         /** Optional */
         message_effect_id?: string
         /** Optional */
         reply_parameters?: ReplyParameters
         /** Optional */
         reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('sendPhoto', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to copy messages of any kind. If some of the specified messages can't be found or copied, they are skipped. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessages, but the copied messages don't have a link to the original message. Album grouping is kept for copied messages. On success, an array of MessageId of the sent messages is returned.
    */
   async copyMessages(
      body: {
         /** Yes */
         chat_id: number | string
         /** Yes */
         from_chat_id: number | string
         /** Yes */
         message_ids: number[]
      },
      extra?: {
         /** Optional */
         message_thread_id?: number
         /** Optional */
         disable_notification?: boolean
         /** Optional */
         protect_content?: boolean
         /** Optional */
         remove_caption?: boolean
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('copyMessages', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to copy messages of any kind. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessage, but the copied message doesn't have a link to the original message. Returns the MessageId of the sent message on success.
    */
   async copyMessage(
      body: {
         /** Yes */
         chat_id: number | string
         /** Yes */
         from_chat_id: number | string
         /** Yes */
         message_id: number
      },
      extra?: {
         /** Optional */
         message_thread_id?: number
         /** Optional */
         caption?: string
         /** Optional */
         parse_mode?: string
         /** Optional */
         caption_entities?: MessageEntity[]
         /** Optional */
         show_caption_above_media?: boolean
         /** Optional */
         disable_notification?: boolean
         /** Optional */
         protect_content?: boolean
         /** Optional */
         reply_parameters?: ReplyParameters
         /** Optional */
         reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('copyMessage', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to forward multiple messages of any kind. If some of the specified messages can't be found or forwarded, they are skipped. Service messages and messages with protected content can't be forwarded. Album grouping is kept for forwarded messages. On success, an array of MessageId of the sent messages is returned.
    */
   async forwardMessages(
      body: {
         /** Yes */
         chat_id: number | string
         /** Yes */
         from_chat_id: number | string
         /** Yes */
         message_ids: number[]
      },
      extra?: {
         /** Optional */
         message_thread_id?: number
         /** Optional */
         disable_notification?: boolean
         /** Optional */
         protect_content?: boolean
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('forwardMessages', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to forward messages of any kind. Service messages and messages with protected content can't be forwarded. On success, the sent Message is returned.
    */
   async forwardMessage(
      body: {
         /** Yes */
         chat_id: number | string
         /** Yes */
         from_chat_id: number | string
         /** Yes */
         message_id: number
      },
      extra?: {
         /** Optional */
         message_thread_id?: number
         /** Optional */
         disable_notification?: boolean
         /** Optional */
         protect_content?: boolean
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('forwardMessage', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to send text messages. On success, the sent Message is returned.The Bot API supports basic formatting for messages. You can use bold, italic, underlined, strikethrough, spoiler text, block quotations as well as inline links and pre-formatted code in your bots' messages. Telegram clients will render them accordingly. You can specify text entities directly, or use markdown-style or HTML-style formatting.Note that Telegram clients will display an alert to the user before opening an inline link ('Open this link?' together with the full URL).Message entities can be nested, providing following restrictions are met:- If two entities have common characters, then one of them is fully contained inside another.- bold, italic, underline, strikethrough, and spoiler entities can contain and can be part of any other entities, except pre and code.- blockquote and expandable_blockquote entities can't be nested.- All other entities can't contain each other.Links tg://user?id=<user_id> can be used to mention a user by their identifier without using a username. Please note:You can find the list of programming and markup languages for which syntax highlighting is supported at libprisma#supported-languages.To use this mode, pass MarkdownV2 in the parse_mode field. Use the following syntax in your message:Please note:To use this mode, pass HTML in the parse_mode field. The following tags are currently supported:Please note:This is a legacy mode, retained for backward compatibility. To use this mode, pass Markdown in the parse_mode field. Use the following syntax in your message:Please note:
    */
   async sendMessage(
      body: {
         /** Yes */
         chat_id: number | string
         /** Yes */
         text: string
      },
      extra?: {
         /** Optional */
         business_connection_id?: string
         /** Optional */
         message_thread_id?: number
         /** Optional */
         parse_mode?: string
         /** Optional */
         entities?: MessageEntity[]
         /** Optional */
         link_preview_options?: LinkPreviewOptions
         /** Optional */
         disable_notification?: boolean
         /** Optional */
         protect_content?: boolean
         /** Optional */
         message_effect_id?: string
         /** Optional */
         reply_parameters?: ReplyParameters
         /** Optional */
         reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('sendMessage', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn't launched again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched. Returns True on success. Requires no parameters.
    */
   async close(): Promise<any> {
      try {
         return await this.makeRequest('close')
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to log out from the cloud Bot API server before launching the bot locally. You must log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates. After a successful call, you can immediately log in on a local server, but will not be able to log in back to the cloud Bot API server for 10 minutes. Returns True on success. Requires no parameters.
    */
   async logOut(): Promise<any> {
      try {
         return await this.makeRequest('logOut')
      } catch (error: any) {
         throw error
      }
   }

   /**
    * A simple method for testing your bot's authentication token. Requires no parameters. Returns basic information about the bot in form of a User object.
    */
   async getMe(): Promise<any> {
      try {
         return await this.makeRequest('getMe')
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to get current webhook status. Requires no parameters. On success, returns a WebhookInfo object. If the bot is using getUpdates, will return an object with the url field empty.
    */
   async getWebhookInfo(): Promise<any> {
      try {
         return await this.makeRequest('getWebhookInfo')
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to remove webhook integration if you decide to switch back to getUpdates. Returns True on success.
    */
   async deleteWebhook(extra?: {
      /** Optional */
      drop_pending_updates?: boolean
   }): Promise<any> {
      try {
         return await this.makeRequest('deleteWebhook', extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to specify a URL and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified URL, containing a JSON-serialized Update. In case of an unsuccessful request, we will give up after a reasonable amount of attempts. Returns True on success.If you'd like to make sure that the webhook was set by you, you can specify secret data in the parameter secret_token. If specified, the request will contain a header “X-Telegram-Bot-Api-Secret-Token” with the secret token as content.
    */
   async setWebhook(
      body: {
         /** Yes */
         url: string
      },
      extra?: {
         /** Optional */
         certificate?: InputFile
         /** Optional */
         ip_address?: string
         /** Optional */
         max_connections?: number
         /** Optional */
         allowed_updates?: string[]
         /** Optional */
         drop_pending_updates?: boolean
         /** Optional */
         secret_token?: string
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('setWebhook', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to receive incoming updates using long polling (wiki). Returns an Array of Update objects.
    */
   async getUpdates(extra?: {
      /** Optional */
      offset?: number
      /** Optional */
      limit?: number
      /** Optional */
      timeout?: number
      /** Optional */
      allowed_updates?: string[]
   }): Promise<any> {
      try {
         return await this.makeRequest('getUpdates', extra)
      } catch (error: any) {
         throw error
      }
   }
}
