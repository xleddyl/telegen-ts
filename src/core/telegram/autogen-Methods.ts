import {
   Update,
   WebhookInfo,
   User,
   Chat,
   ChatFullInfo,
   Message,
   MessageId,
   InaccessibleMessage,
   MaybeInaccessibleMessage,
   MessageEntity,
   TextQuote,
   ExternalReplyInfo,
   ReplyParameters,
   MessageOrigin,
   MessageOriginUser,
   MessageOriginHiddenUser,
   MessageOriginChat,
   MessageOriginChannel,
   PhotoSize,
   Animation,
   Audio,
   Document,
   Story,
   Video,
   VideoNote,
   Voice,
   PaidMediaInfo,
   PaidMedia,
   PaidMediaPreview,
   PaidMediaPhoto,
   PaidMediaVideo,
   Contact,
   Dice,
   PollOption,
   InputPollOption,
   PollAnswer,
   Poll,
   Location,
   Venue,
   WebAppData,
   ProximityAlertTriggered,
   MessageAutoDeleteTimerChanged,
   ChatBoostAdded,
   BackgroundFill,
   BackgroundFillSolid,
   BackgroundFillGradient,
   BackgroundFillFreeformGradient,
   BackgroundType,
   BackgroundTypeFill,
   BackgroundTypeWallpaper,
   BackgroundTypePattern,
   BackgroundTypeChatTheme,
   ChatBackground,
   ForumTopicCreated,
   ForumTopicClosed,
   ForumTopicEdited,
   ForumTopicReopened,
   GeneralForumTopicHidden,
   GeneralForumTopicUnhidden,
   SharedUser,
   UsersShared,
   ChatShared,
   WriteAccessAllowed,
   VideoChatScheduled,
   VideoChatStarted,
   VideoChatEnded,
   VideoChatParticipantsInvited,
   GiveawayCreated,
   Giveaway,
   GiveawayWinners,
   GiveawayCompleted,
   LinkPreviewOptions,
   UserProfilePhotos,
   File,
   WebAppInfo,
   ReplyKeyboardMarkup,
   KeyboardButton,
   KeyboardButtonRequestUsers,
   KeyboardButtonRequestChat,
   KeyboardButtonPollType,
   ReplyKeyboardRemove,
   InlineKeyboardMarkup,
   InlineKeyboardButton,
   LoginUrl,
   SwitchInlineQueryChosenChat,
   CallbackQuery,
   ForceReply,
   ChatPhoto,
   ChatInviteLink,
   ChatAdministratorRights,
   ChatMemberUpdated,
   ChatMember,
   ChatMemberOwner,
   ChatMemberAdministrator,
   ChatMemberMember,
   ChatMemberRestricted,
   ChatMemberLeft,
   ChatMemberBanned,
   ChatJoinRequest,
   ChatPermissions,
   Birthdate,
   BusinessIntro,
   BusinessLocation,
   BusinessOpeningHoursInterval,
   BusinessOpeningHours,
   ChatLocation,
   ReactionType,
   ReactionTypeEmoji,
   ReactionTypeCustomEmoji,
   ReactionTypePaid,
   ReactionCount,
   MessageReactionUpdated,
   MessageReactionCountUpdated,
   ForumTopic,
   BotCommand,
   BotCommandScope,
   BotCommandScopeDefault,
   BotCommandScopeAllPrivateChats,
   BotCommandScopeAllGroupChats,
   BotCommandScopeAllChatAdministrators,
   BotCommandScopeChat,
   BotCommandScopeChatAdministrators,
   BotCommandScopeChatMember,
   BotName,
   BotDescription,
   BotShortDescription,
   MenuButton,
   MenuButtonCommands,
   MenuButtonWebApp,
   MenuButtonDefault,
   ChatBoostSource,
   ChatBoostSourcePremium,
   ChatBoostSourceGiftCode,
   ChatBoostSourceGiveaway,
   ChatBoost,
   ChatBoostUpdated,
   ChatBoostRemoved,
   UserChatBoosts,
   BusinessConnection,
   BusinessMessagesDeleted,
   ResponseParameters,
   InputMedia,
   InputMediaPhoto,
   InputMediaVideo,
   InputMediaAnimation,
   InputMediaAudio,
   InputMediaDocument,
   InputFile,
   InputPaidMedia,
   InputPaidMediaPhoto,
   InputPaidMediaVideo,
   Sticker,
   StickerSet,
   MaskPosition,
   InputSticker,
   InlineQuery,
   InlineQueryResultsButton,
   InlineQueryResult,
   InlineQueryResultArticle,
   InlineQueryResultPhoto,
   InlineQueryResultGif,
   InlineQueryResultMpeg4Gif,
   InlineQueryResultVideo,
   InlineQueryResultAudio,
   InlineQueryResultVoice,
   InlineQueryResultDocument,
   InlineQueryResultLocation,
   InlineQueryResultVenue,
   InlineQueryResultContact,
   InlineQueryResultGame,
   InlineQueryResultCachedPhoto,
   InlineQueryResultCachedGif,
   InlineQueryResultCachedMpeg4Gif,
   InlineQueryResultCachedSticker,
   InlineQueryResultCachedDocument,
   InlineQueryResultCachedVideo,
   InlineQueryResultCachedVoice,
   InlineQueryResultCachedAudio,
   InputMessageContent,
   InputTextMessageContent,
   InputLocationMessageContent,
   InputVenueMessageContent,
   InputContactMessageContent,
   InputInvoiceMessageContent,
   ChosenInlineResult,
   SentWebAppMessage,
   LabeledPrice,
   Invoice,
   ShippingAddress,
   OrderInfo,
   ShippingOption,
   SuccessfulPayment,
   RefundedPayment,
   ShippingQuery,
   PreCheckoutQuery,
   PaidMediaPurchased,
   RevenueWithdrawalState,
   RevenueWithdrawalStatePending,
   RevenueWithdrawalStateSucceeded,
   RevenueWithdrawalStateFailed,
   TransactionPartner,
   TransactionPartnerUser,
   TransactionPartnerFragment,
   TransactionPartnerTelegramAds,
   TransactionPartnerOther,
   StarTransaction,
   StarTransactions,
   PassportData,
   PassportFile,
   EncryptedPassportElement,
   EncryptedCredentials,
   PassportElementError,
   PassportElementErrorDataField,
   PassportElementErrorFrontSide,
   PassportElementErrorReverseSide,
   PassportElementErrorSelfie,
   PassportElementErrorFile,
   PassportElementErrorFiles,
   PassportElementErrorTranslationFile,
   PassportElementErrorTranslationFiles,
   PassportElementErrorUnspecified,
   Game,
   CallbackGame,
   GameHighScore,
} from './autogen-types'

export abstract class Methods {
   abstract makeRequest<T>(methodName: string, body?: any, extra?: any): Promise<T>

