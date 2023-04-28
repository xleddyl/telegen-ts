import * as types from './autogen-types'

export abstract class Methods {
   abstract makeRequest(methodName: string, body?: any, extra?: any): Promise<any>

   /**
    * Use this method to receive incoming updates using long polling (wiki). Returns an Array of Update objects.
    */
   async getUpdates(
      /** Extra options that could be provided */
      extra?: {
         /** Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as getUpdates is called with an offset higher than its update_id. The negative offset can be specified to retrieve updates starting from -offset update from the end of the updates queue. All previous updates will be forgotten. */
         offset?: number
         /** Limits the number of updates to be retrieved. Values between 1-100 are accepted. Defaults to 100. */
         limit?: number
         /** Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only. */
         timeout?: number
         /** A JSON-serialized list of the update types you want your bot to receive. For example, specify [“message”, “edited_channel_post”, “callback_query”] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member (default). If not specified, the previous setting will be used.Please note that this parameter doesn't affect updates created before the call to the getUpdates, so unwanted updates may be received for a short period of time. */
         allowed_updates?: string[]
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('getUpdates', extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to specify a URL and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified URL, containing a JSON-serialized Update. In case of an unsuccessful request, we will give up after a reasonable amount of attempts. Returns True on success.If you'd like to make sure that the webhook was set by you, you can specify secret data in the parameter secret_token. If specified, the request will contain a header “X-Telegram-Bot-Api-Secret-Token” with the secret token as content.
    */
   async setWebhook(
      /** HTTPS URL to send updates to. Use an empty string to remove webhook integration */
      url: string,
      /** Extra options that could be provided */
      extra?: {
         /** Upload your public key certificate so that the root certificate in use can be checked. See our self-signed guide for details. */
         certificate?: types.InputFile
         /** The fixed IP address which will be used to send webhook requests instead of the IP address resolved through DNS */
         ip_address?: string
         /** The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery, 1-100. Defaults to 40. Use lower values to limit the load on your bot's server, and higher values to increase your bot's throughput. */
         max_connections?: number
         /** A JSON-serialized list of the update types you want your bot to receive. For example, specify [“message”, “edited_channel_post”, “callback_query”] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member (default). If not specified, the previous setting will be used.Please note that this parameter doesn't affect updates created before the call to the setWebhook, so unwanted updates may be received for a short period of time. */
         allowed_updates?: string[]
         /** Pass True to drop all pending updates */
         drop_pending_updates?: boolean
         /** A secret token to be sent in a header “X-Telegram-Bot-Api-Secret-Token” in every webhook request, 1-256 characters. Only characters A-Z, a-z, 0-9, _ and - are allowed. The header is useful to ensure that the request comes from a webhook set by you. */
         secret_token?: string
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('setWebhook', { url }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to remove webhook integration if you decide to switch back to getUpdates. Returns True on success.
    */
   async deleteWebhook(
      /** Extra options that could be provided */
      extra?: {
         /** Pass True to drop all pending updates */
         drop_pending_updates?: boolean
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('deleteWebhook', extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to get current webhook status. Requires no parameters. On success, returns a WebhookInfo object. If the bot is using getUpdates, will return an object with the url field empty.
    */
   async getWebhookInfo(): Promise<any> {
      try {
         return await this.makeRequest('getWebhookInfo', undefined, undefined)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * A simple method for testing your bot's authentication token. Requires no parameters. Returns basic information about the bot in form of a User object.
    */
   async getMe(): Promise<any> {
      try {
         return await this.makeRequest('getMe', undefined, undefined)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to log out from the cloud Bot API server before launching the bot locally. You must log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates. After a successful call, you can immediately log in on a local server, but will not be able to log in back to the cloud Bot API server for 10 minutes. Returns True on success. Requires no parameters.
    */
   async logOut(): Promise<any> {
      try {
         return await this.makeRequest('logOut', undefined, undefined)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn't launched again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched. Returns True on success. Requires no parameters.
    */
   async close(): Promise<any> {
      try {
         return await this.makeRequest('close', undefined, undefined)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to send text messages. On success, the sent Message is returned.
    */
   async sendMessage(
      /** Text of the message to be sent, 1-4096 characters after entities parsing */
      text: string,
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string,
      /** Extra options that could be provided */
      extra?: {
         /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
         message_thread_id?: number
         /** Mode for parsing entities in the message text. See formatting options for more details. */
         parse_mode?: string
         /** A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode */
         entities?: types.MessageEntity[]
         /** Disables link previews for links in this message */
         disable_web_page_preview?: boolean
         /** Sends the message silently. Users will receive a notification with no sound. */
         disable_notification?: boolean
         /** Protects the contents of the sent message from forwarding and saving */
         protect_content?: boolean
         /** If the message is a reply, ID of the original message */
         reply_to_message_id?: number
         /** Pass True if the message should be sent even if the specified replied-to message is not found */
         allow_sending_without_reply?: boolean
         /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
         reply_markup?:
            | types.InlineKeyboardMarkup
            | types.ReplyKeyboardMarkup
            | types.ReplyKeyboardRemove
            | types.ForceReply
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('sendMessage', { text, chat_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to forward messages of any kind. Service messages can't be forwarded. On success, the sent Message is returned.
    */
   async forwardMessage(
      /** Message identifier in the chat specified in from_chat_id */
      message_id: number,
      /** Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername) */
      from_chat_id: number | string,
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string,
      /** Extra options that could be provided */
      extra?: {
         /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
         message_thread_id?: number
         /** Sends the message silently. Users will receive a notification with no sound. */
         disable_notification?: boolean
         /** Protects the contents of the forwarded message from forwarding and saving */
         protect_content?: boolean
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('forwardMessage', { message_id, from_chat_id, chat_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to copy messages of any kind. Service messages and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessage, but the copied message doesn't have a link to the original message. Returns the MessageId of the sent message on success.
    */
   async copyMessage(
      /** Message identifier in the chat specified in from_chat_id */
      message_id: number,
      /** Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername) */
      from_chat_id: number | string,
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string,
      /** Extra options that could be provided */
      extra?: {
         /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
         message_thread_id?: number
         /** New caption for media, 0-1024 characters after entities parsing. If not specified, the original caption is kept */
         caption?: string
         /** Mode for parsing entities in the new caption. See formatting options for more details. */
         parse_mode?: string
         /** A JSON-serialized list of special entities that appear in the new caption, which can be specified instead of parse_mode */
         caption_entities?: types.MessageEntity[]
         /** Sends the message silently. Users will receive a notification with no sound. */
         disable_notification?: boolean
         /** Protects the contents of the sent message from forwarding and saving */
         protect_content?: boolean
         /** If the message is a reply, ID of the original message */
         reply_to_message_id?: number
         /** Pass True if the message should be sent even if the specified replied-to message is not found */
         allow_sending_without_reply?: boolean
         /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
         reply_markup?:
            | types.InlineKeyboardMarkup
            | types.ReplyKeyboardMarkup
            | types.ReplyKeyboardRemove
            | types.ForceReply
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('copyMessage', { message_id, from_chat_id, chat_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to send photos. On success, the sent Message is returned.
    */
   async sendPhoto(
      /** Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20. More information on Sending Files » */
      photo: types.InputFile | string,
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string,
      /** Extra options that could be provided */
      extra?: {
         /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
         message_thread_id?: number
         /** Photo caption (may also be used when resending photos by file_id), 0-1024 characters after entities parsing */
         caption?: string
         /** Mode for parsing entities in the photo caption. See formatting options for more details. */
         parse_mode?: string
         /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
         caption_entities?: types.MessageEntity[]
         /** Pass True if the photo needs to be covered with a spoiler animation */
         has_spoiler?: boolean
         /** Sends the message silently. Users will receive a notification with no sound. */
         disable_notification?: boolean
         /** Protects the contents of the sent message from forwarding and saving */
         protect_content?: boolean
         /** If the message is a reply, ID of the original message */
         reply_to_message_id?: number
         /** Pass True if the message should be sent even if the specified replied-to message is not found */
         allow_sending_without_reply?: boolean
         /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
         reply_markup?:
            | types.InlineKeyboardMarkup
            | types.ReplyKeyboardMarkup
            | types.ReplyKeyboardRemove
            | types.ForceReply
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('sendPhoto', { photo, chat_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent Message is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.For sending voice messages, use the sendVoice method instead.
    */
   async sendAudio(
      /** Audio file to send. Pass a file_id as String to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files » */
      audio: types.InputFile | string,
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string,
      /** Extra options that could be provided */
      extra?: {
         /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
         message_thread_id?: number
         /** Audio caption, 0-1024 characters after entities parsing */
         caption?: string
         /** Mode for parsing entities in the audio caption. See formatting options for more details. */
         parse_mode?: string
         /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
         caption_entities?: types.MessageEntity[]
         /** Duration of the audio in seconds */
         duration?: number
         /** Performer */
         performer?: string
         /** Track name */
         title?: string
         /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
         thumbnail?: types.InputFile | string
         /** Sends the message silently. Users will receive a notification with no sound. */
         disable_notification?: boolean
         /** Protects the contents of the sent message from forwarding and saving */
         protect_content?: boolean
         /** If the message is a reply, ID of the original message */
         reply_to_message_id?: number
         /** Pass True if the message should be sent even if the specified replied-to message is not found */
         allow_sending_without_reply?: boolean
         /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
         reply_markup?:
            | types.InlineKeyboardMarkup
            | types.ReplyKeyboardMarkup
            | types.ReplyKeyboardRemove
            | types.ForceReply
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('sendAudio', { audio, chat_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to send general files. On success, the sent Message is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.
    */
   async sendDocument(
      /** File to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files » */
      document: types.InputFile | string,
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string,
      /** Extra options that could be provided */
      extra?: {
         /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
         message_thread_id?: number
         /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
         thumbnail?: types.InputFile | string
         /** Document caption (may also be used when resending documents by file_id), 0-1024 characters after entities parsing */
         caption?: string
         /** Mode for parsing entities in the document caption. See formatting options for more details. */
         parse_mode?: string
         /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
         caption_entities?: types.MessageEntity[]
         /** Disables automatic server-side content type detection for files uploaded using multipart/form-data */
         disable_content_type_detection?: boolean
         /** Sends the message silently. Users will receive a notification with no sound. */
         disable_notification?: boolean
         /** Protects the contents of the sent message from forwarding and saving */
         protect_content?: boolean
         /** If the message is a reply, ID of the original message */
         reply_to_message_id?: number
         /** Pass True if the message should be sent even if the specified replied-to message is not found */
         allow_sending_without_reply?: boolean
         /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
         reply_markup?:
            | types.InlineKeyboardMarkup
            | types.ReplyKeyboardMarkup
            | types.ReplyKeyboardRemove
            | types.ForceReply
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('sendDocument', { document, chat_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to send video files, Telegram clients support MPEG4 videos (other formats may be sent as Document). On success, the sent Message is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.
    */
   async sendVideo(
      /** Video to send. Pass a file_id as String to send a video that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data. More information on Sending Files » */
      video: types.InputFile | string,
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string,
      /** Extra options that could be provided */
      extra?: {
         /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
         message_thread_id?: number
         /** Duration of sent video in seconds */
         duration?: number
         /** Video width */
         width?: number
         /** Video height */
         height?: number
         /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
         thumbnail?: types.InputFile | string
         /** Video caption (may also be used when resending videos by file_id), 0-1024 characters after entities parsing */
         caption?: string
         /** Mode for parsing entities in the video caption. See formatting options for more details. */
         parse_mode?: string
         /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
         caption_entities?: types.MessageEntity[]
         /** Pass True if the video needs to be covered with a spoiler animation */
         has_spoiler?: boolean
         /** Pass True if the uploaded video is suitable for streaming */
         supports_streaming?: boolean
         /** Sends the message silently. Users will receive a notification with no sound. */
         disable_notification?: boolean
         /** Protects the contents of the sent message from forwarding and saving */
         protect_content?: boolean
         /** If the message is a reply, ID of the original message */
         reply_to_message_id?: number
         /** Pass True if the message should be sent even if the specified replied-to message is not found */
         allow_sending_without_reply?: boolean
         /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
         reply_markup?:
            | types.InlineKeyboardMarkup
            | types.ReplyKeyboardMarkup
            | types.ReplyKeyboardRemove
            | types.ForceReply
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('sendVideo', { video, chat_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success, the sent Message is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future.
    */
   async sendAnimation(
      /** Animation to send. Pass a file_id as String to send an animation that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an animation from the Internet, or upload a new animation using multipart/form-data. More information on Sending Files » */
      animation: types.InputFile | string,
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string,
      /** Extra options that could be provided */
      extra?: {
         /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
         message_thread_id?: number
         /** Duration of sent animation in seconds */
         duration?: number
         /** Animation width */
         width?: number
         /** Animation height */
         height?: number
         /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
         thumbnail?: types.InputFile | string
         /** Animation caption (may also be used when resending animation by file_id), 0-1024 characters after entities parsing */
         caption?: string
         /** Mode for parsing entities in the animation caption. See formatting options for more details. */
         parse_mode?: string
         /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
         caption_entities?: types.MessageEntity[]
         /** Pass True if the animation needs to be covered with a spoiler animation */
         has_spoiler?: boolean
         /** Sends the message silently. Users will receive a notification with no sound. */
         disable_notification?: boolean
         /** Protects the contents of the sent message from forwarding and saving */
         protect_content?: boolean
         /** If the message is a reply, ID of the original message */
         reply_to_message_id?: number
         /** Pass True if the message should be sent even if the specified replied-to message is not found */
         allow_sending_without_reply?: boolean
         /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
         reply_markup?:
            | types.InlineKeyboardMarkup
            | types.ReplyKeyboardMarkup
            | types.ReplyKeyboardRemove
            | types.ForceReply
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('sendAnimation', { animation, chat_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS (other formats may be sent as Audio or Document). On success, the sent Message is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.
    */
   async sendVoice(
      /** Audio file to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files » */
      voice: types.InputFile | string,
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string,
      /** Extra options that could be provided */
      extra?: {
         /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
         message_thread_id?: number
         /** Voice message caption, 0-1024 characters after entities parsing */
         caption?: string
         /** Mode for parsing entities in the voice message caption. See formatting options for more details. */
         parse_mode?: string
         /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
         caption_entities?: types.MessageEntity[]
         /** Duration of the voice message in seconds */
         duration?: number
         /** Sends the message silently. Users will receive a notification with no sound. */
         disable_notification?: boolean
         /** Protects the contents of the sent message from forwarding and saving */
         protect_content?: boolean
         /** If the message is a reply, ID of the original message */
         reply_to_message_id?: number
         /** Pass True if the message should be sent even if the specified replied-to message is not found */
         allow_sending_without_reply?: boolean
         /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
         reply_markup?:
            | types.InlineKeyboardMarkup
            | types.ReplyKeyboardMarkup
            | types.ReplyKeyboardRemove
            | types.ForceReply
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('sendVoice', { voice, chat_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * As of v.4.0, Telegram clients support rounded square MPEG4 videos of up to 1 minute long. Use this method to send video messages. On success, the sent Message is returned.
    */
   async sendVideoNote(
      /** Video note to send. Pass a file_id as String to send a video note that exists on the Telegram servers (recommended) or upload a new video using multipart/form-data. More information on Sending Files ». Sending video notes by a URL is currently unsupported */
      video_note: types.InputFile | string,
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string,
      /** Extra options that could be provided */
      extra?: {
         /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
         message_thread_id?: number
         /** Duration of sent video in seconds */
         duration?: number
         /** Video width and height, i.e. diameter of the video message */
         length?: number
         /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
         thumbnail?: types.InputFile | string
         /** Sends the message silently. Users will receive a notification with no sound. */
         disable_notification?: boolean
         /** Protects the contents of the sent message from forwarding and saving */
         protect_content?: boolean
         /** If the message is a reply, ID of the original message */
         reply_to_message_id?: number
         /** Pass True if the message should be sent even if the specified replied-to message is not found */
         allow_sending_without_reply?: boolean
         /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
         reply_markup?:
            | types.InlineKeyboardMarkup
            | types.ReplyKeyboardMarkup
            | types.ReplyKeyboardRemove
            | types.ForceReply
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('sendVideoNote', { video_note, chat_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of Messages that were sent is returned.
    */
   async sendMediaGroup(
      /** A JSON-serialized array describing messages to be sent, must include 2-10 items */
      media: types.InputMediaAudio[] | types.InputMediaDocument[] | types.InputMediaPhoto[] | types.InputMediaVideo[],
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string,
      /** Extra options that could be provided */
      extra?: {
         /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
         message_thread_id?: number
         /** Sends messages silently. Users will receive a notification with no sound. */
         disable_notification?: boolean
         /** Protects the contents of the sent messages from forwarding and saving */
         protect_content?: boolean
         /** If the messages are a reply, ID of the original message */
         reply_to_message_id?: number
         /** Pass True if the message should be sent even if the specified replied-to message is not found */
         allow_sending_without_reply?: boolean
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('sendMediaGroup', { media, chat_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to send point on the map. On success, the sent Message is returned.
    */
   async sendLocation(
      /** Longitude of the location */
      longitude: number,
      /** Latitude of the location */
      latitude: number,
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string,
      /** Extra options that could be provided */
      extra?: {
         /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
         message_thread_id?: number
         /** The radius of uncertainty for the location, measured in meters; 0-1500 */
         horizontal_accuracy?: number
         /** Period in seconds for which the location will be updated (see Live Locations, should be between 60 and 86400. */
         live_period?: number
         /** For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. */
         heading?: number
         /** For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. */
         proximity_alert_radius?: number
         /** Sends the message silently. Users will receive a notification with no sound. */
         disable_notification?: boolean
         /** Protects the contents of the sent message from forwarding and saving */
         protect_content?: boolean
         /** If the message is a reply, ID of the original message */
         reply_to_message_id?: number
         /** Pass True if the message should be sent even if the specified replied-to message is not found */
         allow_sending_without_reply?: boolean
         /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
         reply_markup?:
            | types.InlineKeyboardMarkup
            | types.ReplyKeyboardMarkup
            | types.ReplyKeyboardRemove
            | types.ForceReply
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('sendLocation', { longitude, latitude, chat_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to send information about a venue. On success, the sent Message is returned.
    */
   async sendVenue(
      /** Address of the venue */
      address: string,
      /** Name of the venue */
      title: string,
      /** Longitude of the venue */
      longitude: number,
      /** Latitude of the venue */
      latitude: number,
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string,
      /** Extra options that could be provided */
      extra?: {
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
         /** If the message is a reply, ID of the original message */
         reply_to_message_id?: number
         /** Pass True if the message should be sent even if the specified replied-to message is not found */
         allow_sending_without_reply?: boolean
         /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
         reply_markup?:
            | types.InlineKeyboardMarkup
            | types.ReplyKeyboardMarkup
            | types.ReplyKeyboardRemove
            | types.ForceReply
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('sendVenue', { address, title, longitude, latitude, chat_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to send phone contacts. On success, the sent Message is returned.
    */
   async sendContact(
      /** Contact's first name */
      first_name: string,
      /** Contact's phone number */
      phone_number: string,
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string,
      /** Extra options that could be provided */
      extra?: {
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
         /** If the message is a reply, ID of the original message */
         reply_to_message_id?: number
         /** Pass True if the message should be sent even if the specified replied-to message is not found */
         allow_sending_without_reply?: boolean
         /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
         reply_markup?:
            | types.InlineKeyboardMarkup
            | types.ReplyKeyboardMarkup
            | types.ReplyKeyboardRemove
            | types.ForceReply
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('sendContact', { first_name, phone_number, chat_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to send a native poll. On success, the sent Message is returned.
    */
   async sendPoll(
      /** A JSON-serialized list of answer options, 2-10 strings 1-100 characters each */
      options: string[],
      /** Poll question, 1-300 characters */
      question: string,
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string,
      /** Extra options that could be provided */
      extra?: {
         /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
         message_thread_id?: number
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
         /** A JSON-serialized list of special entities that appear in the poll explanation, which can be specified instead of parse_mode */
         explanation_entities?: types.MessageEntity[]
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
         /** If the message is a reply, ID of the original message */
         reply_to_message_id?: number
         /** Pass True if the message should be sent even if the specified replied-to message is not found */
         allow_sending_without_reply?: boolean
         /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
         reply_markup?:
            | types.InlineKeyboardMarkup
            | types.ReplyKeyboardMarkup
            | types.ReplyKeyboardRemove
            | types.ForceReply
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('sendPoll', { options, question, chat_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to send an animated emoji that will display a random value. On success, the sent Message is returned.
    */
   async sendDice(
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string,
      /** Extra options that could be provided */
      extra?: {
         /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
         message_thread_id?: number
         /** Emoji on which the dice throw animation is based. Currently, must be one of “”, “”, “”, “”, “”, or “”. Dice can have values 1-6 for “”, “” and “”, values 1-5 for “” and “”, and values 1-64 for “”. Defaults to “” */
         emoji?: string
         /** Sends the message silently. Users will receive a notification with no sound. */
         disable_notification?: boolean
         /** Protects the contents of the sent message from forwarding */
         protect_content?: boolean
         /** If the message is a reply, ID of the original message */
         reply_to_message_id?: number
         /** Pass True if the message should be sent even if the specified replied-to message is not found */
         allow_sending_without_reply?: boolean
         /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
         reply_markup?:
            | types.InlineKeyboardMarkup
            | types.ReplyKeyboardMarkup
            | types.ReplyKeyboardRemove
            | types.ForceReply
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('sendDice', { chat_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method when you need to tell the user that something is happening on the bot's side. The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status). Returns True on success.We only recommend using this method when a response from the bot will take a noticeable amount of time to arrive.
    */
   async sendChatAction(
      /** Type of action to broadcast. Choose one, depending on what the user is about to receive: typing for text messages, upload_photo for photos, record_video or upload_video for videos, record_voice or upload_voice for voice notes, upload_document for general files, choose_sticker for stickers, find_location for location data, record_video_note or upload_video_note for video notes. */
      action: string,
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string,
      /** Extra options that could be provided */
      extra?: {
         /** Unique identifier for the target message thread; supergroups only */
         message_thread_id?: number
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('sendChatAction', { action, chat_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to get a list of profile pictures for a user. Returns a UserProfilePhotos object.
    */
   async getUserProfilePhotos(
      /** Unique identifier of the target user */
      user_id: number,
      /** Extra options that could be provided */
      extra?: {
         /** Sequential number of the first photo to be returned. By default, all photos are returned. */
         offset?: number
         /** Limits the number of photos to be retrieved. Values between 1-100 are accepted. Defaults to 100. */
         limit?: number
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('getUserProfilePhotos', { user_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to get basic information about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a File object is returned. The file can then be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>, where <file_path> is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile again.
    */
   async getFile(
      /** File identifier to get information about */
      file_id: string,
   ): Promise<any> {
      try {
         return await this.makeRequest('getFile', { file_id })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to ban a user in a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the chat on their own using invite links, etc., unless unbanned first. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
    */
   async banChatMember(
      /** Unique identifier of the target user */
      user_id: number,
      /** Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername) */
      chat_id: number | string,
      /** Extra options that could be provided */
      extra?: {
         /** Date when the user will be unbanned, unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever. Applied for supergroups and channels only. */
         until_date?: number
         /** Pass True to delete all messages from the chat for the user that is being removed. If False, the user will be able to see messages in the group that were sent before the user was removed. Always True for supergroups and channels. */
         revoke_messages?: boolean
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('banChatMember', { user_id, chat_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to unban a previously banned user in a supergroup or channel. The user will not return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be removed from the chat. If you don't want this, use the parameter only_if_banned. Returns True on success.
    */
   async unbanChatMember(
      /** Unique identifier of the target user */
      user_id: number,
      /** Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername) */
      chat_id: number | string,
      /** Extra options that could be provided */
      extra?: {
         /** Do nothing if the user is not banned */
         only_if_banned?: boolean
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('unbanChatMember', { user_id, chat_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate administrator rights. Pass True for all permissions to lift restrictions from a user. Returns True on success.
    */
   async restrictChatMember(
      /** A JSON-serialized object for new user permissions */
      permissions: types.ChatPermissions,
      /** Unique identifier of the target user */
      user_id: number,
      /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      chat_id: number | string,
      /** Extra options that could be provided */
      extra?: {
         /** Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission. */
         use_independent_chat_permissions?: boolean
         /** Date when restrictions will be lifted for the user, unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever */
         until_date?: number
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('restrictChatMember', { permissions, user_id, chat_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Pass False for all boolean parameters to demote a user. Returns True on success.
    */
   async promoteChatMember(
      /** Unique identifier of the target user */
      user_id: number,
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string,
      /** Extra options that could be provided */
      extra?: {
         /** Pass True if the administrator's presence in the chat is hidden */
         is_anonymous?: boolean
         /** Pass True if the administrator can access the chat event log, chat statistics, message statistics in channels, see channel members, see anonymous administrators in supergroups and ignore slow mode. Implied by any other administrator privilege */
         can_manage_chat?: boolean
         /** Pass True if the administrator can create channel posts, channels only */
         can_post_messages?: boolean
         /** Pass True if the administrator can edit messages of other users and can pin messages, channels only */
         can_edit_messages?: boolean
         /** Pass True if the administrator can delete messages of other users */
         can_delete_messages?: boolean
         /** Pass True if the administrator can manage video chats */
         can_manage_video_chats?: boolean
         /** Pass True if the administrator can restrict, ban or unban chat members */
         can_restrict_members?: boolean
         /** Pass True if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by him) */
         can_promote_members?: boolean
         /** Pass True if the administrator can change chat title, photo and other settings */
         can_change_info?: boolean
         /** Pass True if the administrator can invite new users to the chat */
         can_invite_users?: boolean
         /** Pass True if the administrator can pin messages, supergroups only */
         can_pin_messages?: boolean
         /** Pass True if the user is allowed to create, rename, close, and reopen forum topics, supergroups only */
         can_manage_topics?: boolean
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('promoteChatMember', { user_id, chat_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns True on success.
    */
   async setChatAdministratorCustomTitle(
      /** New custom title for the administrator; 0-16 characters, emoji are not allowed */
      custom_title: string,
      /** Unique identifier of the target user */
      user_id: number,
      /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      chat_id: number | string,
   ): Promise<any> {
      try {
         return await this.makeRequest('setChatAdministratorCustomTitle', { custom_title, user_id, chat_id })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to ban a channel chat in a supergroup or a channel. Until the chat is unbanned, the owner of the banned chat won't be able to send messages on behalf of any of their channels. The bot must be an administrator in the supergroup or channel for this to work and must have the appropriate administrator rights. Returns True on success.
    */
   async banChatSenderChat(
      /** Unique identifier of the target sender chat */
      sender_chat_id: number,
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string,
   ): Promise<any> {
      try {
         return await this.makeRequest('banChatSenderChat', { sender_chat_id, chat_id })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to unban a previously banned channel chat in a supergroup or channel. The bot must be an administrator for this to work and must have the appropriate administrator rights. Returns True on success.
    */
   async unbanChatSenderChat(
      /** Unique identifier of the target sender chat */
      sender_chat_id: number,
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string,
   ): Promise<any> {
      try {
         return await this.makeRequest('unbanChatSenderChat', { sender_chat_id, chat_id })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the can_restrict_members administrator rights. Returns True on success.
    */
   async setChatPermissions(
      /** A JSON-serialized object for new default chat permissions */
      permissions: types.ChatPermissions,
      /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      chat_id: number | string,
      /** Extra options that could be provided */
      extra?: {
         /** Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission. */
         use_independent_chat_permissions?: boolean
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('setChatPermissions', { permissions, chat_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to generate a new primary invite link for a chat; any previously generated primary link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the new invite link as String on success.
    */
   async exportChatInviteLink(
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string,
   ): Promise<any> {
      try {
         return await this.makeRequest('exportChatInviteLink', { chat_id })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to create an additional invite link for a chat. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. The link can be revoked using the method revokeChatInviteLink. Returns the new invite link as ChatInviteLink object.
    */
   async createChatInviteLink(
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string,
      /** Extra options that could be provided */
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
   ): Promise<any> {
      try {
         return await this.makeRequest('createChatInviteLink', { chat_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the edited invite link as a ChatInviteLink object.
    */
   async editChatInviteLink(
      /** The invite link to edit */
      invite_link: string,
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string,
      /** Extra options that could be provided */
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
   ): Promise<any> {
      try {
         return await this.makeRequest('editChatInviteLink', { invite_link, chat_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new link is automatically generated. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the revoked invite link as ChatInviteLink object.
    */
   async revokeChatInviteLink(
      /** The invite link to revoke */
      invite_link: string,
      /** Unique identifier of the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string,
   ): Promise<any> {
      try {
         return await this.makeRequest('revokeChatInviteLink', { invite_link, chat_id })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to approve a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success.
    */
   async approveChatJoinRequest(
      /** Unique identifier of the target user */
      user_id: number,
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string,
   ): Promise<any> {
      try {
         return await this.makeRequest('approveChatJoinRequest', { user_id, chat_id })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to decline a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success.
    */
   async declineChatJoinRequest(
      /** Unique identifier of the target user */
      user_id: number,
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string,
   ): Promise<any> {
      try {
         return await this.makeRequest('declineChatJoinRequest', { user_id, chat_id })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
    */
   async setChatPhoto(
      /** New chat photo, uploaded using multipart/form-data */
      photo: types.InputFile,
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string,
   ): Promise<any> {
      try {
         return await this.makeRequest('setChatPhoto', { photo, chat_id })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
    */
   async deleteChatPhoto(
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string,
   ): Promise<any> {
      try {
         return await this.makeRequest('deleteChatPhoto', { chat_id })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
    */
   async setChatTitle(
      /** New chat title, 1-128 characters */
      title: string,
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string,
   ): Promise<any> {
      try {
         return await this.makeRequest('setChatTitle', { title, chat_id })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
    */
   async setChatDescription(
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string,
      /** Extra options that could be provided */
      extra?: {
         /** New chat description, 0-255 characters */
         description?: string
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('setChatDescription', { chat_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to add a message to the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success.
    */
   async pinChatMessage(
      /** Identifier of a message to pin */
      message_id: number,
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string,
      /** Extra options that could be provided */
      extra?: {
         /** Pass True if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels and private chats. */
         disable_notification?: boolean
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('pinChatMessage', { message_id, chat_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to remove a message from the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success.
    */
   async unpinChatMessage(
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string,
      /** Extra options that could be provided */
      extra?: {
         /** Identifier of a message to unpin. If not specified, the most recent pinned message (by sending date) will be unpinned. */
         message_id?: number
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('unpinChatMessage', { chat_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to clear the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success.
    */
   async unpinAllChatMessages(
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string,
   ): Promise<any> {
      try {
         return await this.makeRequest('unpinAllChatMessages', { chat_id })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method for your bot to leave a group, supergroup or channel. Returns True on success.
    */
   async leaveChat(
      /** Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) */
      chat_id: number | string,
   ): Promise<any> {
      try {
         return await this.makeRequest('leaveChat', { chat_id })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to get up to date information about the chat (current name of the user for one-on-one conversations, current username of a user, group or channel, etc.). Returns a Chat object on success.
    */
   async getChat(
      /** Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) */
      chat_id: number | string,
   ): Promise<any> {
      try {
         return await this.makeRequest('getChat', { chat_id })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to get a list of administrators in a chat, which aren't bots. Returns an Array of ChatMember objects.
    */
   async getChatAdministrators(
      /** Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) */
      chat_id: number | string,
   ): Promise<any> {
      try {
         return await this.makeRequest('getChatAdministrators', { chat_id })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to get the number of members in a chat. Returns Int on success.
    */
   async getChatMemberCount(
      /** Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) */
      chat_id: number | string,
   ): Promise<any> {
      try {
         return await this.makeRequest('getChatMemberCount', { chat_id })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to get information about a member of a chat. The method is only guaranteed to work for other users if the bot is an administrator in the chat. Returns a ChatMember object on success.
    */
   async getChatMember(
      /** Unique identifier of the target user */
      user_id: number,
      /** Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) */
      chat_id: number | string,
   ): Promise<any> {
      try {
         return await this.makeRequest('getChatMember', { user_id, chat_id })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.
    */
   async setChatStickerSet(
      /** Name of the sticker set to be set as the group sticker set */
      sticker_set_name: string,
      /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      chat_id: number | string,
   ): Promise<any> {
      try {
         return await this.makeRequest('setChatStickerSet', { sticker_set_name, chat_id })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.
    */
   async deleteChatStickerSet(
      /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      chat_id: number | string,
   ): Promise<any> {
      try {
         return await this.makeRequest('deleteChatStickerSet', { chat_id })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to get custom emoji stickers, which can be used as a forum topic icon by any user. Requires no parameters. Returns an Array of Sticker objects.
    */
   async getForumTopicIconStickers(): Promise<any> {
      try {
         return await this.makeRequest('getForumTopicIconStickers', undefined, undefined)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to create a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns information about the created topic as a ForumTopic object.
    */
   async createForumTopic(
      /** Topic name, 1-128 characters */
      name: string,
      /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      chat_id: number | string,
      /** Extra options that could be provided */
      extra?: {
         /** Color of the topic icon in RGB format. Currently, must be one of 7322096 (0x6FB9F0), 16766590 (0xFFD67E), 13338331 (0xCB86DB), 9367192 (0x8EEE98), 16749490 (0xFF93B2), or 16478047 (0xFB6F5F) */
         icon_color?: number
         /** Unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers. */
         icon_custom_emoji_id?: string
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('createForumTopic', { name, chat_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to edit name and icon of a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.
    */
   async editForumTopic(
      /** Unique identifier for the target message thread of the forum topic */
      message_thread_id: number,
      /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      chat_id: number | string,
      /** Extra options that could be provided */
      extra?: {
         /** New topic name, 0-128 characters. If not specified or empty, the current name of the topic will be kept */
         name?: string
         /** New unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers. Pass an empty string to remove the icon. If not specified, the current icon will be kept */
         icon_custom_emoji_id?: string
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('editForumTopic', { message_thread_id, chat_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to close an open topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.
    */
   async closeForumTopic(
      /** Unique identifier for the target message thread of the forum topic */
      message_thread_id: number,
      /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      chat_id: number | string,
   ): Promise<any> {
      try {
         return await this.makeRequest('closeForumTopic', { message_thread_id, chat_id })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to reopen a closed topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.
    */
   async reopenForumTopic(
      /** Unique identifier for the target message thread of the forum topic */
      message_thread_id: number,
      /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      chat_id: number | string,
   ): Promise<any> {
      try {
         return await this.makeRequest('reopenForumTopic', { message_thread_id, chat_id })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to delete a forum topic along with all its messages in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_delete_messages administrator rights. Returns True on success.
    */
   async deleteForumTopic(
      /** Unique identifier for the target message thread of the forum topic */
      message_thread_id: number,
      /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      chat_id: number | string,
   ): Promise<any> {
      try {
         return await this.makeRequest('deleteForumTopic', { message_thread_id, chat_id })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to clear the list of pinned messages in a forum topic. The bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success.
    */
   async unpinAllForumTopicMessages(
      /** Unique identifier for the target message thread of the forum topic */
      message_thread_id: number,
      /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      chat_id: number | string,
   ): Promise<any> {
      try {
         return await this.makeRequest('unpinAllForumTopicMessages', { message_thread_id, chat_id })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to edit the name of the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have can_manage_topics administrator rights. Returns True on success.
    */
   async editGeneralForumTopic(
      /** New topic name, 1-128 characters */
      name: string,
      /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      chat_id: number | string,
   ): Promise<any> {
      try {
         return await this.makeRequest('editGeneralForumTopic', { name, chat_id })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to close an open 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.
    */
   async closeGeneralForumTopic(
      /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      chat_id: number | string,
   ): Promise<any> {
      try {
         return await this.makeRequest('closeGeneralForumTopic', { chat_id })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to reopen a closed 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically unhidden if it was hidden. Returns True on success.
    */
   async reopenGeneralForumTopic(
      /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      chat_id: number | string,
   ): Promise<any> {
      try {
         return await this.makeRequest('reopenGeneralForumTopic', { chat_id })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to hide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically closed if it was open. Returns True on success.
    */
   async hideGeneralForumTopic(
      /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      chat_id: number | string,
   ): Promise<any> {
      try {
         return await this.makeRequest('hideGeneralForumTopic', { chat_id })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to unhide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.
    */
   async unhideGeneralForumTopic(
      /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      chat_id: number | string,
   ): Promise<any> {
      try {
         return await this.makeRequest('unhideGeneralForumTopic', { chat_id })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to send answers to callback queries sent from inline keyboards. The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, True is returned.
    */
   async answerCallbackQuery(
      /** Unique identifier for the query to be answered */
      callback_query_id: string,
      /** Extra options that could be provided */
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
   ): Promise<any> {
      try {
         return await this.makeRequest('answerCallbackQuery', { callback_query_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to change the list of the bot's commands. See this manual for more details about bot commands. Returns True on success.
    */
   async setMyCommands(
      /** A JSON-serialized list of bot commands to be set as the list of the bot's commands. At most 100 commands can be specified. */
      commands: types.BotCommand[],
      /** Extra options that could be provided */
      extra?: {
         /** A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault. */
         scope?: types.BotCommandScope
         /** A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands */
         language_code?: string
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('setMyCommands', { commands }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to delete the list of the bot's commands for the given scope and user language. After deletion, higher level commands will be shown to affected users. Returns True on success.
    */
   async deleteMyCommands(
      /** Extra options that could be provided */
      extra?: {
         /** A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault. */
         scope?: types.BotCommandScope
         /** A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands */
         language_code?: string
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('deleteMyCommands', extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to get the current list of the bot's commands for the given scope and user language. Returns an Array of BotCommand objects. If commands aren't set, an empty list is returned.
    */
   async getMyCommands(
      /** Extra options that could be provided */
      extra?: {
         /** A JSON-serialized object, describing scope of users. Defaults to BotCommandScopeDefault. */
         scope?: types.BotCommandScope
         /** A two-letter ISO 639-1 language code or an empty string */
         language_code?: string
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('getMyCommands', extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to change the bot's name. Returns True on success.
    */
   async setMyName(
      /** Extra options that could be provided */
      extra?: {
         /** New bot name; 0-64 characters. Pass an empty string to remove the dedicated name for the given language. */
         name?: string
         /** A two-letter ISO 639-1 language code. If empty, the name will be shown to all users for whose language there is no dedicated name. */
         language_code?: string
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('setMyName', extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to get the current bot name for the given user language. Returns BotName on success.
    */
   async getMyName(
      /** Extra options that could be provided */
      extra?: {
         /** A two-letter ISO 639-1 language code or an empty string */
         language_code?: string
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('getMyName', extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to change the bot's description, which is shown in the chat with the bot if the chat is empty. Returns True on success.
    */
   async setMyDescription(
      /** Extra options that could be provided */
      extra?: {
         /** New bot description; 0-512 characters. Pass an empty string to remove the dedicated description for the given language. */
         description?: string
         /** A two-letter ISO 639-1 language code. If empty, the description will be applied to all users for whose language there is no dedicated description. */
         language_code?: string
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('setMyDescription', extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to get the current bot description for the given user language. Returns BotDescription on success.
    */
   async getMyDescription(
      /** Extra options that could be provided */
      extra?: {
         /** A two-letter ISO 639-1 language code or an empty string */
         language_code?: string
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('getMyDescription', extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to change the bot's short description, which is shown on the bot's profile page and is sent together with the link when users share the bot. Returns True on success.
    */
   async setMyShortDescription(
      /** Extra options that could be provided */
      extra?: {
         /** New short description for the bot; 0-120 characters. Pass an empty string to remove the dedicated short description for the given language. */
         short_description?: string
         /** A two-letter ISO 639-1 language code. If empty, the short description will be applied to all users for whose language there is no dedicated short description. */
         language_code?: string
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('setMyShortDescription', extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to get the current bot short description for the given user language. Returns BotShortDescription on success.
    */
   async getMyShortDescription(
      /** Extra options that could be provided */
      extra?: {
         /** A two-letter ISO 639-1 language code or an empty string */
         language_code?: string
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('getMyShortDescription', extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to change the bot's menu button in a private chat, or the default menu button. Returns True on success.
    */
   async setChatMenuButton(
      /** Extra options that could be provided */
      extra?: {
         /** Unique identifier for the target private chat. If not specified, default bot's menu button will be changed */
         chat_id?: number
         /** A JSON-serialized object for the bot's new menu button. Defaults to MenuButtonDefault */
         menu_button?: types.MenuButton
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('setChatMenuButton', extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to get the current value of the bot's menu button in a private chat, or the default menu button. Returns MenuButton on success.
    */
   async getChatMenuButton(
      /** Extra options that could be provided */
      extra?: {
         /** Unique identifier for the target private chat. If not specified, default bot's menu button will be returned */
         chat_id?: number
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('getChatMenuButton', extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to change the default administrator rights requested by the bot when it's added as an administrator to groups or channels. These rights will be suggested to users, but they are free to modify the list before adding the bot. Returns True on success.
    */
   async setMyDefaultAdministratorRights(
      /** Extra options that could be provided */
      extra?: {
         /** A JSON-serialized object describing new default administrator rights. If not specified, the default administrator rights will be cleared. */
         rights?: types.ChatAdministratorRights
         /** Pass True to change the default administrator rights of the bot in channels. Otherwise, the default administrator rights of the bot for groups and supergroups will be changed. */
         for_channels?: boolean
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('setMyDefaultAdministratorRights', extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to get the current default administrator rights of the bot. Returns ChatAdministratorRights on success.
    */
   async getMyDefaultAdministratorRights(
      /** Extra options that could be provided */
      extra?: {
         /** Pass True to get default administrator rights of the bot in channels. Otherwise, default administrator rights of the bot for groups and supergroups will be returned. */
         for_channels?: boolean
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('getMyDefaultAdministratorRights', extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to edit text and game messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
    */
   async editMessageText(
      /** New text of the message, 1-4096 characters after entities parsing */
      text: string,
      /** Extra options that could be provided */
      extra?: {
         /** Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
         chat_id?: number | string
         /** Required if inline_message_id is not specified. Identifier of the message to edit */
         message_id?: number
         /** Required if chat_id and message_id are not specified. Identifier of the inline message */
         inline_message_id?: string
         /** Mode for parsing entities in the message text. See formatting options for more details. */
         parse_mode?: string
         /** A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode */
         entities?: types.MessageEntity[]
         /** Disables link previews for links in this message */
         disable_web_page_preview?: boolean
         /** A JSON-serialized object for an inline keyboard. */
         reply_markup?: types.InlineKeyboardMarkup
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('editMessageText', { text }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
    */
   async editMessageCaption(
      /** Extra options that could be provided */
      extra?: {
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
         caption_entities?: types.MessageEntity[]
         /** A JSON-serialized object for an inline keyboard. */
         reply_markup?: types.InlineKeyboardMarkup
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('editMessageCaption', extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to edit animation, audio, document, photo, or video messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can't be uploaded; use a previously uploaded file via its file_id or specify a URL. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
    */
   async editMessageMedia(
      /** A JSON-serialized object for a new media content of the message */
      media: types.InputMedia,
      /** Extra options that could be provided */
      extra?: {
         /** Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
         chat_id?: number | string
         /** Required if inline_message_id is not specified. Identifier of the message to edit */
         message_id?: number
         /** Required if chat_id and message_id are not specified. Identifier of the inline message */
         inline_message_id?: string
         /** A JSON-serialized object for a new inline keyboard. */
         reply_markup?: types.InlineKeyboardMarkup
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('editMessageMedia', { media }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to edit live location messages. A location can be edited until its live_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
    */
   async editMessageLiveLocation(
      /** Longitude of new location */
      longitude: number,
      /** Latitude of new location */
      latitude: number,
      /** Extra options that could be provided */
      extra?: {
         /** Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
         chat_id?: number | string
         /** Required if inline_message_id is not specified. Identifier of the message to edit */
         message_id?: number
         /** Required if chat_id and message_id are not specified. Identifier of the inline message */
         inline_message_id?: string
         /** The radius of uncertainty for the location, measured in meters; 0-1500 */
         horizontal_accuracy?: number
         /** Direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. */
         heading?: number
         /** The maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. */
         proximity_alert_radius?: number
         /** A JSON-serialized object for a new inline keyboard. */
         reply_markup?: types.InlineKeyboardMarkup
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('editMessageLiveLocation', { longitude, latitude }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to stop updating a live location message before live_period expires. On success, if the message is not an inline message, the edited Message is returned, otherwise True is returned.
    */
   async stopMessageLiveLocation(
      /** Extra options that could be provided */
      extra?: {
         /** Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
         chat_id?: number | string
         /** Required if inline_message_id is not specified. Identifier of the message with live location to stop */
         message_id?: number
         /** Required if chat_id and message_id are not specified. Identifier of the inline message */
         inline_message_id?: string
         /** A JSON-serialized object for a new inline keyboard. */
         reply_markup?: types.InlineKeyboardMarkup
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('stopMessageLiveLocation', extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
    */
   async editMessageReplyMarkup(
      /** Extra options that could be provided */
      extra?: {
         /** Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
         chat_id?: number | string
         /** Required if inline_message_id is not specified. Identifier of the message to edit */
         message_id?: number
         /** Required if chat_id and message_id are not specified. Identifier of the inline message */
         inline_message_id?: string
         /** A JSON-serialized object for an inline keyboard. */
         reply_markup?: types.InlineKeyboardMarkup
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('editMessageReplyMarkup', extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to stop a poll which was sent by the bot. On success, the stopped Poll is returned.
    */
   async stopPoll(
      /** Identifier of the original message with the poll */
      message_id: number,
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string,
      /** Extra options that could be provided */
      extra?: {
         /** A JSON-serialized object for a new message inline keyboard. */
         reply_markup?: types.InlineKeyboardMarkup
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('stopPoll', { message_id, chat_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to delete a message, including service messages, with the following limitations:- A message can only be deleted if it was sent less than 48 hours ago.- Service messages about a supergroup, channel, or forum topic creation can't be deleted.- A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.- Bots can delete outgoing messages in private chats, groups, and supergroups.- Bots can delete incoming messages in private chats.- Bots granted can_post_messages permissions can delete outgoing messages in channels.- If the bot is an administrator of a group, it can delete any message there.- If the bot has can_delete_messages permission in a supergroup or a channel, it can delete any message there.Returns True on success.
    */
   async deleteMessage(
      /** Identifier of the message to delete */
      message_id: number,
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string,
   ): Promise<any> {
      try {
         return await this.makeRequest('deleteMessage', { message_id, chat_id })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to send static .WEBP, animated .TGS, or video .WEBM stickers. On success, the sent Message is returned.
    */
   async sendSticker(
      /** Sticker to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a .WEBP sticker from the Internet, or upload a new .WEBP or .TGS sticker using multipart/form-data. More information on Sending Files ». Video stickers can only be sent by a file_id. Animated stickers can't be sent via an HTTP URL. */
      sticker: types.InputFile | string,
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string,
      /** Extra options that could be provided */
      extra?: {
         /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
         message_thread_id?: number
         /** Emoji associated with the sticker; only for just uploaded stickers */
         emoji?: string
         /** Sends the message silently. Users will receive a notification with no sound. */
         disable_notification?: boolean
         /** Protects the contents of the sent message from forwarding and saving */
         protect_content?: boolean
         /** If the message is a reply, ID of the original message */
         reply_to_message_id?: number
         /** Pass True if the message should be sent even if the specified replied-to message is not found */
         allow_sending_without_reply?: boolean
         /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
         reply_markup?:
            | types.InlineKeyboardMarkup
            | types.ReplyKeyboardMarkup
            | types.ReplyKeyboardRemove
            | types.ForceReply
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('sendSticker', { sticker, chat_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to get a sticker set. On success, a StickerSet object is returned.
    */
   async getStickerSet(
      /** Name of the sticker set */
      name: string,
   ): Promise<any> {
      try {
         return await this.makeRequest('getStickerSet', { name })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to get information about custom emoji stickers by their identifiers. Returns an Array of Sticker objects.
    */
   async getCustomEmojiStickers(
      /** List of custom emoji identifiers. At most 200 custom emoji identifiers can be specified. */
      custom_emoji_ids: string[],
   ): Promise<any> {
      try {
         return await this.makeRequest('getCustomEmojiStickers', { custom_emoji_ids })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to upload a file with a sticker for later use in the createNewStickerSet and addStickerToSet methods (the file can be used multiple times). Returns the uploaded File on success.
    */
   async uploadStickerFile(
      /** Format of the sticker, must be one of “static”, “animated”, “video” */
      sticker_format: string,
      /** A file with the sticker in .WEBP, .PNG, .TGS, or .WEBM format. See https://core.telegram.org/stickers for technical requirements. More information on Sending Files » */
      sticker: types.InputFile,
      /** User identifier of sticker file owner */
      user_id: number,
   ): Promise<any> {
      try {
         return await this.makeRequest('uploadStickerFile', { sticker_format, sticker, user_id })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. Returns True on success.
    */
   async createNewStickerSet(
      /** Format of stickers in the set, must be one of “static”, “animated”, “video” */
      sticker_format: string,
      /** A JSON-serialized list of 1-50 initial stickers to be added to the sticker set */
      stickers: types.InputSticker[],
      /** Sticker set title, 1-64 characters */
      title: string,
      /** Short name of sticker set, to be used in t.me/addstickers/ URLs (e.g., animals). Can contain only English letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in "_by_<bot_username>". <bot_username> is case insensitive. 1-64 characters. */
      name: string,
      /** User identifier of created sticker set owner */
      user_id: number,
      /** Extra options that could be provided */
      extra?: {
         /** Type of stickers in the set, pass “regular”, “mask”, or “custom_emoji”. By default, a regular sticker set is created. */
         sticker_type?: string
         /** Pass True if stickers in the sticker set must be repainted to the color of text when used in messages, the accent color if used as emoji status, white on chat photos, or another appropriate color based on context; for custom emoji sticker sets only */
         needs_repainting?: boolean
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('createNewStickerSet', { sticker_format, stickers, title, name, user_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to add a new sticker to a set created by the bot. The format of the added sticker must match the format of the other stickers in the set. Emoji sticker sets can have up to 200 stickers. Animated and video sticker sets can have up to 50 stickers. Static sticker sets can have up to 120 stickers. Returns True on success.
    */
   async addStickerToSet(
      /** A JSON-serialized object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set isn't changed. */
      sticker: types.InputSticker,
      /** Sticker set name */
      name: string,
      /** User identifier of sticker set owner */
      user_id: number,
   ): Promise<any> {
      try {
         return await this.makeRequest('addStickerToSet', { sticker, name, user_id })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to move a sticker in a set created by the bot to a specific position. Returns True on success.
    */
   async setStickerPositionInSet(
      /** New sticker position in the set, zero-based */
      position: number,
      /** File identifier of the sticker */
      sticker: string,
   ): Promise<any> {
      try {
         return await this.makeRequest('setStickerPositionInSet', { position, sticker })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to delete a sticker from a set created by the bot. Returns True on success.
    */
   async deleteStickerFromSet(
      /** File identifier of the sticker */
      sticker: string,
   ): Promise<any> {
      try {
         return await this.makeRequest('deleteStickerFromSet', { sticker })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to change the list of emoji assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.
    */
   async setStickerEmojiList(
      /** A JSON-serialized list of 1-20 emoji associated with the sticker */
      emoji_list: string[],
      /** File identifier of the sticker */
      sticker: string,
   ): Promise<any> {
      try {
         return await this.makeRequest('setStickerEmojiList', { emoji_list, sticker })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to change search keywords assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.
    */
   async setStickerKeywords(
      /** File identifier of the sticker */
      sticker: string,
      /** Extra options that could be provided */
      extra?: {
         /** A JSON-serialized list of 0-20 search keywords for the sticker with total length of up to 64 characters */
         keywords?: string[]
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('setStickerKeywords', { sticker }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to change the mask position of a mask sticker. The sticker must belong to a sticker set that was created by the bot. Returns True on success.
    */
   async setStickerMaskPosition(
      /** File identifier of the sticker */
      sticker: string,
      /** Extra options that could be provided */
      extra?: {
         /** A JSON-serialized object with the position where the mask should be placed on faces. Omit the parameter to remove the mask position. */
         mask_position?: types.MaskPosition
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('setStickerMaskPosition', { sticker }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to set the title of a created sticker set. Returns True on success.
    */
   async setStickerSetTitle(
      /** Sticker set title, 1-64 characters */
      title: string,
      /** Sticker set name */
      name: string,
   ): Promise<any> {
      try {
         return await this.makeRequest('setStickerSetTitle', { title, name })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to set the thumbnail of a regular or mask sticker set. The format of the thumbnail file must match the format of the stickers in the set. Returns True on success.
    */
   async setStickerSetThumbnail(
      /** User identifier of the sticker set owner */
      user_id: number,
      /** Sticker set name */
      name: string,
      /** Extra options that could be provided */
      extra?: {
         /** A .WEBP or .PNG image with the thumbnail, must be up to 128 kilobytes in size and have a width and height of exactly 100px, or a .TGS animation with a thumbnail up to 32 kilobytes in size (see https://core.telegram.org/stickers#animated-sticker-requirements for animated sticker technical requirements), or a WEBM video with the thumbnail up to 32 kilobytes in size; see https://core.telegram.org/stickers#video-sticker-requirements for video sticker technical requirements. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files ». Animated and video sticker set thumbnails can't be uploaded via HTTP URL. If omitted, then the thumbnail is dropped and the first sticker is used as the thumbnail. */
         thumbnail?: types.InputFile | string
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('setStickerSetThumbnail', { user_id, name }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to set the thumbnail of a custom emoji sticker set. Returns True on success.
    */
   async setCustomEmojiStickerSetThumbnail(
      /** Sticker set name */
      name: string,
      /** Extra options that could be provided */
      extra?: {
         /** Custom emoji identifier of a sticker from the sticker set; pass an empty string to drop the thumbnail and use the first sticker as the thumbnail. */
         custom_emoji_id?: string
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('setCustomEmojiStickerSetThumbnail', { name }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to delete a sticker set that was created by the bot. Returns True on success.
    */
   async deleteStickerSet(
      /** Sticker set name */
      name: string,
   ): Promise<any> {
      try {
         return await this.makeRequest('deleteStickerSet', { name })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to send answers to an inline query. On success, True is returned.No more than 50 results per query are allowed.
    */
   async answerInlineQuery(
      /** A JSON-serialized array of results for the inline query */
      results: types.InlineQueryResult[],
      /** Unique identifier for the answered query */
      inline_query_id: string,
      /** Extra options that could be provided */
      extra?: {
         /** The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300. */
         cache_time?: number
         /** Pass True if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query. */
         is_personal?: boolean
         /** Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes. */
         next_offset?: string
         /** A JSON-serialized object describing a button to be shown above inline query results */
         button?: types.InlineQueryResultsButton
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('answerInlineQuery', { results, inline_query_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to set the result of an interaction with a Web App and send a corresponding message on behalf of the user to the chat from which the query originated. On success, a SentWebAppMessage object is returned.
    */
   async answerWebAppQuery(
      /** A JSON-serialized object describing the message to be sent */
      result: types.InlineQueryResult,
      /** Unique identifier for the query to be answered */
      web_app_query_id: string,
   ): Promise<any> {
      try {
         return await this.makeRequest('answerWebAppQuery', { result, web_app_query_id })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to send invoices. On success, the sent Message is returned.
    */
   async sendInvoice(
      /** Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.) */
      prices: types.LabeledPrice[],
      /** Three-letter ISO 4217 currency code, see more on currencies */
      currency: string,
      /** Payment provider token, obtained via @BotFather */
      provider_token: string,
      /** Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes. */
      payload: string,
      /** Product description, 1-255 characters */
      description: string,
      /** Product name, 1-32 characters */
      title: string,
      /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      chat_id: number | string,
      /** Extra options that could be provided */
      extra?: {
         /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
         message_thread_id?: number
         /** The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0 */
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
         /** Pass True if you require the user's full name to complete the order */
         need_name?: boolean
         /** Pass True if you require the user's phone number to complete the order */
         need_phone_number?: boolean
         /** Pass True if you require the user's email address to complete the order */
         need_email?: boolean
         /** Pass True if you require the user's shipping address to complete the order */
         need_shipping_address?: boolean
         /** Pass True if the user's phone number should be sent to provider */
         send_phone_number_to_provider?: boolean
         /** Pass True if the user's email address should be sent to provider */
         send_email_to_provider?: boolean
         /** Pass True if the final price depends on the shipping method */
         is_flexible?: boolean
         /** Sends the message silently. Users will receive a notification with no sound. */
         disable_notification?: boolean
         /** Protects the contents of the sent message from forwarding and saving */
         protect_content?: boolean
         /** If the message is a reply, ID of the original message */
         reply_to_message_id?: number
         /** Pass True if the message should be sent even if the specified replied-to message is not found */
         allow_sending_without_reply?: boolean
         /** A JSON-serialized object for an inline keyboard. If empty, one 'Pay total price' button will be shown. If not empty, the first button must be a Pay button. */
         reply_markup?: types.InlineKeyboardMarkup
      },
   ): Promise<any> {
      try {
         return await this.makeRequest(
            'sendInvoice',
            { prices, currency, provider_token, payload, description, title, chat_id },
            extra,
         )
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to create a link for an invoice. Returns the created invoice link as String on success.
    */
   async createInvoiceLink(
      /** Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.) */
      prices: types.LabeledPrice[],
      /** Three-letter ISO 4217 currency code, see more on currencies */
      currency: string,
      /** Payment provider token, obtained via BotFather */
      provider_token: string,
      /** Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes. */
      payload: string,
      /** Product description, 1-255 characters */
      description: string,
      /** Product name, 1-32 characters */
      title: string,
      /** Extra options that could be provided */
      extra?: {
         /** The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0 */
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
         /** Pass True if you require the user's full name to complete the order */
         need_name?: boolean
         /** Pass True if you require the user's phone number to complete the order */
         need_phone_number?: boolean
         /** Pass True if you require the user's email address to complete the order */
         need_email?: boolean
         /** Pass True if you require the user's shipping address to complete the order */
         need_shipping_address?: boolean
         /** Pass True if the user's phone number should be sent to the provider */
         send_phone_number_to_provider?: boolean
         /** Pass True if the user's email address should be sent to the provider */
         send_email_to_provider?: boolean
         /** Pass True if the final price depends on the shipping method */
         is_flexible?: boolean
      },
   ): Promise<any> {
      try {
         return await this.makeRequest(
            'createInvoiceLink',
            { prices, currency, provider_token, payload, description, title },
            extra,
         )
      } catch (e: any) {
         throw e
      }
   }

   /**
    * If you sent an invoice requesting a shipping address and the parameter is_flexible was specified, the Bot API will send an Update with a shipping_query field to the bot. Use this method to reply to shipping queries. On success, True is returned.
    */
   async answerShippingQuery(
      /** Pass True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible) */
      ok: boolean,
      /** Unique identifier for the query to be answered */
      shipping_query_id: string,
      /** Extra options that could be provided */
      extra?: {
         /** Required if ok is True. A JSON-serialized array of available shipping options. */
         shipping_options?: types.ShippingOption[]
         /** Required if ok is False. Error message in human readable form that explains why it is impossible to complete the order (e.g. "Sorry, delivery to your desired address is unavailable'). Telegram will display this message to the user. */
         error_message?: string
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('answerShippingQuery', { ok, shipping_query_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an Update with the field pre_checkout_query. Use this method to respond to such pre-checkout queries. On success, True is returned. Note: The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.
    */
   async answerPreCheckoutQuery(
      /** Specify True if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order. Use False if there are any problems. */
      ok: boolean,
      /** Unique identifier for the query to be answered */
      pre_checkout_query_id: string,
      /** Extra options that could be provided */
      extra?: {
         /** Required if ok is False. Error message in human readable form that explains the reason for failure to proceed with the checkout (e.g. "Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!"). Telegram will display this message to the user. */
         error_message?: string
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('answerPreCheckoutQuery', { ok, pre_checkout_query_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Informs a user that some of the Telegram Passport elements they provided contains errors. The user will not be able to re-submit their Passport to you until the errors are fixed (the contents of the field for which you returned the error must change). Returns True on success.Use this if the data submitted by the user doesn't satisfy the standards your service requires for any reason. For example, if a birthday date seems invalid, a submitted document is blurry, a scan shows evidence of tampering, etc. Supply some details in the error message to make sure the user knows how to correct the issues.
    */
   async setPassportDataErrors(
      /** A JSON-serialized array describing the errors */
      errors: types.PassportElementError[],
      /** User identifier */
      user_id: number,
   ): Promise<any> {
      try {
         return await this.makeRequest('setPassportDataErrors', { errors, user_id })
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to send a game. On success, the sent Message is returned.
    */
   async sendGame(
      /** Short name of the game, serves as the unique identifier for the game. Set up your games via @BotFather. */
      game_short_name: string,
      /** Unique identifier for the target chat */
      chat_id: number,
      /** Extra options that could be provided */
      extra?: {
         /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
         message_thread_id?: number
         /** Sends the message silently. Users will receive a notification with no sound. */
         disable_notification?: boolean
         /** Protects the contents of the sent message from forwarding and saving */
         protect_content?: boolean
         /** If the message is a reply, ID of the original message */
         reply_to_message_id?: number
         /** Pass True if the message should be sent even if the specified replied-to message is not found */
         allow_sending_without_reply?: boolean
         /** A JSON-serialized object for an inline keyboard. If empty, one 'Play game_title' button will be shown. If not empty, the first button must launch the game. */
         reply_markup?: types.InlineKeyboardMarkup
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('sendGame', { game_short_name, chat_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to set the score of the specified user in a game message. On success, if the message is not an inline message, the Message is returned, otherwise True is returned. Returns an error, if the new score is not greater than the user's current score in the chat and force is False.
    */
   async setGameScore(
      /** New score, must be non-negative */
      score: number,
      /** User identifier */
      user_id: number,
      /** Extra options that could be provided */
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
   ): Promise<any> {
      try {
         return await this.makeRequest('setGameScore', { score, user_id }, extra)
      } catch (e: any) {
         throw e
      }
   }

   /**
    * Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. Returns an Array of GameHighScore objects.
    */
   async getGameHighScores(
      /** Target user id */
      user_id: number,
      /** Extra options that could be provided */
      extra?: {
         /** Required if inline_message_id is not specified. Unique identifier for the target chat */
         chat_id?: number
         /** Required if inline_message_id is not specified. Identifier of the sent message */
         message_id?: number
         /** Required if chat_id and message_id are not specified. Identifier of the inline message */
         inline_message_id?: string
      },
   ): Promise<any> {
      try {
         return await this.makeRequest('getGameHighScores', { user_id }, extra)
      } catch (e: any) {
         throw e
      }
   }
}