   /**
    * Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. Returns an Array of GameHighScore objects.
    */
   async getGameHighScores<T>(
      body: {
         /** Target user id */
         user_id: number
      },
      extra?: {
         /** Required if inline_message_id is not specified. Unique identifier for the target chat */
         chat_id?: number
         /** Required if inline_message_id is not specified. Identifier of the sent message */
         message_id?: number
         /** Required if chat_id and message_id are not specified. Identifier of the inline message */
         inline_message_id?: string
      },
   ) {
      try {
         return await this.makeRequest<T>('getGameHighScores', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to set the score of the specified user in a game message. On success, if the message is not an inline message, the Message is returned, otherwise True is returned. Returns an error, if the new score is not greater than the user's current score in the chat and force is False.
    */
   async setGameScore<T>(
      body: {
         /** User identifier */
         user_id: number
         /** New score, must be non-negative */
         score: number
      },
      extra?: {
         /** Pass True if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters */
         force?: boolean
         /** Pass True if the game message should not be automatically edited to include the current scoreboard */
         disable_edit_message?: boolean
         /** Required if inline_message_id is not specified. Unique identifier for the target chat */
         chat_id?: number
         /** Required if inline_message_id is not specified. Identifier of the sent message */
         message_id?: number
         /** Required if chat_id and message_id are not specified. Identifier of the inline message */
         inline_message_id?: string
      },
   ) {
      try {
         return await this.makeRequest<T>('setGameScore', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to send a game. On success, the sent Message is returned.
    */
   async sendGame<T>(
      body: {
         /** Unique identifier for the target chat */
         chat_id: number
         /** Short name of the game, serves as the unique identifier for the game. Set up your games via @BotFather. */
         game_short_name: string
      },
      extra?: {
         /** Unique identifier of the business connection on behalf of which the message will be sent */
         business_connection_id?: string
         /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
         message_thread_id?: number
         /** Sends the message silently. Users will receive a notification with no sound. */
         disable_notification?: boolean
         /** Protects the contents of the sent message from forwarding and saving */
         protect_content?: boolean
         /** Unique identifier of the message effect to be added to the message; for private chats only */
         message_effect_id?: string
         /** Description of the message to reply to */
         reply_parameters?: ReplyParameters
         /** A JSON-serialized object for an inline keyboard. If empty, one 'Play game_title' button will be shown. If not empty, the first button must launch the game. */
         reply_markup?: InlineKeyboardMarkup
      },
   ) {
      try {
         return await this.makeRequest<T>('sendGame', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Informs a user that some of the Telegram Passport elements they provided contains errors. The user will not be able to re-submit their Passport to you until the errors are fixed (the contents of the field for which you returned the error must change). Returns True on success.Use this if the data submitted by the user doesn't satisfy the standards your service requires for any reason. For example, if a birthday date seems invalid, a submitted document is blurry, a scan shows evidence of tampering, etc. Supply some details in the error message to make sure the user knows how to correct the issues.
    */
   async setPassportDataErrors<T>(body: {
      /** User identifier */
      user_id: number
      /** A JSON-serialized array describing the errors */
      errors: PassportElementError[]
   }) {
      try {
         return await this.makeRequest<T>('setPassportDataErrors', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Refunds a successful payment in Telegram Stars. Returns True on success.
    */
   async refundStarPayment<T>(body: {
      /** Identifier of the user whose payment will be refunded */
      user_id: number
      /** Telegram payment identifier */
      telegram_payment_charge_id: string
   }) {
      try {
         return await this.makeRequest<T>('refundStarPayment', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Returns the bot's Telegram Star transactions in chronological order. On success, returns a StarTransactions object.
    */
   async getStarTransactions<T>(extra?: {
      /** Number of transactions to skip in the response */
      offset?: number
      /** The maximum number of transactions to be retrieved. Values between 1-100 are accepted. Defaults to 100. */
      limit?: number
   }) {
      try {
         return await this.makeRequest<T>('getStarTransactions', extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an Update with the field pre_checkout_query. Use this method to respond to such pre-checkout queries. On success, True is returned. Note: The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.
    */
   async answerPreCheckoutQuery<T>(
      body: {
         /** Unique identifier for the query to be answered */
         pre_checkout_query_id: string
         /** Specify True if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order. Use False if there are any problems. */
         ok: boolean
      },
      extra?: {
         /** Required if ok is False. Error message in human readable form that explains the reason for failure to proceed with the checkout (e.g. "Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!"). Telegram will display this message to the user. */
         error_message?: string
      },
   ) {
      try {
         return await this.makeRequest<T>('answerPreCheckoutQuery', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * If you sent an invoice requesting a shipping address and the parameter is_flexible was specified, the Bot API will send an Update with a shipping_query field to the bot. Use this method to reply to shipping queries. On success, True is returned.
    */
   async answerShippingQuery<T>(
      body: {
         /** Unique identifier for the query to be answered */
         shipping_query_id: string
         /** Pass True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible) */
         ok: boolean
      },
      extra?: {
         /** Required if ok is True. A JSON-serialized array of available shipping options. */
         shipping_options?: ShippingOption[]
         /** Required if ok is False. Error message in human readable form that explains why it is impossible to complete the order (e.g. "Sorry, delivery to your desired address is unavailable'). Telegram will display this message to the user. */
         error_message?: string
      },
   ) {
      try {
         return await this.makeRequest<T>('answerShippingQuery', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to create a link for an invoice. Returns the created invoice link as String on success.
    */
   async createInvoiceLink<T>(
      body: {
         /** Product name, 1-32 characters */
         title: string
         /** Product description, 1-255 characters */
         description: string
         /** Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use it for your internal processes. */
         payload: string
         /** Three-letter ISO 4217 currency code, see more on currencies. Pass “XTR” for payments in Telegram Stars. */
         currency: string
         /** Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.). Must contain exactly one item for payments in Telegram Stars. */
         prices: LabeledPrice[]
      },
      extra?: {
         /** Payment provider token, obtained via @BotFather. Pass an empty string for payments in Telegram Stars. */
         provider_token?: string
         /** The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0. Not supported for payments in Telegram Stars. */
         max_tip_amount?: number
         /** A JSON-serialized array of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount. */
         suggested_tip_amounts?: number[]
         /** JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider. */
         provider_data?: string
         /** URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. */
         photo_url?: string
         /** Photo size in bytes */
         photo_size?: number
         /** Photo width */
         photo_width?: number
         /** Photo height */
         photo_height?: number
         /** Pass True if you require the user's full name to complete the order. Ignored for payments in Telegram Stars. */
         need_name?: boolean
         /** Pass True if you require the user's phone number to complete the order. Ignored for payments in Telegram Stars. */
         need_phone_number?: boolean
         /** Pass True if you require the user's email address to complete the order. Ignored for payments in Telegram Stars. */
         need_email?: boolean
         /** Pass True if you require the user's shipping address to complete the order. Ignored for payments in Telegram Stars. */
         need_shipping_address?: boolean
         /** Pass True if the user's phone number should be sent to the provider. Ignored for payments in Telegram Stars. */
         send_phone_number_to_provider?: boolean
         /** Pass True if the user's email address should be sent to the provider. Ignored for payments in Telegram Stars. */
         send_email_to_provider?: boolean
         /** Pass True if the final price depends on the shipping method. Ignored for payments in Telegram Stars. */
         is_flexible?: boolean
      },
   ) {
      try {
         return await this.makeRequest<T>('createInvoiceLink', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to send invoices. On success, the sent Message is returned.
    */
   async sendInvoice<T>(
      body: {
         /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
         chat_id: number | string
         /** Product name, 1-32 characters */
         title: string
         /** Product description, 1-255 characters */
         description: string
         /** Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use it for your internal processes. */
         payload: string
         /** Three-letter ISO 4217 currency code, see more on currencies. Pass “XTR” for payments in Telegram Stars. */
         currency: string
         /** Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.). Must contain exactly one item for payments in Telegram Stars. */
         prices: LabeledPrice[]
      },
      extra?: {
         /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
         message_thread_id?: number
         /** Payment provider token, obtained via @BotFather. Pass an empty string for payments in Telegram Stars. */
         provider_token?: string
         /** The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0. Not supported for payments in Telegram Stars. */
         max_tip_amount?: number
         /** A JSON-serialized array of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount. */
         suggested_tip_amounts?: number[]
         /** Unique deep-linking parameter. If left empty, forwarded copies of the sent message will have a Pay button, allowing multiple users to pay directly from the forwarded message, using the same invoice. If non-empty, forwarded copies of the sent message will have a URL button with a deep link to the bot (instead of a Pay button), with the value used as the start parameter */
         start_parameter?: string
         /** JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider. */
         provider_data?: string
         /** URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for. */
         photo_url?: string
         /** Photo size in bytes */
         photo_size?: number
         /** Photo width */
         photo_width?: number
         /** Photo height */
         photo_height?: number
         /** Pass True if you require the user's full name to complete the order. Ignored for payments in Telegram Stars. */
         need_name?: boolean
         /** Pass True if you require the user's phone number to complete the order. Ignored for payments in Telegram Stars. */
         need_phone_number?: boolean
         /** Pass True if you require the user's email address to complete the order. Ignored for payments in Telegram Stars. */
         need_email?: boolean
         /** Pass True if you require the user's shipping address to complete the order. Ignored for payments in Telegram Stars. */
         need_shipping_address?: boolean
         /** Pass True if the user's phone number should be sent to the provider. Ignored for payments in Telegram Stars. */
         send_phone_number_to_provider?: boolean
         /** Pass True if the user's email address should be sent to the provider. Ignored for payments in Telegram Stars. */
         send_email_to_provider?: boolean
         /** Pass True if the final price depends on the shipping method. Ignored for payments in Telegram Stars. */
         is_flexible?: boolean
         /** Sends the message silently. Users will receive a notification with no sound. */
         disable_notification?: boolean
         /** Protects the contents of the sent message from forwarding and saving */
         protect_content?: boolean
         /** Unique identifier of the message effect to be added to the message; for private chats only */
         message_effect_id?: string
         /** Description of the message to reply to */
         reply_parameters?: ReplyParameters
         /** A JSON-serialized object for an inline keyboard. If empty, one 'Pay total price' button will be shown. If not empty, the first button must be a Pay button. */
         reply_markup?: InlineKeyboardMarkup
      },
   ) {
      try {
         return await this.makeRequest<T>('sendInvoice', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to set the result of an interaction with a Web App and send a corresponding message on behalf of the user to the chat from which the query originated. On success, a SentWebAppMessage object is returned.
    */
   async answerWebAppQuery<T>(body: {
      /** Unique identifier for the query to be answered */
      web_app_query_id: string
      /** A JSON-serialized object describing the message to be sent */
      result: InlineQueryResult
   }) {
      try {
         return await this.makeRequest<T>('answerWebAppQuery', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to send answers to an inline query. On success, True is returned.No more than 50 results per query are allowed.
    */
   async answerInlineQuery<T>(
      body: {
         /** Unique identifier for the answered query */
         inline_query_id: string
         /** A JSON-serialized array of results for the inline query */
         results: InlineQueryResult[]
      },
      extra?: {
         /** The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300. */
         cache_time?: number
         /** Pass True if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query. */
         is_personal?: boolean
         /** Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes. */
         next_offset?: string
         /** A JSON-serialized object describing a button to be shown above inline query results */
         button?: InlineQueryResultsButton
      },
   ) {
      try {
         return await this.makeRequest<T>('answerInlineQuery', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to delete a sticker set that was created by the bot. Returns True on success.The following methods and objects allow your bot to work in inline mode.Please see our Introduction to Inline bots for more details.To enable this option, send the /setinline command to @BotFather and provide the placeholder text that the user will see in the input field after typing your bot's name.
    */
   async deleteStickerSet<T>(body: {
      /** Sticker set name */
      name: string
   }) {
      try {
         return await this.makeRequest<T>('deleteStickerSet', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to set the thumbnail of a custom emoji sticker set. Returns True on success.
    */
   async setCustomEmojiStickerSetThumbnail<T>(
      body: {
         /** Sticker set name */
         name: string
      },
      extra?: {
         /** Custom emoji identifier of a sticker from the sticker set; pass an empty string to drop the thumbnail and use the first sticker as the thumbnail. */
         custom_emoji_id?: string
      },
   ) {
      try {
         return await this.makeRequest<T>('setCustomEmojiStickerSetThumbnail', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to set the thumbnail of a regular or mask sticker set. The format of the thumbnail file must match the format of the stickers in the set. Returns True on success.
    */
   async setStickerSetThumbnail<T>(
      body: {
         /** Sticker set name */
         name: string
         /** User identifier of the sticker set owner */
         user_id: number
         /** Format of the thumbnail, must be one of “static” for a .WEBP or .PNG image, “animated” for a .TGS animation, or “video” for a WEBM video */
         format: string
      },
      extra?: {
         /** A .WEBP or .PNG image with the thumbnail, must be up to 128 kilobytes in size and have a width and height of exactly 100px, or a .TGS animation with a thumbnail up to 32 kilobytes in size (see https://core.telegram.org/stickers#animation-requirements for animated sticker technical requirements), or a WEBM video with the thumbnail up to 32 kilobytes in size; see https://core.telegram.org/stickers#video-requirements for video sticker technical requirements. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files ». Animated and video sticker set thumbnails can't be uploaded via HTTP URL. If omitted, then the thumbnail is dropped and the first sticker is used as the thumbnail. */
         thumbnail?: InputFile | string
      },
   ) {
      try {
         return await this.makeRequest<T>('setStickerSetThumbnail', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to set the title of a created sticker set. Returns True on success.
    */
   async setStickerSetTitle<T>(body: {
      /** Sticker set name */
      name: string
      /** Sticker set title, 1-64 characters */
      title: string
   }) {
      try {
         return await this.makeRequest<T>('setStickerSetTitle', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to change the mask position of a mask sticker. The sticker must belong to a sticker set that was created by the bot. Returns True on success.
    */
   async setStickerMaskPosition<T>(
      body: {
         /** File identifier of the sticker */
         sticker: string
      },
      extra?: {
         /** A JSON-serialized object with the position where the mask should be placed on faces. Omit the parameter to remove the mask position. */
         mask_position?: MaskPosition
      },
   ) {
      try {
         return await this.makeRequest<T>('setStickerMaskPosition', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to change search keywords assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.
    */
   async setStickerKeywords<T>(
      body: {
         /** File identifier of the sticker */
         sticker: string
      },
      extra?: {
         /** A JSON-serialized list of 0-20 search keywords for the sticker with total length of up to 64 characters */
         keywords?: string[]
      },
   ) {
      try {
         return await this.makeRequest<T>('setStickerKeywords', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to change the list of emoji assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.
    */
   async setStickerEmojiList<T>(body: {
      /** File identifier of the sticker */
      sticker: string
      /** A JSON-serialized list of 1-20 emoji associated with the sticker */
      emoji_list: string[]
   }) {
      try {
         return await this.makeRequest<T>('setStickerEmojiList', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to replace an existing sticker in a sticker set with a new one. The method is equivalent to calling deleteStickerFromSet, then addStickerToSet, then setStickerPositionInSet. Returns True on success.
    */
   async replaceStickerInSet<T>(body: {
      /** User identifier of the sticker set owner */
      user_id: number
      /** Sticker set name */
      name: string
      /** File identifier of the replaced sticker */
      old_sticker: string
      /** A JSON-serialized object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set remains unchanged. */
      sticker: InputSticker
   }) {
      try {
         return await this.makeRequest<T>('replaceStickerInSet', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to delete a sticker from a set created by the bot. Returns True on success.
    */
   async deleteStickerFromSet<T>(body: {
      /** File identifier of the sticker */
      sticker: string
   }) {
      try {
         return await this.makeRequest<T>('deleteStickerFromSet', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to move a sticker in a set created by the bot to a specific position. Returns True on success.
    */
   async setStickerPositionInSet<T>(body: {
      /** File identifier of the sticker */
      sticker: string
      /** New sticker position in the set, zero-based */
      position: number
   }) {
      try {
         return await this.makeRequest<T>('setStickerPositionInSet', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to add a new sticker to a set created by the bot. Emoji sticker sets can have up to 200 stickers. Other sticker sets can have up to 120 stickers. Returns True on success.
    */
   async addStickerToSet<T>(body: {
      /** User identifier of sticker set owner */
      user_id: number
      /** Sticker set name */
      name: string
      /** A JSON-serialized object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set isn't changed. */
      sticker: InputSticker
   }) {
      try {
         return await this.makeRequest<T>('addStickerToSet', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. Returns True on success.
    */
   async createNewStickerSet<T>(
      body: {
         /** User identifier of created sticker set owner */
         user_id: number
         /** Short name of sticker set, to be used in t.me/addstickers/ URLs (e.g., animals). Can contain only English letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in "_by_<bot_username>". <bot_username> is case insensitive. 1-64 characters. */
         name: string
         /** Sticker set title, 1-64 characters */
         title: string
         /** A JSON-serialized list of 1-50 initial stickers to be added to the sticker set */
         stickers: InputSticker[]
      },
      extra?: {
         /** Type of stickers in the set, pass “regular”, “mask”, or “custom_emoji”. By default, a regular sticker set is created. */
         sticker_type?: string
         /** Pass True if stickers in the sticker set must be repainted to the color of text when used in messages, the accent color if used as emoji status, white on chat photos, or another appropriate color based on context; for custom emoji sticker sets only */
         needs_repainting?: boolean
      },
   ) {
      try {
         return await this.makeRequest<T>('createNewStickerSet', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to upload a file with a sticker for later use in the createNewStickerSet, addStickerToSet, or replaceStickerInSet methods (the file can be used multiple times). Returns the uploaded File on success.
    */
   async uploadStickerFile<T>(body: {
      /** User identifier of sticker file owner */
      user_id: number
      /** A file with the sticker in .WEBP, .PNG, .TGS, or .WEBM format. See https://core.telegram.org/stickers for technical requirements. More information on Sending Files » */
      sticker: InputFile
      /** Format of the sticker, must be one of “static”, “animated”, “video” */
      sticker_format: string
   }) {
      try {
         return await this.makeRequest<T>('uploadStickerFile', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to get information about custom emoji stickers by their identifiers. Returns an Array of Sticker objects.
    */
   async getCustomEmojiStickers<T>(body: {
      /** A JSON-serialized list of custom emoji identifiers. At most 200 custom emoji identifiers can be specified. */
      custom_emoji_ids: string[]
   }) {
      try {
         return await this.makeRequest<T>('getCustomEmojiStickers', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to get a sticker set. On success, a StickerSet object is returned.
    */
   async getStickerSet<T>(body: {
      /** Name of the sticker set */
      name: string
   }) {
      try {
         return await this.makeRequest<T>('getStickerSet', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to send static .WEBP, animated .TGS, or video .WEBM stickers. On success, the sent Message is returned.
    */
   async sendSticker<T>(
      body: {
         /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
         chat_id: number | string
         /** Sticker to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a .WEBP sticker from the Internet, or upload a new .WEBP, .TGS, or .WEBM sticker using multipart/form-data. More information on Sending Files ». Video and animated stickers can't be sent via an HTTP URL. */
         sticker: InputFile | string
      },
      extra?: {
         /** Unique identifier of the business connection on behalf of which the message will be sent */
         business_connection_id?: string
         /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
         message_thread_id?: number
         /** Emoji associated with the sticker; only for just uploaded stickers */
         emoji?: string
         /** Sends the message silently. Users will receive a notification with no sound. */
         disable_notification?: boolean
         /** Protects the contents of the sent message from forwarding and saving */
         protect_content?: boolean
         /** Unique identifier of the message effect to be added to the message; for private chats only */
         message_effect_id?: string
         /** Description of the message to reply to */
         reply_parameters?: ReplyParameters
         /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
         reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      },
   ) {
      try {
         return await this.makeRequest<T>('sendSticker', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to delete multiple messages simultaneously. If some of the specified messages can't be found, they are skipped. Returns True on success.The following methods and objects allow your bot to handle stickers and sticker sets.
    */
   async deleteMessages<T>(body: {
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string
      /** A JSON-serialized list of 1-100 identifiers of messages to delete. See deleteMessage for limitations on which messages can be deleted */
      message_ids: number[]
   }) {
      try {
         return await this.makeRequest<T>('deleteMessages', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to delete a message, including service messages, with the following limitations:- A message can only be deleted if it was sent less than 48 hours ago.- Service messages about a supergroup, channel, or forum topic creation can't be deleted.- A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.- Bots can delete outgoing messages in private chats, groups, and supergroups.- Bots can delete incoming messages in private chats.- Bots granted can_post_messages permissions can delete outgoing messages in channels.- If the bot is an administrator of a group, it can delete any message there.- If the bot has can_delete_messages permission in a supergroup or a channel, it can delete any message there.Returns True on success.
    */
   async deleteMessage<T>(body: {
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string
      /** Identifier of the message to delete */
      message_id: number
   }) {
      try {
         return await this.makeRequest<T>('deleteMessage', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to stop a poll which was sent by the bot. On success, the stopped Poll is returned.
    */
   async stopPoll<T>(
      body: {
         /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
         chat_id: number | string
         /** Identifier of the original message with the poll */
         message_id: number
      },
      extra?: {
         /** Unique identifier of the business connection on behalf of which the message to be edited was sent */
         business_connection_id?: string
         /** A JSON-serialized object for a new message inline keyboard. */
         reply_markup?: InlineKeyboardMarkup
      },
   ) {
      try {
         return await this.makeRequest<T>('stopPoll', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.
    */
   async editMessageReplyMarkup<T>(extra?: {
      /** Unique identifier of the business connection on behalf of which the message to be edited was sent */
      business_connection_id?: string
      /** Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id?: number | string
      /** Required if inline_message_id is not specified. Identifier of the message to edit */
      message_id?: number
      /** Required if chat_id and message_id are not specified. Identifier of the inline message */
      inline_message_id?: string
      /** A JSON-serialized object for an inline keyboard. */
      reply_markup?: InlineKeyboardMarkup
   }) {
      try {
         return await this.makeRequest<T>('editMessageReplyMarkup', extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to stop updating a live location message before live_period expires. On success, if the message is not an inline message, the edited Message is returned, otherwise True is returned.
    */
   async stopMessageLiveLocation<T>(extra?: {
      /** Unique identifier of the business connection on behalf of which the message to be edited was sent */
      business_connection_id?: string
      /** Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id?: number | string
      /** Required if inline_message_id is not specified. Identifier of the message with live location to stop */
      message_id?: number
      /** Required if chat_id and message_id are not specified. Identifier of the inline message */
      inline_message_id?: string
      /** A JSON-serialized object for a new inline keyboard. */
      reply_markup?: InlineKeyboardMarkup
   }) {
      try {
         return await this.makeRequest<T>('stopMessageLiveLocation', extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to edit live location messages. A location can be edited until its live_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
    */
   async editMessageLiveLocation<T>(
      body: {
         /** Latitude of new location */
         latitude: number
         /** Longitude of new location */
         longitude: number
      },
      extra?: {
         /** Unique identifier of the business connection on behalf of which the message to be edited was sent */
         business_connection_id?: string
         /** Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
         chat_id?: number | string
         /** Required if inline_message_id is not specified. Identifier of the message to edit */
         message_id?: number
         /** Required if chat_id and message_id are not specified. Identifier of the inline message */
         inline_message_id?: string
         /** New period in seconds during which the location can be updated, starting from the message send date. If 0x7FFFFFFF is specified, then the location can be updated forever. Otherwise, the new value must not exceed the current live_period by more than a day, and the live location expiration date must remain within the next 90 days. If not specified, then live_period remains unchanged */
         live_period?: number
         /** The radius of uncertainty for the location, measured in meters; 0-1500 */
         horizontal_accuracy?: number
         /** Direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. */
         heading?: number
         /** The maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. */
         proximity_alert_radius?: number
         /** A JSON-serialized object for a new inline keyboard. */
         reply_markup?: InlineKeyboardMarkup
      },
   ) {
      try {
         return await this.makeRequest<T>('editMessageLiveLocation', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to edit animation, audio, document, photo, or video messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can't be uploaded; use a previously uploaded file via its file_id or specify a URL. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.
    */
   async editMessageMedia<T>(
      body: {
         /** A JSON-serialized object for a new media content of the message */
         media: InputMedia
      },
      extra?: {
         /** Unique identifier of the business connection on behalf of which the message to be edited was sent */
         business_connection_id?: string
         /** Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
         chat_id?: number | string
         /** Required if inline_message_id is not specified. Identifier of the message to edit */
         message_id?: number
         /** Required if chat_id and message_id are not specified. Identifier of the inline message */
         inline_message_id?: string
         /** A JSON-serialized object for a new inline keyboard. */
         reply_markup?: InlineKeyboardMarkup
      },
   ) {
      try {
         return await this.makeRequest<T>('editMessageMedia', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.
    */
   async editMessageCaption<T>(extra?: {
      /** Unique identifier of the business connection on behalf of which the message to be edited was sent */
      business_connection_id?: string
      /** Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id?: number | string
      /** Required if inline_message_id is not specified. Identifier of the message to edit */
      message_id?: number
      /** Required if chat_id and message_id are not specified. Identifier of the inline message */
      inline_message_id?: string
      /** New caption of the message, 0-1024 characters after entities parsing */
      caption?: string
      /** Mode for parsing entities in the message caption. See formatting options for more details. */
      parse_mode?: string
      /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
      caption_entities?: MessageEntity[]
      /** Pass True, if the caption must be shown above the message media. Supported only for animation, photo and video messages. */
      show_caption_above_media?: boolean
      /** A JSON-serialized object for an inline keyboard. */
      reply_markup?: InlineKeyboardMarkup
   }) {
      try {
         return await this.makeRequest<T>('editMessageCaption', extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to edit text and game messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.
    */
   async editMessageText<T>(
      body: {
         /** New text of the message, 1-4096 characters after entities parsing */
         text: string
      },
      extra?: {
         /** Unique identifier of the business connection on behalf of which the message to be edited was sent */
         business_connection_id?: string
         /** Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
         chat_id?: number | string
         /** Required if inline_message_id is not specified. Identifier of the message to edit */
         message_id?: number
         /** Required if chat_id and message_id are not specified. Identifier of the inline message */
         inline_message_id?: string
         /** Mode for parsing entities in the message text. See formatting options for more details. */
         parse_mode?: string
         /** A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode */
         entities?: MessageEntity[]
         /** Link preview generation options for the message */
         link_preview_options?: LinkPreviewOptions
         /** A JSON-serialized object for an inline keyboard. */
         reply_markup?: InlineKeyboardMarkup
      },
   ) {
      try {
         return await this.makeRequest<T>('editMessageText', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to get the current default administrator rights of the bot. Returns ChatAdministratorRights on success.Methods and objects used in the inline mode are described in the Inline mode section.The following methods allow you to change an existing message in the message history instead of sending a new one with a result of an action. This is most useful for messages with inline keyboards using callback queries, but can also help reduce clutter in conversations with regular chat bots.Please note, that it is currently only possible to edit messages without reply_markup or with inline keyboards.
    */
   async getMyDefaultAdministratorRights<T>(extra?: {
      /** Pass True to get default administrator rights of the bot in channels. Otherwise, default administrator rights of the bot for groups and supergroups will be returned. */
      for_channels?: boolean
   }) {
      try {
         return await this.makeRequest<T>('getMyDefaultAdministratorRights', extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to change the default administrator rights requested by the bot when it's added as an administrator to groups or channels. These rights will be suggested to users, but they are free to modify the list before adding the bot. Returns True on success.
    */
   async setMyDefaultAdministratorRights<T>(extra?: {
      /** A JSON-serialized object describing new default administrator rights. If not specified, the default administrator rights will be cleared. */
      rights?: ChatAdministratorRights
      /** Pass True to change the default administrator rights of the bot in channels. Otherwise, the default administrator rights of the bot for groups and supergroups will be changed. */
      for_channels?: boolean
   }) {
      try {
         return await this.makeRequest<T>('setMyDefaultAdministratorRights', extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to get the current value of the bot's menu button in a private chat, or the default menu button. Returns MenuButton on success.
    */
   async getChatMenuButton<T>(extra?: {
      /** Unique identifier for the target private chat. If not specified, default bot's menu button will be returned */
      chat_id?: number
   }) {
      try {
         return await this.makeRequest<T>('getChatMenuButton', extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to change the bot's menu button in a private chat, or the default menu button. Returns True on success.
    */
   async setChatMenuButton<T>(extra?: {
      /** Unique identifier for the target private chat. If not specified, default bot's menu button will be changed */
      chat_id?: number
      /** A JSON-serialized object for the bot's new menu button. Defaults to MenuButtonDefault */
      menu_button?: MenuButton
   }) {
      try {
         return await this.makeRequest<T>('setChatMenuButton', extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to get the current bot short description for the given user language. Returns BotShortDescription on success.
    */
   async getMyShortDescription<T>(extra?: {
      /** A two-letter ISO 639-1 language code or an empty string */
      language_code?: string
   }) {
      try {
         return await this.makeRequest<T>('getMyShortDescription', extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to change the bot's short description, which is shown on the bot's profile page and is sent together with the link when users share the bot. Returns True on success.
    */
   async setMyShortDescription<T>(extra?: {
      /** New short description for the bot; 0-120 characters. Pass an empty string to remove the dedicated short description for the given language. */
      short_description?: string
      /** A two-letter ISO 639-1 language code. If empty, the short description will be applied to all users for whose language there is no dedicated short description. */
      language_code?: string
   }) {
      try {
         return await this.makeRequest<T>('setMyShortDescription', extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to get the current bot description for the given user language. Returns BotDescription on success.
    */
   async getMyDescription<T>(extra?: {
      /** A two-letter ISO 639-1 language code or an empty string */
      language_code?: string
   }) {
      try {
         return await this.makeRequest<T>('getMyDescription', extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to change the bot's description, which is shown in the chat with the bot if the chat is empty. Returns True on success.
    */
   async setMyDescription<T>(extra?: {
      /** New bot description; 0-512 characters. Pass an empty string to remove the dedicated description for the given language. */
      description?: string
      /** A two-letter ISO 639-1 language code. If empty, the description will be applied to all users for whose language there is no dedicated description. */
      language_code?: string
   }) {
      try {
         return await this.makeRequest<T>('setMyDescription', extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to get the current bot name for the given user language. Returns BotName on success.
    */
   async getMyName<T>(extra?: {
      /** A two-letter ISO 639-1 language code or an empty string */
      language_code?: string
   }) {
      try {
         return await this.makeRequest<T>('getMyName', extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to change the bot's name. Returns True on success.
    */
   async setMyName<T>(extra?: {
      /** New bot name; 0-64 characters. Pass an empty string to remove the dedicated name for the given language. */
      name?: string
      /** A two-letter ISO 639-1 language code. If empty, the name will be shown to all users for whose language there is no dedicated name. */
      language_code?: string
   }) {
      try {
         return await this.makeRequest<T>('setMyName', extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to get the current list of the bot's commands for the given scope and user language. Returns an Array of BotCommand objects. If commands aren't set, an empty list is returned.
    */
   async getMyCommands<T>(extra?: {
      /** A JSON-serialized object, describing scope of users. Defaults to BotCommandScopeDefault. */
      scope?: BotCommandScope
      /** A two-letter ISO 639-1 language code or an empty string */
      language_code?: string
   }) {
      try {
         return await this.makeRequest<T>('getMyCommands', extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to delete the list of the bot's commands for the given scope and user language. After deletion, higher level commands will be shown to affected users. Returns True on success.
    */
   async deleteMyCommands<T>(extra?: {
      /** A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault. */
      scope?: BotCommandScope
      /** A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands */
      language_code?: string
   }) {
      try {
         return await this.makeRequest<T>('deleteMyCommands', extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to change the list of the bot's commands. See this manual for more details about bot commands. Returns True on success.
    */
   async setMyCommands<T>(
      body: {
         /** A JSON-serialized list of bot commands to be set as the list of the bot's commands. At most 100 commands can be specified. */
         commands: BotCommand[]
      },
      extra?: {
         /** A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault. */
         scope?: BotCommandScope
         /** A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands */
         language_code?: string
      },
   ) {
      try {
         return await this.makeRequest<T>('setMyCommands', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to get information about the connection of the bot with a business account. Returns a BusinessConnection object on success.
    */
   async getBusinessConnection<T>(body: {
      /** Unique identifier of the business connection */
      business_connection_id: string
   }) {
      try {
         return await this.makeRequest<T>('getBusinessConnection', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to get the list of boosts added to a chat by a user. Requires administrator rights in the chat. Returns a UserChatBoosts object.
    */
   async getUserChatBoosts<T>(body: {
      /** Unique identifier for the chat or username of the channel (in the format @channelusername) */
      chat_id: number | string
      /** Unique identifier of the target user */
      user_id: number
   }) {
      try {
         return await this.makeRequest<T>('getUserChatBoosts', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to send answers to callback queries sent from inline keyboards. The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, True is returned.
    */
   async answerCallbackQuery<T>(
      body: {
         /** Unique identifier for the query to be answered */
         callback_query_id: string
      },
      extra?: {
         /** Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters */
         text?: string
         /** If True, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to false. */
         show_alert?: boolean
         /** URL that will be opened by the user's client. If you have created a Game and accepted the conditions via @BotFather, specify the URL that opens your game - note that this will only work if the query comes from a callback_game button.Otherwise, you may use links like t.me/your_bot?start=XXXX that open your bot with a parameter. */
         url?: string
         /** The maximum amount of time in seconds that the result of the callback query may be cached client-side. Telegram apps will support caching starting in version 3.14. Defaults to 0. */
         cache_time?: number
      },
   ) {
      try {
         return await this.makeRequest<T>('answerCallbackQuery', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to clear the list of pinned messages in a General forum topic. The bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success.
    */
   async unpinAllGeneralForumTopicMessages<T>(body: {
      /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      chat_id: number | string
   }) {
      try {
         return await this.makeRequest<T>('unpinAllGeneralForumTopicMessages', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to unhide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.
    */
   async unhideGeneralForumTopic<T>(body: {
      /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      chat_id: number | string
   }) {
      try {
         return await this.makeRequest<T>('unhideGeneralForumTopic', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to hide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically closed if it was open. Returns True on success.
    */
   async hideGeneralForumTopic<T>(body: {
      /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      chat_id: number | string
   }) {
      try {
         return await this.makeRequest<T>('hideGeneralForumTopic', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to reopen a closed 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically unhidden if it was hidden. Returns True on success.
    */
   async reopenGeneralForumTopic<T>(body: {
      /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      chat_id: number | string
   }) {
      try {
         return await this.makeRequest<T>('reopenGeneralForumTopic', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to close an open 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.
    */
   async closeGeneralForumTopic<T>(body: {
      /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      chat_id: number | string
   }) {
      try {
         return await this.makeRequest<T>('closeGeneralForumTopic', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to edit the name of the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.
    */
   async editGeneralForumTopic<T>(body: {
      /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      chat_id: number | string
      /** New topic name, 1-128 characters */
      name: string
   }) {
      try {
         return await this.makeRequest<T>('editGeneralForumTopic', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to clear the list of pinned messages in a forum topic. The bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success.
    */
   async unpinAllForumTopicMessages<T>(body: {
      /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      chat_id: number | string
      /** Unique identifier for the target message thread of the forum topic */
      message_thread_id: number
   }) {
      try {
         return await this.makeRequest<T>('unpinAllForumTopicMessages', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to delete a forum topic along with all its messages in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_delete_messages administrator rights. Returns True on success.
    */
   async deleteForumTopic<T>(body: {
      /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      chat_id: number | string
      /** Unique identifier for the target message thread of the forum topic */
      message_thread_id: number
   }) {
      try {
         return await this.makeRequest<T>('deleteForumTopic', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to reopen a closed topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.
    */
   async reopenForumTopic<T>(body: {
      /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      chat_id: number | string
      /** Unique identifier for the target message thread of the forum topic */
      message_thread_id: number
   }) {
      try {
         return await this.makeRequest<T>('reopenForumTopic', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to close an open topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.
    */
   async closeForumTopic<T>(body: {
      /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      chat_id: number | string
      /** Unique identifier for the target message thread of the forum topic */
      message_thread_id: number
   }) {
      try {
         return await this.makeRequest<T>('closeForumTopic', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to edit name and icon of a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.
    */
   async editForumTopic<T>(
      body: {
         /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
         chat_id: number | string
         /** Unique identifier for the target message thread of the forum topic */
         message_thread_id: number
      },
      extra?: {
         /** New topic name, 0-128 characters. If not specified or empty, the current name of the topic will be kept */
         name?: string
         /** New unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers. Pass an empty string to remove the icon. If not specified, the current icon will be kept */
         icon_custom_emoji_id?: string
      },
   ) {
      try {
         return await this.makeRequest<T>('editForumTopic', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to create a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns information about the created topic as a ForumTopic object.
    */
   async createForumTopic<T>(
      body: {
         /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
         chat_id: number | string
         /** Topic name, 1-128 characters */
         name: string
      },
      extra?: {
         /** Color of the topic icon in RGB format. Currently, must be one of 7322096 (0x6FB9F0), 16766590 (0xFFD67E), 13338331 (0xCB86DB), 9367192 (0x8EEE98), 16749490 (0xFF93B2), or 16478047 (0xFB6F5F) */
         icon_color?: number
         /** Unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers. */
         icon_custom_emoji_id?: string
      },
   ) {
      try {
         return await this.makeRequest<T>('createForumTopic', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to get custom emoji stickers, which can be used as a forum topic icon by any user. Requires no parameters. Returns an Array of Sticker objects.
    */
   async getForumTopicIconStickers<T>() {
      try {
         return await this.makeRequest<T>('getForumTopicIconStickers')
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.
    */
   async deleteChatStickerSet<T>(body: {
      /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      chat_id: number | string
   }) {
      try {
         return await this.makeRequest<T>('deleteChatStickerSet', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.
    */
   async setChatStickerSet<T>(body: {
      /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      chat_id: number | string
      /** Name of the sticker set to be set as the group sticker set */
      sticker_set_name: string
   }) {
      try {
         return await this.makeRequest<T>('setChatStickerSet', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to get information about a member of a chat. The method is only guaranteed to work for other users if the bot is an administrator in the chat. Returns a ChatMember object on success.
    */
   async getChatMember<T>(body: {
      /** Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) */
      chat_id: number | string
      /** Unique identifier of the target user */
      user_id: number
   }) {
      try {
         return await this.makeRequest<T>('getChatMember', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to get the number of members in a chat. Returns Int on success.
    */
   async getChatMemberCount<T>(body: {
      /** Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) */
      chat_id: number | string
   }) {
      try {
         return await this.makeRequest<T>('getChatMemberCount', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to get a list of administrators in a chat, which aren't bots. Returns an Array of ChatMember objects.
    */
   async getChatAdministrators<T>(body: {
      /** Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) */
      chat_id: number | string
   }) {
      try {
         return await this.makeRequest<T>('getChatAdministrators', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to get up-to-date information about the chat. Returns a ChatFullInfo object on success.
    */
   async getChat<T>(body: {
      /** Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) */
      chat_id: number | string
   }) {
      try {
         return await this.makeRequest<T>('getChat', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method for your bot to leave a group, supergroup or channel. Returns True on success.
    */
   async leaveChat<T>(body: {
      /** Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) */
      chat_id: number | string
   }) {
      try {
         return await this.makeRequest<T>('leaveChat', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to clear the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success.
    */
   async unpinAllChatMessages<T>(body: {
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string
   }) {
      try {
         return await this.makeRequest<T>('unpinAllChatMessages', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to remove a message from the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success.
    */
   async unpinChatMessage<T>(
      body: {
         /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
         chat_id: number | string
      },
      extra?: {
         /** Unique identifier of the business connection on behalf of which the message will be unpinned */
         business_connection_id?: string
         /** Identifier of the message to unpin. Required if business_connection_id is specified. If not specified, the most recent pinned message (by sending date) will be unpinned. */
         message_id?: number
      },
   ) {
      try {
         return await this.makeRequest<T>('unpinChatMessage', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to add a message to the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success.
    */
   async pinChatMessage<T>(
      body: {
         /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
         chat_id: number | string
         /** Identifier of a message to pin */
         message_id: number
      },
      extra?: {
         /** Unique identifier of the business connection on behalf of which the message will be pinned */
         business_connection_id?: string
         /** Pass True if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels and private chats. */
         disable_notification?: boolean
      },
   ) {
      try {
         return await this.makeRequest<T>('pinChatMessage', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
    */
   async setChatDescription<T>(
      body: {
         /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
         chat_id: number | string
      },
      extra?: {
         /** New chat description, 0-255 characters */
         description?: string
      },
   ) {
      try {
         return await this.makeRequest<T>('setChatDescription', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
    */
   async setChatTitle<T>(body: {
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string
      /** New chat title, 1-128 characters */
      title: string
   }) {
      try {
         return await this.makeRequest<T>('setChatTitle', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
    */
   async deleteChatPhoto<T>(body: {
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string
   }) {
      try {
         return await this.makeRequest<T>('deleteChatPhoto', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
    */
   async setChatPhoto<T>(body: {
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string
      /** New chat photo, uploaded using multipart/form-data */
      photo: InputFile
   }) {
      try {
         return await this.makeRequest<T>('setChatPhoto', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to decline a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success.
    */
   async declineChatJoinRequest<T>(body: {
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string
      /** Unique identifier of the target user */
      user_id: number
   }) {
      try {
         return await this.makeRequest<T>('declineChatJoinRequest', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to approve a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success.
    */
   async approveChatJoinRequest<T>(body: {
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string
      /** Unique identifier of the target user */
      user_id: number
   }) {
      try {
         return await this.makeRequest<T>('approveChatJoinRequest', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new link is automatically generated. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the revoked invite link as ChatInviteLink object.
    */
   async revokeChatInviteLink<T>(body: {
      /** Unique identifier of the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string
      /** The invite link to revoke */
      invite_link: string
   }) {
      try {
         return await this.makeRequest<T>('revokeChatInviteLink', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to edit a subscription invite link created by the bot. The bot must have the can_invite_users administrator rights. Returns the edited invite link as a ChatInviteLink object.
    */
   async editChatSubscriptionInviteLink<T>(
      body: {
         /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
         chat_id: number | string
         /** The invite link to edit */
         invite_link: string
      },
      extra?: {
         /** Invite link name; 0-32 characters */
         name?: string
      },
   ) {
      try {
         return await this.makeRequest<T>('editChatSubscriptionInviteLink', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to create a subscription invite link for a channel chat. The bot must have the can_invite_users administrator rights. The link can be edited using the method editChatSubscriptionInviteLink or revoked using the method revokeChatInviteLink. Returns the new invite link as a ChatInviteLink object.
    */
   async createChatSubscriptionInviteLink<T>(
      body: {
         /** Unique identifier for the target channel chat or username of the target channel (in the format @channelusername) */
         chat_id: number | string
         /** The number of seconds the subscription will be active for before the next payment. Currently, it must always be 2592000 (30 days). */
         subscription_period: number
         /** The amount of Telegram Stars a user must pay initially and after each subsequent subscription period to be a member of the chat; 1-2500 */
         subscription_price: number
      },
      extra?: {
         /** Invite link name; 0-32 characters */
         name?: string
      },
   ) {
      try {
         return await this.makeRequest<T>('createChatSubscriptionInviteLink', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the edited invite link as a ChatInviteLink object.
    */
   async editChatInviteLink<T>(
      body: {
         /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
         chat_id: number | string
         /** The invite link to edit */
         invite_link: string
      },
      extra?: {
         /** Invite link name; 0-32 characters */
         name?: string
         /** Point in time (Unix timestamp) when the link will expire */
         expire_date?: number
         /** The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999 */
         member_limit?: number
         /** True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can't be specified */
         creates_join_request?: boolean
      },
   ) {
      try {
         return await this.makeRequest<T>('editChatInviteLink', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to create an additional invite link for a chat. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. The link can be revoked using the method revokeChatInviteLink. Returns the new invite link as ChatInviteLink object.
    */
   async createChatInviteLink<T>(
      body: {
         /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
         chat_id: number | string
      },
      extra?: {
         /** Invite link name; 0-32 characters */
         name?: string
         /** Point in time (Unix timestamp) when the link will expire */
         expire_date?: number
         /** The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999 */
         member_limit?: number
         /** True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can't be specified */
         creates_join_request?: boolean
      },
   ) {
      try {
         return await this.makeRequest<T>('createChatInviteLink', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to generate a new primary invite link for a chat; any previously generated primary link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the new invite link as String on success.
    */
   async exportChatInviteLink<T>(body: {
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string
   }) {
      try {
         return await this.makeRequest<T>('exportChatInviteLink', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the can_restrict_members administrator rights. Returns True on success.
    */
   async setChatPermissions<T>(
      body: {
         /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
         chat_id: number | string
         /** A JSON-serialized object for new default chat permissions */
         permissions: ChatPermissions
      },
      extra?: {
         /** Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission. */
         use_independent_chat_permissions?: boolean
      },
   ) {
      try {
         return await this.makeRequest<T>('setChatPermissions', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to unban a previously banned channel chat in a supergroup or channel. The bot must be an administrator for this to work and must have the appropriate administrator rights. Returns True on success.
    */
   async unbanChatSenderChat<T>(body: {
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string
      /** Unique identifier of the target sender chat */
      sender_chat_id: number
   }) {
      try {
         return await this.makeRequest<T>('unbanChatSenderChat', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to ban a channel chat in a supergroup or a channel. Until the chat is unbanned, the owner of the banned chat won't be able to send messages on behalf of any of their channels. The bot must be an administrator in the supergroup or channel for this to work and must have the appropriate administrator rights. Returns True on success.
    */
   async banChatSenderChat<T>(body: {
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string
      /** Unique identifier of the target sender chat */
      sender_chat_id: number
   }) {
      try {
         return await this.makeRequest<T>('banChatSenderChat', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns True on success.
    */
   async setChatAdministratorCustomTitle<T>(body: {
      /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      chat_id: number | string
      /** Unique identifier of the target user */
      user_id: number
      /** New custom title for the administrator; 0-16 characters, emoji are not allowed */
      custom_title: string
   }) {
      try {
         return await this.makeRequest<T>('setChatAdministratorCustomTitle', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Pass False for all boolean parameters to demote a user. Returns True on success.
    */
   async promoteChatMember<T>(
      body: {
         /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
         chat_id: number | string
         /** Unique identifier of the target user */
         user_id: number
      },
      extra?: {
         /** Pass True if the administrator's presence in the chat is hidden */
         is_anonymous?: boolean
         /** Pass True if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages and ignore slow mode. Implied by any other administrator privilege. */
         can_manage_chat?: boolean
         /** Pass True if the administrator can delete messages of other users */
         can_delete_messages?: boolean
         /** Pass True if the administrator can manage video chats */
         can_manage_video_chats?: boolean
         /** Pass True if the administrator can restrict, ban or unban chat members, or access supergroup statistics */
         can_restrict_members?: boolean
         /** Pass True if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by him) */
         can_promote_members?: boolean
         /** Pass True if the administrator can change chat title, photo and other settings */
         can_change_info?: boolean
         /** Pass True if the administrator can invite new users to the chat */
         can_invite_users?: boolean
         /** Pass True if the administrator can post stories to the chat */
         can_post_stories?: boolean
         /** Pass True if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive */
         can_edit_stories?: boolean
         /** Pass True if the administrator can delete stories posted by other users */
         can_delete_stories?: boolean
         /** Pass True if the administrator can post messages in the channel, or access channel statistics; for channels only */
         can_post_messages?: boolean
         /** Pass True if the administrator can edit messages of other users and can pin messages; for channels only */
         can_edit_messages?: boolean
         /** Pass True if the administrator can pin messages; for supergroups only */
         can_pin_messages?: boolean
         /** Pass True if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only */
         can_manage_topics?: boolean
      },
   ) {
      try {
         return await this.makeRequest<T>('promoteChatMember', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate administrator rights. Pass True for all permissions to lift restrictions from a user. Returns True on success.
    */
   async restrictChatMember<T>(
      body: {
         /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
         chat_id: number | string
         /** Unique identifier of the target user */
         user_id: number
         /** A JSON-serialized object for new user permissions */
         permissions: ChatPermissions
      },
      extra?: {
         /** Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission. */
         use_independent_chat_permissions?: boolean
         /** Date when restrictions will be lifted for the user; Unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever */
         until_date?: number
      },
   ) {
      try {
         return await this.makeRequest<T>('restrictChatMember', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to unban a previously banned user in a supergroup or channel. The user will not return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be removed from the chat. If you don't want this, use the parameter only_if_banned. Returns True on success.
    */
   async unbanChatMember<T>(
      body: {
         /** Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername) */
         chat_id: number | string
         /** Unique identifier of the target user */
         user_id: number
      },
      extra?: {
         /** Do nothing if the user is not banned */
         only_if_banned?: boolean
      },
   ) {
      try {
         return await this.makeRequest<T>('unbanChatMember', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to ban a user in a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the chat on their own using invite links, etc., unless unbanned first. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
    */
   async banChatMember<T>(
      body: {
         /** Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername) */
         chat_id: number | string
         /** Unique identifier of the target user */
         user_id: number
      },
      extra?: {
         /** Date when the user will be unbanned; Unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever. Applied for supergroups and channels only. */
         until_date?: number
         /** Pass True to delete all messages from the chat for the user that is being removed. If False, the user will be able to see messages in the group that were sent before the user was removed. Always True for supergroups and channels. */
         revoke_messages?: boolean
      },
   ) {
      try {
         return await this.makeRequest<T>('banChatMember', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to get basic information about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a File object is returned. The file can then be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>, where <file_path> is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile again.Note: This function may not preserve the original file name and MIME type. You should save the file's MIME type and name (if available) when the File object is received.
    */
   async getFile<T>(body: {
      /** File identifier to get information about */
      file_id: string
   }) {
      try {
         return await this.makeRequest<T>('getFile', body)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to get a list of profile pictures for a user. Returns a UserProfilePhotos object.
    */
   async getUserProfilePhotos<T>(
      body: {
         /** Unique identifier of the target user */
         user_id: number
      },
      extra?: {
         /** Sequential number of the first photo to be returned. By default, all photos are returned. */
         offset?: number
         /** Limits the number of photos to be retrieved. Values between 1-100 are accepted. Defaults to 100. */
         limit?: number
      },
   ) {
      try {
         return await this.makeRequest<T>('getUserProfilePhotos', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to change the chosen reactions on a message. Service messages can't be reacted to. Automatically forwarded messages from a channel to its discussion group have the same available reactions as messages in the channel. Bots can't use paid reactions. Returns True on success.
    */
   async setMessageReaction<T>(
      body: {
         /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
         chat_id: number | string
         /** Identifier of the target message. If the message belongs to a media group, the reaction is set to the first non-deleted message in the group instead. */
         message_id: number
      },
      extra?: {
         /** A JSON-serialized list of reaction types to set on the message. Currently, as non-premium users, bots can set up to one reaction per message. A custom emoji reaction can be used if it is either already present on the message or explicitly allowed by chat administrators. Paid reactions can't be used by bots. */
         reaction?: ReactionType[]
         /** Pass True to set the reaction with a big animation */
         is_big?: boolean
      },
   ) {
      try {
         return await this.makeRequest<T>('setMessageReaction', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method when you need to tell the user that something is happening on the bot's side. The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status). Returns True on success.We only recommend using this method when a response from the bot will take a noticeable amount of time to arrive.
    */
   async sendChatAction<T>(
      body: {
         /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
         chat_id: number | string
         /** Type of action to broadcast. Choose one, depending on what the user is about to receive: typing for text messages, upload_photo for photos, record_video or upload_video for videos, record_voice or upload_voice for voice notes, upload_document for general files, choose_sticker for stickers, find_location for location data, record_video_note or upload_video_note for video notes. */
         action: string
      },
      extra?: {
         /** Unique identifier of the business connection on behalf of which the action will be sent */
         business_connection_id?: string
         /** Unique identifier for the target message thread; for supergroups only */
         message_thread_id?: number
      },
   ) {
      try {
         return await this.makeRequest<T>('sendChatAction', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to send an animated emoji that will display a random value. On success, the sent Message is returned.
    */
   async sendDice<T>(
      body: {
         /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
         chat_id: number | string
      },
      extra?: {
         /** Unique identifier of the business connection on behalf of which the message will be sent */
         business_connection_id?: string
         /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
         message_thread_id?: number
         /** Emoji on which the dice throw animation is based. Currently, must be one of “”, “”, “”, “”, “”, or “”. Dice can have values 1-6 for “”, “” and “”, values 1-5 for “” and “”, and values 1-64 for “”. Defaults to “” */
         emoji?: string
         /** Sends the message silently. Users will receive a notification with no sound. */
         disable_notification?: boolean
         /** Protects the contents of the sent message from forwarding */
         protect_content?: boolean
         /** Unique identifier of the message effect to be added to the message; for private chats only */
         message_effect_id?: string
         /** Description of the message to reply to */
         reply_parameters?: ReplyParameters
         /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
         reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      },
   ) {
      try {
         return await this.makeRequest<T>('sendDice', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to send a native poll. On success, the sent Message is returned.
    */
   async sendPoll<T>(
      body: {
         /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
         chat_id: number | string
         /** Poll question, 1-300 characters */
         question: string
         /** A JSON-serialized list of 2-10 answer options */
         options: InputPollOption[]
      },
      extra?: {
         /** Unique identifier of the business connection on behalf of which the message will be sent */
         business_connection_id?: string
         /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
         message_thread_id?: number
         /** Mode for parsing entities in the question. See formatting options for more details. Currently, only custom emoji entities are allowed */
         question_parse_mode?: string
         /** A JSON-serialized list of special entities that appear in the poll question. It can be specified instead of question_parse_mode */
         question_entities?: MessageEntity[]
         /** True, if the poll needs to be anonymous, defaults to True */
         is_anonymous?: boolean
         /** Poll type, “quiz” or “regular”, defaults to “regular” */
         type?: string
         /** True, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to False */
         allows_multiple_answers?: boolean
         /** 0-based identifier of the correct answer option, required for polls in quiz mode */
         correct_option_id?: number
         /** Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing */
         explanation?: string
         /** Mode for parsing entities in the explanation. See formatting options for more details. */
         explanation_parse_mode?: string
         /** A JSON-serialized list of special entities that appear in the poll explanation. It can be specified instead of explanation_parse_mode */
         explanation_entities?: MessageEntity[]
         /** Amount of time in seconds the poll will be active after creation, 5-600. Can't be used together with close_date. */
         open_period?: number
         /** Point in time (Unix timestamp) when the poll will be automatically closed. Must be at least 5 and no more than 600 seconds in the future. Can't be used together with open_period. */
         close_date?: number
         /** Pass True if the poll needs to be immediately closed. This can be useful for poll preview. */
         is_closed?: boolean
         /** Sends the message silently. Users will receive a notification with no sound. */
         disable_notification?: boolean
         /** Protects the contents of the sent message from forwarding and saving */
         protect_content?: boolean
         /** Unique identifier of the message effect to be added to the message; for private chats only */
         message_effect_id?: string
         /** Description of the message to reply to */
         reply_parameters?: ReplyParameters
         /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
         reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      },
   ) {
      try {
         return await this.makeRequest<T>('sendPoll', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to send phone contacts. On success, the sent Message is returned.
    */
   async sendContact<T>(
      body: {
         /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
         chat_id: number | string
         /** Contact's phone number */
         phone_number: string
         /** Contact's first name */
         first_name: string
      },
      extra?: {
         /** Unique identifier of the business connection on behalf of which the message will be sent */
         business_connection_id?: string
         /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
         message_thread_id?: number
         /** Contact's last name */
         last_name?: string
         /** Additional data about the contact in the form of a vCard, 0-2048 bytes */
         vcard?: string
         /** Sends the message silently. Users will receive a notification with no sound. */
         disable_notification?: boolean
         /** Protects the contents of the sent message from forwarding and saving */
         protect_content?: boolean
         /** Unique identifier of the message effect to be added to the message; for private chats only */
         message_effect_id?: string
         /** Description of the message to reply to */
         reply_parameters?: ReplyParameters
         /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
         reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      },
   ) {
      try {
         return await this.makeRequest<T>('sendContact', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to send information about a venue. On success, the sent Message is returned.
    */
   async sendVenue<T>(
      body: {
         /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
         chat_id: number | string
         /** Latitude of the venue */
         latitude: number
         /** Longitude of the venue */
         longitude: number
         /** Name of the venue */
         title: string
         /** Address of the venue */
         address: string
      },
      extra?: {
         /** Unique identifier of the business connection on behalf of which the message will be sent */
         business_connection_id?: string
         /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
         message_thread_id?: number
         /** Foursquare identifier of the venue */
         foursquare_id?: string
         /** Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.) */
         foursquare_type?: string
         /** Google Places identifier of the venue */
         google_place_id?: string
         /** Google Places type of the venue. (See supported types.) */
         google_place_type?: string
         /** Sends the message silently. Users will receive a notification with no sound. */
         disable_notification?: boolean
         /** Protects the contents of the sent message from forwarding and saving */
         protect_content?: boolean
         /** Unique identifier of the message effect to be added to the message; for private chats only */
         message_effect_id?: string
         /** Description of the message to reply to */
         reply_parameters?: ReplyParameters
         /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
         reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      },
   ) {
      try {
         return await this.makeRequest<T>('sendVenue', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to send point on the map. On success, the sent Message is returned.
    */
   async sendLocation<T>(
      body: {
         /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
         chat_id: number | string
         /** Latitude of the location */
         latitude: number
         /** Longitude of the location */
         longitude: number
      },
      extra?: {
         /** Unique identifier of the business connection on behalf of which the message will be sent */
         business_connection_id?: string
         /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
         message_thread_id?: number
         /** The radius of uncertainty for the location, measured in meters; 0-1500 */
         horizontal_accuracy?: number
         /** Period in seconds during which the location will be updated (see Live Locations, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely. */
         live_period?: number
         /** For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. */
         heading?: number
         /** For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. */
         proximity_alert_radius?: number
         /** Sends the message silently. Users will receive a notification with no sound. */
         disable_notification?: boolean
         /** Protects the contents of the sent message from forwarding and saving */
         protect_content?: boolean
         /** Unique identifier of the message effect to be added to the message; for private chats only */
         message_effect_id?: string
         /** Description of the message to reply to */
         reply_parameters?: ReplyParameters
         /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
         reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      },
   ) {
      try {
         return await this.makeRequest<T>('sendLocation', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of Messages that were sent is returned.
    */
   async sendMediaGroup<T>(
      body: {
         /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
         chat_id: number | string
         /** A JSON-serialized array describing messages to be sent, must include 2-10 items */
         media: InputMediaAudio[] | InputMediaDocument | InputMediaPhoto | InputMediaVideo
      },
      extra?: {
         /** Unique identifier of the business connection on behalf of which the message will be sent */
         business_connection_id?: string
         /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
         message_thread_id?: number
         /** Sends messages silently. Users will receive a notification with no sound. */
         disable_notification?: boolean
         /** Protects the contents of the sent messages from forwarding and saving */
         protect_content?: boolean
         /** Unique identifier of the message effect to be added to the message; for private chats only */
         message_effect_id?: string
         /** Description of the message to reply to */
         reply_parameters?: ReplyParameters
      },
   ) {
      try {
         return await this.makeRequest<T>('sendMediaGroup', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to send paid media. On success, the sent Message is returned.
    */
   async sendPaidMedia<T>(
      body: {
         /** Unique identifier for the target chat or username of the target channel (in the format @channelusername). If the chat is a channel, all Telegram Star proceeds from this media will be credited to the chat's balance. Otherwise, they will be credited to the bot's balance. */
         chat_id: number | string
         /** The number of Telegram Stars that must be paid to buy access to the media; 1-2500 */
         star_count: number
         /** A JSON-serialized array describing the media to be sent; up to 10 items */
         media: InputPaidMedia[]
      },
      extra?: {
         /** Unique identifier of the business connection on behalf of which the message will be sent */
         business_connection_id?: string
         /** Bot-defined paid media payload, 0-128 bytes. This will not be displayed to the user, use it for your internal processes. */
         payload?: string
         /** Media caption, 0-1024 characters after entities parsing */
         caption?: string
         /** Mode for parsing entities in the media caption. See formatting options for more details. */
         parse_mode?: string
         /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
         caption_entities?: MessageEntity[]
         /** Pass True, if the caption must be shown above the message media */
         show_caption_above_media?: boolean
         /** Sends the message silently. Users will receive a notification with no sound. */
         disable_notification?: boolean
         /** Protects the contents of the sent message from forwarding and saving */
         protect_content?: boolean
         /** Description of the message to reply to */
         reply_parameters?: ReplyParameters
         /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
         reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      },
   ) {
      try {
         return await this.makeRequest<T>('sendPaidMedia', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * As of v.4.0, Telegram clients support rounded square MPEG4 videos of up to 1 minute long. Use this method to send video messages. On success, the sent Message is returned.
    */
   async sendVideoNote<T>(
      body: {
         /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
         chat_id: number | string
         /** Video note to send. Pass a file_id as String to send a video note that exists on the Telegram servers (recommended) or upload a new video using multipart/form-data. More information on Sending Files ». Sending video notes by a URL is currently unsupported */
         video_note: InputFile | string
      },
      extra?: {
         /** Unique identifier of the business connection on behalf of which the message will be sent */
         business_connection_id?: string
         /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
         message_thread_id?: number
         /** Duration of sent video in seconds */
         duration?: number
         /** Video width and height, i.e. diameter of the video message */
         length?: number
         /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
         thumbnail?: InputFile | string
         /** Sends the message silently. Users will receive a notification with no sound. */
         disable_notification?: boolean
         /** Protects the contents of the sent message from forwarding and saving */
         protect_content?: boolean
         /** Unique identifier of the message effect to be added to the message; for private chats only */
         message_effect_id?: string
         /** Description of the message to reply to */
         reply_parameters?: ReplyParameters
         /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
         reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      },
   ) {
      try {
         return await this.makeRequest<T>('sendVideoNote', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS, or in .MP3 format, or in .M4A format (other formats may be sent as Audio or Document). On success, the sent Message is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.
    */
   async sendVoice<T>(
      body: {
         /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
         chat_id: number | string
         /** Audio file to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files » */
         voice: InputFile | string
      },
      extra?: {
         /** Unique identifier of the business connection on behalf of which the message will be sent */
         business_connection_id?: string
         /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
         message_thread_id?: number
         /** Voice message caption, 0-1024 characters after entities parsing */
         caption?: string
         /** Mode for parsing entities in the voice message caption. See formatting options for more details. */
         parse_mode?: string
         /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
         caption_entities?: MessageEntity[]
         /** Duration of the voice message in seconds */
         duration?: number
         /** Sends the message silently. Users will receive a notification with no sound. */
         disable_notification?: boolean
         /** Protects the contents of the sent message from forwarding and saving */
         protect_content?: boolean
         /** Unique identifier of the message effect to be added to the message; for private chats only */
         message_effect_id?: string
         /** Description of the message to reply to */
         reply_parameters?: ReplyParameters
         /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
         reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      },
   ) {
      try {
         return await this.makeRequest<T>('sendVoice', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success, the sent Message is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future.
    */
   async sendAnimation<T>(
      body: {
         /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
         chat_id: number | string
         /** Animation to send. Pass a file_id as String to send an animation that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an animation from the Internet, or upload a new animation using multipart/form-data. More information on Sending Files » */
         animation: InputFile | string
      },
      extra?: {
         /** Unique identifier of the business connection on behalf of which the message will be sent */
         business_connection_id?: string
         /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
         message_thread_id?: number
         /** Duration of sent animation in seconds */
         duration?: number
         /** Animation width */
         width?: number
         /** Animation height */
         height?: number
         /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
         thumbnail?: InputFile | string
         /** Animation caption (may also be used when resending animation by file_id), 0-1024 characters after entities parsing */
         caption?: string
         /** Mode for parsing entities in the animation caption. See formatting options for more details. */
         parse_mode?: string
         /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
         caption_entities?: MessageEntity[]
         /** Pass True, if the caption must be shown above the message media */
         show_caption_above_media?: boolean
         /** Pass True if the animation needs to be covered with a spoiler animation */
         has_spoiler?: boolean
         /** Sends the message silently. Users will receive a notification with no sound. */
         disable_notification?: boolean
         /** Protects the contents of the sent message from forwarding and saving */
         protect_content?: boolean
         /** Unique identifier of the message effect to be added to the message; for private chats only */
         message_effect_id?: string
         /** Description of the message to reply to */
         reply_parameters?: ReplyParameters
         /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
         reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      },
   ) {
      try {
         return await this.makeRequest<T>('sendAnimation', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to send video files, Telegram clients support MPEG4 videos (other formats may be sent as Document). On success, the sent Message is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.
    */
   async sendVideo<T>(
      body: {
         /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
         chat_id: number | string
         /** Video to send. Pass a file_id as String to send a video that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data. More information on Sending Files » */
         video: InputFile | string
      },
      extra?: {
         /** Unique identifier of the business connection on behalf of which the message will be sent */
         business_connection_id?: string
         /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
         message_thread_id?: number
         /** Duration of sent video in seconds */
         duration?: number
         /** Video width */
         width?: number
         /** Video height */
         height?: number
         /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
         thumbnail?: InputFile | string
         /** Video caption (may also be used when resending videos by file_id), 0-1024 characters after entities parsing */
         caption?: string
         /** Mode for parsing entities in the video caption. See formatting options for more details. */
         parse_mode?: string
         /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
         caption_entities?: MessageEntity[]
         /** Pass True, if the caption must be shown above the message media */
         show_caption_above_media?: boolean
         /** Pass True if the video needs to be covered with a spoiler animation */
         has_spoiler?: boolean
         /** Pass True if the uploaded video is suitable for streaming */
         supports_streaming?: boolean
         /** Sends the message silently. Users will receive a notification with no sound. */
         disable_notification?: boolean
         /** Protects the contents of the sent message from forwarding and saving */
         protect_content?: boolean
         /** Unique identifier of the message effect to be added to the message; for private chats only */
         message_effect_id?: string
         /** Description of the message to reply to */
         reply_parameters?: ReplyParameters
         /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
         reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      },
   ) {
      try {
         return await this.makeRequest<T>('sendVideo', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to send general files. On success, the sent Message is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.
    */
   async sendDocument<T>(
      body: {
         /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
         chat_id: number | string
         /** File to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files » */
         document: InputFile | string
      },
      extra?: {
         /** Unique identifier of the business connection on behalf of which the message will be sent */
         business_connection_id?: string
         /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
         message_thread_id?: number
         /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
         thumbnail?: InputFile | string
         /** Document caption (may also be used when resending documents by file_id), 0-1024 characters after entities parsing */
         caption?: string
         /** Mode for parsing entities in the document caption. See formatting options for more details. */
         parse_mode?: string
         /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
         caption_entities?: MessageEntity[]
         /** Disables automatic server-side content type detection for files uploaded using multipart/form-data */
         disable_content_type_detection?: boolean
         /** Sends the message silently. Users will receive a notification with no sound. */
         disable_notification?: boolean
         /** Protects the contents of the sent message from forwarding and saving */
         protect_content?: boolean
         /** Unique identifier of the message effect to be added to the message; for private chats only */
         message_effect_id?: string
         /** Description of the message to reply to */
         reply_parameters?: ReplyParameters
         /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
         reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      },
   ) {
      try {
         return await this.makeRequest<T>('sendDocument', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent Message is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.For sending voice messages, use the sendVoice method instead.
    */
   async sendAudio<T>(
      body: {
         /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
         chat_id: number | string
         /** Audio file to send. Pass a file_id as String to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files » */
         audio: InputFile | string
      },
      extra?: {
         /** Unique identifier of the business connection on behalf of which the message will be sent */
         business_connection_id?: string
         /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
         message_thread_id?: number
         /** Audio caption, 0-1024 characters after entities parsing */
         caption?: string
         /** Mode for parsing entities in the audio caption. See formatting options for more details. */
         parse_mode?: string
         /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
         caption_entities?: MessageEntity[]
         /** Duration of the audio in seconds */
         duration?: number
         /** Performer */
         performer?: string
         /** Track name */
         title?: string
         /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
         thumbnail?: InputFile | string
         /** Sends the message silently. Users will receive a notification with no sound. */
         disable_notification?: boolean
         /** Protects the contents of the sent message from forwarding and saving */
         protect_content?: boolean
         /** Unique identifier of the message effect to be added to the message; for private chats only */
         message_effect_id?: string
         /** Description of the message to reply to */
         reply_parameters?: ReplyParameters
         /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
         reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      },
   ) {
      try {
         return await this.makeRequest<T>('sendAudio', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to send photos. On success, the sent Message is returned.
    */
   async sendPhoto<T>(
      body: {
         /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
         chat_id: number | string
         /** Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20. More information on Sending Files » */
         photo: InputFile | string
      },
      extra?: {
         /** Unique identifier of the business connection on behalf of which the message will be sent */
         business_connection_id?: string
         /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
         message_thread_id?: number
         /** Photo caption (may also be used when resending photos by file_id), 0-1024 characters after entities parsing */
         caption?: string
         /** Mode for parsing entities in the photo caption. See formatting options for more details. */
         parse_mode?: string
         /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
         caption_entities?: MessageEntity[]
         /** Pass True, if the caption must be shown above the message media */
         show_caption_above_media?: boolean
         /** Pass True if the photo needs to be covered with a spoiler animation */
         has_spoiler?: boolean
         /** Sends the message silently. Users will receive a notification with no sound. */
         disable_notification?: boolean
         /** Protects the contents of the sent message from forwarding and saving */
         protect_content?: boolean
         /** Unique identifier of the message effect to be added to the message; for private chats only */
         message_effect_id?: string
         /** Description of the message to reply to */
         reply_parameters?: ReplyParameters
         /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
         reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      },
   ) {
      try {
         return await this.makeRequest<T>('sendPhoto', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to copy messages of any kind. If some of the specified messages can't be found or copied, they are skipped. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessages, but the copied messages don't have a link to the original message. Album grouping is kept for copied messages. On success, an array of MessageId of the sent messages is returned.
    */
   async copyMessages<T>(
      body: {
         /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
         chat_id: number | string
         /** Unique identifier for the chat where the original messages were sent (or channel username in the format @channelusername) */
         from_chat_id: number | string
         /** A JSON-serialized list of 1-100 identifiers of messages in the chat from_chat_id to copy. The identifiers must be specified in a strictly increasing order. */
         message_ids: number[]
      },
      extra?: {
         /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
         message_thread_id?: number
         /** Sends the messages silently. Users will receive a notification with no sound. */
         disable_notification?: boolean
         /** Protects the contents of the sent messages from forwarding and saving */
         protect_content?: boolean
         /** Pass True to copy the messages without their captions */
         remove_caption?: boolean
      },
   ) {
      try {
         return await this.makeRequest<T>('copyMessages', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to copy messages of any kind. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessage, but the copied message doesn't have a link to the original message. Returns the MessageId of the sent message on success.
    */
   async copyMessage<T>(
      body: {
         /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
         chat_id: number | string
         /** Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername) */
         from_chat_id: number | string
         /** Message identifier in the chat specified in from_chat_id */
         message_id: number
      },
      extra?: {
         /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
         message_thread_id?: number
         /** New caption for media, 0-1024 characters after entities parsing. If not specified, the original caption is kept */
         caption?: string
         /** Mode for parsing entities in the new caption. See formatting options for more details. */
         parse_mode?: string
         /** A JSON-serialized list of special entities that appear in the new caption, which can be specified instead of parse_mode */
         caption_entities?: MessageEntity[]
         /** Pass True, if the caption must be shown above the message media. Ignored if a new caption isn't specified. */
         show_caption_above_media?: boolean
         /** Sends the message silently. Users will receive a notification with no sound. */
         disable_notification?: boolean
         /** Protects the contents of the sent message from forwarding and saving */
         protect_content?: boolean
         /** Description of the message to reply to */
         reply_parameters?: ReplyParameters
         /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
         reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      },
   ) {
      try {
         return await this.makeRequest<T>('copyMessage', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to forward multiple messages of any kind. If some of the specified messages can't be found or forwarded, they are skipped. Service messages and messages with protected content can't be forwarded. Album grouping is kept for forwarded messages. On success, an array of MessageId of the sent messages is returned.
    */
   async forwardMessages<T>(
      body: {
         /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
         chat_id: number | string
         /** Unique identifier for the chat where the original messages were sent (or channel username in the format @channelusername) */
         from_chat_id: number | string
         /** A JSON-serialized list of 1-100 identifiers of messages in the chat from_chat_id to forward. The identifiers must be specified in a strictly increasing order. */
         message_ids: number[]
      },
      extra?: {
         /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
         message_thread_id?: number
         /** Sends the messages silently. Users will receive a notification with no sound. */
         disable_notification?: boolean
         /** Protects the contents of the forwarded messages from forwarding and saving */
         protect_content?: boolean
      },
   ) {
      try {
         return await this.makeRequest<T>('forwardMessages', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to forward messages of any kind. Service messages and messages with protected content can't be forwarded. On success, the sent Message is returned.
    */
   async forwardMessage<T>(
      body: {
         /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
         chat_id: number | string
         /** Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername) */
         from_chat_id: number | string
         /** Message identifier in the chat specified in from_chat_id */
         message_id: number
      },
      extra?: {
         /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
         message_thread_id?: number
         /** Sends the message silently. Users will receive a notification with no sound. */
         disable_notification?: boolean
         /** Protects the contents of the forwarded message from forwarding and saving */
         protect_content?: boolean
      },
   ) {
      try {
         return await this.makeRequest<T>('forwardMessage', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to send text messages. On success, the sent Message is returned.The Bot API supports basic formatting for messages. You can use bold, italic, underlined, strikethrough, spoiler text, block quotations as well as inline links and pre-formatted code in your bots' messages. Telegram clients will render them accordingly. You can specify text entities directly, or use markdown-style or HTML-style formatting.Note that Telegram clients will display an alert to the user before opening an inline link ('Open this link?' together with the full URL).Message entities can be nested, providing following restrictions are met:- If two entities have common characters, then one of them is fully contained inside another.- bold, italic, underline, strikethrough, and spoiler entities can contain and can be part of any other entities, except pre and code.- blockquote and expandable_blockquote entities can't be nested.- All other entities can't contain each other.Links tg://user?id=<user_id> can be used to mention a user by their identifier without using a username. Please note:You can find the list of programming and markup languages for which syntax highlighting is supported at libprisma#supported-languages.To use this mode, pass MarkdownV2 in the parse_mode field. Use the following syntax in your message:Please note:To use this mode, pass HTML in the parse_mode field. The following tags are currently supported:Please note:This is a legacy mode, retained for backward compatibility. To use this mode, pass Markdown in the parse_mode field. Use the following syntax in your message:Please note:
    */
   async sendMessage<T>(
      body: {
         /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
         chat_id: number | string
         /** Text of the message to be sent, 1-4096 characters after entities parsing */
         text: string
      },
      extra?: {
         /** Unique identifier of the business connection on behalf of which the message will be sent */
         business_connection_id?: string
         /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
         message_thread_id?: number
         /** Mode for parsing entities in the message text. See formatting options for more details. */
         parse_mode?: string
         /** A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode */
         entities?: MessageEntity[]
         /** Link preview generation options for the message */
         link_preview_options?: LinkPreviewOptions
         /** Sends the message silently. Users will receive a notification with no sound. */
         disable_notification?: boolean
         /** Protects the contents of the sent message from forwarding and saving */
         protect_content?: boolean
         /** Unique identifier of the message effect to be added to the message; for private chats only */
         message_effect_id?: string
         /** Description of the message to reply to */
         reply_parameters?: ReplyParameters
         /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
         reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      },
   ) {
      try {
         return await this.makeRequest<T>('sendMessage', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn't launched again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched. Returns True on success. Requires no parameters.
    */
   async close<T>() {
      try {
         return await this.makeRequest<T>('close')
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to log out from the cloud Bot API server before launching the bot locally. You must log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates. After a successful call, you can immediately log in on a local server, but will not be able to log in back to the cloud Bot API server for 10 minutes. Returns True on success. Requires no parameters.
    */
   async logOut<T>() {
      try {
         return await this.makeRequest<T>('logOut')
      } catch (error: any) {
         throw error
      }
   }

   /**
    * A simple method for testing your bot's authentication token. Requires no parameters. Returns basic information about the bot in form of a User object.
    */
   async getMe<T>() {
      try {
         return await this.makeRequest<T>('getMe')
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to get current webhook status. Requires no parameters. On success, returns a WebhookInfo object. If the bot is using getUpdates, will return an object with the url field empty.
    */
   async getWebhookInfo<T>() {
      try {
         return await this.makeRequest<T>('getWebhookInfo')
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to remove webhook integration if you decide to switch back to getUpdates. Returns True on success.
    */
   async deleteWebhook<T>(extra?: {
      /** Pass True to drop all pending updates */
      drop_pending_updates?: boolean
   }) {
      try {
         return await this.makeRequest<T>('deleteWebhook', extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to specify a URL and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified URL, containing a JSON-serialized Update. In case of an unsuccessful request, we will give up after a reasonable amount of attempts. Returns True on success.If you'd like to make sure that the webhook was set by you, you can specify secret data in the parameter secret_token. If specified, the request will contain a header “X-Telegram-Bot-Api-Secret-Token” with the secret token as content.
    */
   async setWebhook<T>(
      body: {
         /** HTTPS URL to send updates to. Use an empty string to remove webhook integration */
         url: string
      },
      extra?: {
         /** Upload your public key certificate so that the root certificate in use can be checked. See our self-signed guide for details. */
         certificate?: InputFile
         /** The fixed IP address which will be used to send webhook requests instead of the IP address resolved through DNS */
         ip_address?: string
         /** The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery, 1-100. Defaults to 40. Use lower values to limit the load on your bot's server, and higher values to increase your bot's throughput. */
         max_connections?: number
         /** A JSON-serialized list of the update types you want your bot to receive. For example, specify ["message", "edited_channel_post", "callback_query"] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member, message_reaction, and message_reaction_count (default). If not specified, the previous setting will be used.Please note that this parameter doesn't affect updates created before the call to the setWebhook, so unwanted updates may be received for a short period of time. */
         allowed_updates?: string[]
         /** Pass True to drop all pending updates */
         drop_pending_updates?: boolean
         /** A secret token to be sent in a header “X-Telegram-Bot-Api-Secret-Token” in every webhook request, 1-256 characters. Only characters A-Z, a-z, 0-9, _ and - are allowed. The header is useful to ensure that the request comes from a webhook set by you. */
         secret_token?: string
      },
   ) {
      try {
         return await this.makeRequest<T>('setWebhook', body, extra)
      } catch (error: any) {
         throw error
      }
   }

   /**
    * Use this method to receive incoming updates using long polling (wiki). Returns an Array of Update objects.
    */
   async getUpdates<T>(extra?: {
      /** Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as getUpdates is called with an offset higher than its update_id. The negative offset can be specified to retrieve updates starting from -offset update from the end of the updates queue. All previous updates will be forgotten. */
      offset?: number
      /** Limits the number of updates to be retrieved. Values between 1-100 are accepted. Defaults to 100. */
      limit?: number
      /** Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only. */
      timeout?: number
      /** A JSON-serialized list of the update types you want your bot to receive. For example, specify ["message", "edited_channel_post", "callback_query"] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member, message_reaction, and message_reaction_count (default). If not specified, the previous setting will be used.Please note that this parameter doesn't affect updates created before the call to the getUpdates, so unwanted updates may be received for a short period of time. */
      allowed_updates?: string[]
   }) {
      try {
         return await this.makeRequest<T>('getUpdates', extra)
      } catch (error: any) {
         throw error
      }
   }
}
