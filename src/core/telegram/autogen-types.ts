/**
 * This object represents one row of the high scores table for a game.And that's about all we've got for now.If you've got any questions, please check out our Bot FAQ »
 */
export interface GameHighScore {
   /** Position in high score table for the game */
   position: number
   /** User */
   user: User
   /** Score */
   score: number
}

/**
 * A placeholder, currently holds no information. Use BotFather to set up your game.
 */
export interface CallbackGame {}

/**
 * This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers.
 */
export interface Game {
   /** Title of the game */
   title: string
   /** Description of the game */
   description: string
   /** Photo that will be displayed in the game message in chats. */
   photo: PhotoSize[]
   /** Optional. Brief description of the game or high scores included in the game message. Can be automatically edited to include current high scores for the game when the bot calls setGameScore, or manually edited using editMessageText. 0-4096 characters. */
   text?: string
   /** Optional. Special entities that appear in text, such as usernames, URLs, bot commands, etc. */
   text_entities?: MessageEntity[]
   /** Optional. Animation that will be displayed in the game message in chats. Upload via BotFather */
   animation?: Animation
}

/**
 * Represents an issue in an unspecified place. The error is considered resolved when new data is added.Your bot can offer users HTML5 games to play solo or to compete against each other in groups and one-on-one chats. Create games via @BotFather using the /newgame command. Please note that this kind of power requires responsibility: you will need to accept the terms for each game that your bots will be offering.
 */
export interface PassportElementErrorUnspecified {
   /** Error source, must be unspecified */
   source: string
   /** Type of element of the user's Telegram Passport which has the issue */
   type: string
   /** Base64-encoded element hash */
   element_hash: string
   /** Error message */
   message: string
}

/**
 * Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation change.
 */
export interface PassportElementErrorTranslationFiles {
   /** Error source, must be translation_files */
   source: string
   /** Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration” */
   type: string
   /** List of base64-encoded file hashes */
   file_hashes: string[]
   /** Error message */
   message: string
}

/**
 * Represents an issue with one of the files that constitute the translation of a document. The error is considered resolved when the file changes.
 */
export interface PassportElementErrorTranslationFile {
   /** Error source, must be translation_file */
   source: string
   /** Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration” */
   type: string
   /** Base64-encoded file hash */
   file_hash: string
   /** Error message */
   message: string
}

/**
 * Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes.
 */
export interface PassportElementErrorFiles {
   /** Error source, must be files */
   source: string
   /** The section of the user's Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration” */
   type: string
   /** List of base64-encoded file hashes */
   file_hashes: string[]
   /** Error message */
   message: string
}

/**
 * Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes.
 */
export interface PassportElementErrorFile {
   /** Error source, must be file */
   source: string
   /** The section of the user's Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration” */
   type: string
   /** Base64-encoded file hash */
   file_hash: string
   /** Error message */
   message: string
}

/**
 * Represents an issue with the selfie with a document. The error is considered resolved when the file with the selfie changes.
 */
export interface PassportElementErrorSelfie {
   /** Error source, must be selfie */
   source: string
   /** The section of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport” */
   type: string
   /** Base64-encoded hash of the file with the selfie */
   file_hash: string
   /** Error message */
   message: string
}

/**
 * Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse side of the document changes.
 */
export interface PassportElementErrorReverseSide {
   /** Error source, must be reverse_side */
   source: string
   /** The section of the user's Telegram Passport which has the issue, one of “driver_license”, “identity_card” */
   type: string
   /** Base64-encoded hash of the file with the reverse side of the document */
   file_hash: string
   /** Error message */
   message: string
}

/**
 * Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes.
 */
export interface PassportElementErrorFrontSide {
   /** Error source, must be front_side */
   source: string
   /** The section of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport” */
   type: string
   /** Base64-encoded hash of the file with the front side of the document */
   file_hash: string
   /** Error message */
   message: string
}

/**
 * Represents an issue in one of the data fields that was provided by the user. The error is considered resolved when the field's value changes.
 */
export interface PassportElementErrorDataField {
   /** Error source, must be data */
   source: string
   /** The section of the user's Telegram Passport which has the error, one of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address” */
   type: string
   /** Name of the data field which has the error */
   field_name: string
   /** Base64-encoded data hash */
   data_hash: string
   /** Error message */
   message: string
}

/**
 * This object represents an error in the Telegram Passport element which was submitted that should be resolved by the user. It should be one of:
 */
export interface PassportElementError {}

/**
 * Describes data required for decrypting and authenticating EncryptedPassportElement. See the Telegram Passport Documentation for a complete description of the data decryption and authentication processes.
 */
export interface EncryptedCredentials {
   /** Base64-encoded encrypted JSON-serialized data with unique user's payload, data hashes and secrets required for EncryptedPassportElement decryption and authentication */
   data: string
   /** Base64-encoded data hash for data authentication */
   hash: string
   /** Base64-encoded secret, encrypted with the bot's public RSA key, required for data decryption */
   secret: string
}

/**
 * Describes documents or other Telegram Passport elements shared with the bot by the user.
 */
export interface EncryptedPassportElement {
   /** Element type. One of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”, “phone_number”, “email”. */
   type: string
   /** Base64-encoded element hash for using in PassportElementErrorUnspecified */
   hash: string
   /** Optional. Base64-encoded encrypted Telegram Passport element data provided by the user; available only for “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport” and “address” types. Can be decrypted and verified using the accompanying EncryptedCredentials. */
   data?: string
   /** Optional. User's verified phone number; available only for “phone_number” type */
   phone_number?: string
   /** Optional. User's verified email address; available only for “email” type */
   email?: string
   /** Optional. Array of encrypted files with documents provided by the user; available only for “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying EncryptedCredentials. */
   files?: PassportFile[]
   /** Optional. Encrypted file with the front side of the document, provided by the user; available only for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying EncryptedCredentials. */
   front_side?: PassportFile
   /** Optional. Encrypted file with the reverse side of the document, provided by the user; available only for “driver_license” and “identity_card”. The file can be decrypted and verified using the accompanying EncryptedCredentials. */
   reverse_side?: PassportFile
   /** Optional. Encrypted file with the selfie of the user holding a document, provided by the user; available if requested for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying EncryptedCredentials. */
   selfie?: PassportFile
   /** Optional. Array of encrypted files with translated versions of documents provided by the user; available if requested for “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying EncryptedCredentials. */
   translation?: PassportFile[]
}

/**
 * This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don't exceed 10MB.
 */
export interface PassportFile {
   /** Identifier for this file, which can be used to download or reuse the file */
   file_id: string
   /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
   file_unique_id: string
   /** File size in bytes */
   file_size: number
   /** Unix time when the file was uploaded */
   file_date: number
}

/**
 * Describes Telegram Passport data shared with the bot by the user.
 */
export interface PassportData {
   /** Array with information about documents and other Telegram Passport elements that was shared with the bot */
   data: EncryptedPassportElement[]
   /** Encrypted credentials required to decrypt the data */
   credentials: EncryptedCredentials
}

/**
 * Contains a list of Telegram Star transactions.Telegram Passport is a unified authorization method for services that require personal identification. Users can upload their documents once, then instantly share their data with services that require real-world ID (finance, ICOs, etc.). Please see the manual for details.
 */
export interface StarTransactions {
   /** The list of transactions */
   transactions: StarTransaction[]
}

/**
 * Describes a Telegram Star transaction.
 */
export interface StarTransaction {
   /** Unique identifier of the transaction. Coincides with the identifier of the original transaction for refund transactions. Coincides with SuccessfulPayment.telegram_payment_charge_id for successful incoming payments from users. */
   id: string
   /** Number of Telegram Stars transferred by the transaction */
   amount: number
   /** Date the transaction was created in Unix time */
   date: number
   /** Optional. Source of an incoming transaction (e.g., a user purchasing goods or services, Fragment refunding a failed withdrawal). Only for incoming transactions */
   source?: TransactionPartner
   /** Optional. Receiver of an outgoing transaction (e.g., a user for a purchase refund, Fragment for a withdrawal). Only for outgoing transactions */
   receiver?: TransactionPartner
}

/**
 * Describes a transaction with an unknown source or recipient.
 */
export interface TransactionPartnerOther {
   /** Type of the transaction partner, always “other” */
   type: string
}

/**
 * Describes a withdrawal transaction to the Telegram Ads platform.
 */
export interface TransactionPartnerTelegramAds {
   /** Type of the transaction partner, always “telegram_ads” */
   type: string
}

/**
 * Describes a withdrawal transaction with Fragment.
 */
export interface TransactionPartnerFragment {
   /** Type of the transaction partner, always “fragment” */
   type: string
   /** Optional. State of the transaction if the transaction is outgoing */
   withdrawal_state?: RevenueWithdrawalState
}

/**
 * Describes a transaction with a user.
 */
export interface TransactionPartnerUser {
   /** Type of the transaction partner, always “user” */
   type: string
   /** Information about the user */
   user: User
   /** Optional. Bot-specified invoice payload */
   invoice_payload?: string
   /** Optional. Information about the paid media bought by the user */
   paid_media?: PaidMedia[]
   /** Optional. Bot-specified paid media payload */
   paid_media_payload?: string
}

/**
 * This object describes the source of a transaction, or its recipient for outgoing transactions. Currently, it can be one of
 */
export interface TransactionPartner {}

/**
 * The withdrawal failed and the transaction was refunded.
 */
export interface RevenueWithdrawalStateFailed {
   /** Type of the state, always “failed” */
   type: string
}

/**
 * The withdrawal succeeded.
 */
export interface RevenueWithdrawalStateSucceeded {
   /** Type of the state, always “succeeded” */
   type: string
   /** Date the withdrawal was completed in Unix time */
   date: number
   /** An HTTPS URL that can be used to see transaction details */
   url: string
}

/**
 * The withdrawal is in progress.
 */
export interface RevenueWithdrawalStatePending {
   /** Type of the state, always “pending” */
   type: string
}

/**
 * This object describes the state of a revenue withdrawal operation. Currently, it can be one of
 */
export interface RevenueWithdrawalState {}

/**
 * This object contains information about a paid media purchase.
 */
export interface PaidMediaPurchased {
   /** User who purchased the media */
   from: User
   /** Bot-specified paid media payload */
   paid_media_payload: string
}

/**
 * This object contains information about an incoming pre-checkout query.
 */
export interface PreCheckoutQuery {
   /** Unique query identifier */
   id: string
   /** User who sent the query */
   from: User
   /** Three-letter ISO 4217 currency code, or “XTR” for payments in Telegram Stars */
   currency: string
   /** Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
   total_amount: number
   /** Bot-specified invoice payload */
   invoice_payload: string
   /** Optional. Identifier of the shipping option chosen by the user */
   shipping_option_id?: string
   /** Optional. Order information provided by the user */
   order_info?: OrderInfo
}

/**
 * This object contains information about an incoming shipping query.
 */
export interface ShippingQuery {
   /** Unique query identifier */
   id: string
   /** User who sent the query */
   from: User
   /** Bot-specified invoice payload */
   invoice_payload: string
   /** User specified shipping address */
   shipping_address: ShippingAddress
}

/**
 * This object contains basic information about a refunded payment.
 */
export interface RefundedPayment {
   /** Three-letter ISO 4217 currency code, or “XTR” for payments in Telegram Stars. Currently, always “XTR” */
   currency: string
   /** Total refunded price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45, total_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
   total_amount: number
   /** Bot-specified invoice payload */
   invoice_payload: string
   /** Telegram payment identifier */
   telegram_payment_charge_id: string
   /** Optional. Provider payment identifier */
   provider_payment_charge_id?: string
}

/**
 * This object contains basic information about a successful payment.
 */
export interface SuccessfulPayment {
   /** Three-letter ISO 4217 currency code, or “XTR” for payments in Telegram Stars */
   currency: string
   /** Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
   total_amount: number
   /** Bot-specified invoice payload */
   invoice_payload: string
   /** Telegram payment identifier */
   telegram_payment_charge_id: string
   /** Provider payment identifier */
   provider_payment_charge_id: string
   /** Optional. Identifier of the shipping option chosen by the user */
   shipping_option_id?: string
   /** Optional. Order information provided by the user */
   order_info?: OrderInfo
}

/**
 * This object represents one shipping option.
 */
export interface ShippingOption {
   /** Shipping option identifier */
   id: string
   /** Option title */
   title: string
   /** List of price portions */
   prices: LabeledPrice[]
}

/**
 * This object represents information about an order.
 */
export interface OrderInfo {
   /** Optional. User name */
   name?: string
   /** Optional. User's phone number */
   phone_number?: string
   /** Optional. User email */
   email?: string
   /** Optional. User shipping address */
   shipping_address?: ShippingAddress
}

/**
 * This object represents a shipping address.
 */
export interface ShippingAddress {
   /** Two-letter ISO 3166-1 alpha-2 country code */
   country_code: string
   /** State, if applicable */
   state: string
   /** City */
   city: string
   /** First line for the address */
   street_line1: string
   /** Second line for the address */
   street_line2: string
   /** Address post code */
   post_code: string
}

/**
 * This object contains basic information about an invoice.
 */
export interface Invoice {
   /** Product name */
   title: string
   /** Product description */
   description: string
   /** Unique bot deep-linking parameter that can be used to generate this invoice */
   start_parameter: string
   /** Three-letter ISO 4217 currency code, or “XTR” for payments in Telegram Stars */
   currency: string
   /** Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
   total_amount: number
}

/**
 * This object represents a portion of the price for goods or services.
 */
export interface LabeledPrice {
   /** Portion label */
   label: string
   /** Price of the product in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
   amount: number
}

/**
 * Describes an inline message sent by a Web App on behalf of a user.Your bot can accept payments from Telegram users. Please see the introduction to payments for more details on the process and how to set up payments for your bot.
 */
export interface SentWebAppMessage {
   /** Optional. Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message. */
   inline_message_id?: string
}

/**
 * Represents a result of an inline query that was chosen by the user and sent to their chat partner.Note: It is necessary to enable inline feedback via @BotFather in order to receive these objects in updates.
 */
export interface ChosenInlineResult {
   /** The unique identifier for the result that was chosen */
   result_id: string
   /** The user that chose the result */
   from: User
   /** The query that was used to obtain the result */
   query: string
   /** Optional. Sender location, only for bots that require user location */
   location?: Location
   /** Optional. Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message. Will be also received in callback queries and can be used to edit the message. */
   inline_message_id?: string
}

/**
 * Represents the content of an invoice message to be sent as the result of an inline query.
 */
export interface InputInvoiceMessageContent {
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
   /** Optional. Payment provider token, obtained via @BotFather. Pass an empty string for payments in Telegram Stars. */
   provider_token?: string
   /** Optional. The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0. Not supported for payments in Telegram Stars. */
   max_tip_amount?: number
   /** Optional. A JSON-serialized array of suggested amounts of tip in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount. */
   suggested_tip_amounts?: number[]
   /** Optional. A JSON-serialized object for data about the invoice, which will be shared with the payment provider. A detailed description of the required fields should be provided by the payment provider. */
   provider_data?: string
   /** Optional. URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. */
   photo_url?: string
   /** Optional. Photo size in bytes */
   photo_size?: number
   /** Optional. Photo width */
   photo_width?: number
   /** Optional. Photo height */
   photo_height?: number
   /** Optional. Pass True if you require the user's full name to complete the order. Ignored for payments in Telegram Stars. */
   need_name?: boolean
   /** Optional. Pass True if you require the user's phone number to complete the order. Ignored for payments in Telegram Stars. */
   need_phone_number?: boolean
   /** Optional. Pass True if you require the user's email address to complete the order. Ignored for payments in Telegram Stars. */
   need_email?: boolean
   /** Optional. Pass True if you require the user's shipping address to complete the order. Ignored for payments in Telegram Stars. */
   need_shipping_address?: boolean
   /** Optional. Pass True if the user's phone number should be sent to the provider. Ignored for payments in Telegram Stars. */
   send_phone_number_to_provider?: boolean
   /** Optional. Pass True if the user's email address should be sent to the provider. Ignored for payments in Telegram Stars. */
   send_email_to_provider?: boolean
   /** Optional. Pass True if the final price depends on the shipping method. Ignored for payments in Telegram Stars. */
   is_flexible?: boolean
}

/**
 * Represents the content of a contact message to be sent as the result of an inline query.
 */
export interface InputContactMessageContent {
   /** Contact's phone number */
   phone_number: string
   /** Contact's first name */
   first_name: string
   /** Optional. Contact's last name */
   last_name?: string
   /** Optional. Additional data about the contact in the form of a vCard, 0-2048 bytes */
   vcard?: string
}

/**
 * Represents the content of a venue message to be sent as the result of an inline query.
 */
export interface InputVenueMessageContent {
   /** Latitude of the venue in degrees */
   latitude: number
   /** Longitude of the venue in degrees */
   longitude: number
   /** Name of the venue */
   title: string
   /** Address of the venue */
   address: string
   /** Optional. Foursquare identifier of the venue, if known */
   foursquare_id?: string
   /** Optional. Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.) */
   foursquare_type?: string
   /** Optional. Google Places identifier of the venue */
   google_place_id?: string
   /** Optional. Google Places type of the venue. (See supported types.) */
   google_place_type?: string
}

/**
 * Represents the content of a location message to be sent as the result of an inline query.
 */
export interface InputLocationMessageContent {
   /** Latitude of the location in degrees */
   latitude: number
   /** Longitude of the location in degrees */
   longitude: number
   /** Optional. The radius of uncertainty for the location, measured in meters; 0-1500 */
   horizontal_accuracy?: number
   /** Optional. Period in seconds during which the location can be updated, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely. */
   live_period?: number
   /** Optional. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. */
   heading?: number
   /** Optional. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. */
   proximity_alert_radius?: number
}

/**
 * Represents the content of a text message to be sent as the result of an inline query.
 */
export interface InputTextMessageContent {
   /** Text of the message to be sent, 1-4096 characters */
   message_text: string
   /** Optional. Mode for parsing entities in the message text. See formatting options for more details. */
   parse_mode?: string
   /** Optional. List of special entities that appear in message text, which can be specified instead of parse_mode */
   entities?: MessageEntity[]
   /** Optional. Link preview generation options for the message */
   link_preview_options?: LinkPreviewOptions
}

/**
 * This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 5 types:
 */
export interface InputMessageContent {}

/**
 * Represents a link to an MP3 audio file stored on the Telegram servers. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.
 */
export interface InlineQueryResultCachedAudio {
   /** Type of the result, must be audio */
   type: string
   /** Unique identifier for this result, 1-64 bytes */
   id: string
   /** A valid file identifier for the audio file */
   audio_file_id: string
   /** Optional. Caption, 0-1024 characters after entities parsing */
   caption?: string
   /** Optional. Mode for parsing entities in the audio caption. See formatting options for more details. */
   parse_mode?: string
   /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
   caption_entities?: MessageEntity[]
   /** Optional. Inline keyboard attached to the message */
   reply_markup?: InlineKeyboardMarkup
   /** Optional. Content of the message to be sent instead of the audio */
   input_message_content?: InputMessageContent
}

/**
 * Represents a link to a voice message stored on the Telegram servers. By default, this voice message will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the voice message.
 */
export interface InlineQueryResultCachedVoice {
   /** Type of the result, must be voice */
   type: string
   /** Unique identifier for this result, 1-64 bytes */
   id: string
   /** A valid file identifier for the voice message */
   voice_file_id: string
   /** Voice message title */
   title: string
   /** Optional. Caption, 0-1024 characters after entities parsing */
   caption?: string
   /** Optional. Mode for parsing entities in the voice message caption. See formatting options for more details. */
   parse_mode?: string
   /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
   caption_entities?: MessageEntity[]
   /** Optional. Inline keyboard attached to the message */
   reply_markup?: InlineKeyboardMarkup
   /** Optional. Content of the message to be sent instead of the voice message */
   input_message_content?: InputMessageContent
}

/**
 * Represents a link to a video file stored on the Telegram servers. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the video.
 */
export interface InlineQueryResultCachedVideo {
   /** Type of the result, must be video */
   type: string
   /** Unique identifier for this result, 1-64 bytes */
   id: string
   /** A valid file identifier for the video file */
   video_file_id: string
   /** Title for the result */
   title: string
   /** Optional. Short description of the result */
   description?: string
   /** Optional. Caption of the video to be sent, 0-1024 characters after entities parsing */
   caption?: string
   /** Optional. Mode for parsing entities in the video caption. See formatting options for more details. */
   parse_mode?: string
   /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
   caption_entities?: MessageEntity[]
   /** Optional. Pass True, if the caption must be shown above the message media */
   show_caption_above_media?: boolean
   /** Optional. Inline keyboard attached to the message */
   reply_markup?: InlineKeyboardMarkup
   /** Optional. Content of the message to be sent instead of the video */
   input_message_content?: InputMessageContent
}

/**
 * Represents a link to a file stored on the Telegram servers. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file.
 */
export interface InlineQueryResultCachedDocument {
   /** Type of the result, must be document */
   type: string
   /** Unique identifier for this result, 1-64 bytes */
   id: string
   /** Title for the result */
   title: string
   /** A valid file identifier for the file */
   document_file_id: string
   /** Optional. Short description of the result */
   description?: string
   /** Optional. Caption of the document to be sent, 0-1024 characters after entities parsing */
   caption?: string
   /** Optional. Mode for parsing entities in the document caption. See formatting options for more details. */
   parse_mode?: string
   /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
   caption_entities?: MessageEntity[]
   /** Optional. Inline keyboard attached to the message */
   reply_markup?: InlineKeyboardMarkup
   /** Optional. Content of the message to be sent instead of the file */
   input_message_content?: InputMessageContent
}

/**
 * Represents a link to a sticker stored on the Telegram servers. By default, this sticker will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the sticker.
 */
export interface InlineQueryResultCachedSticker {
   /** Type of the result, must be sticker */
   type: string
   /** Unique identifier for this result, 1-64 bytes */
   id: string
   /** A valid file identifier of the sticker */
   sticker_file_id: string
   /** Optional. Inline keyboard attached to the message */
   reply_markup?: InlineKeyboardMarkup
   /** Optional. Content of the message to be sent instead of the sticker */
   input_message_content?: InputMessageContent
}

/**
 * Represents a link to a video animation (H.264/MPEG-4 AVC video without sound) stored on the Telegram servers. By default, this animated MPEG-4 file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
 */
export interface InlineQueryResultCachedMpeg4Gif {
   /** Type of the result, must be mpeg4_gif */
   type: string
   /** Unique identifier for this result, 1-64 bytes */
   id: string
   /** A valid file identifier for the MPEG4 file */
   mpeg4_file_id: string
   /** Optional. Title for the result */
   title?: string
   /** Optional. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing */
   caption?: string
   /** Optional. Mode for parsing entities in the caption. See formatting options for more details. */
   parse_mode?: string
   /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
   caption_entities?: MessageEntity[]
   /** Optional. Pass True, if the caption must be shown above the message media */
   show_caption_above_media?: boolean
   /** Optional. Inline keyboard attached to the message */
   reply_markup?: InlineKeyboardMarkup
   /** Optional. Content of the message to be sent instead of the video animation */
   input_message_content?: InputMessageContent
}

/**
 * Represents a link to an animated GIF file stored on the Telegram servers. By default, this animated GIF file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with specified content instead of the animation.
 */
export interface InlineQueryResultCachedGif {
   /** Type of the result, must be gif */
   type: string
   /** Unique identifier for this result, 1-64 bytes */
   id: string
   /** A valid file identifier for the GIF file */
   gif_file_id: string
   /** Optional. Title for the result */
   title?: string
   /** Optional. Caption of the GIF file to be sent, 0-1024 characters after entities parsing */
   caption?: string
   /** Optional. Mode for parsing entities in the caption. See formatting options for more details. */
   parse_mode?: string
   /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
   caption_entities?: MessageEntity[]
   /** Optional. Pass True, if the caption must be shown above the message media */
   show_caption_above_media?: boolean
   /** Optional. Inline keyboard attached to the message */
   reply_markup?: InlineKeyboardMarkup
   /** Optional. Content of the message to be sent instead of the GIF animation */
   input_message_content?: InputMessageContent
}

/**
 * Represents a link to a photo stored on the Telegram servers. By default, this photo will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.
 */
export interface InlineQueryResultCachedPhoto {
   /** Type of the result, must be photo */
   type: string
   /** Unique identifier for this result, 1-64 bytes */
   id: string
   /** A valid file identifier of the photo */
   photo_file_id: string
   /** Optional. Title for the result */
   title?: string
   /** Optional. Short description of the result */
   description?: string
   /** Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing */
   caption?: string
   /** Optional. Mode for parsing entities in the photo caption. See formatting options for more details. */
   parse_mode?: string
   /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
   caption_entities?: MessageEntity[]
   /** Optional. Pass True, if the caption must be shown above the message media */
   show_caption_above_media?: boolean
   /** Optional. Inline keyboard attached to the message */
   reply_markup?: InlineKeyboardMarkup
   /** Optional. Content of the message to be sent instead of the photo */
   input_message_content?: InputMessageContent
}

/**
 * Represents a Game.
 */
export interface InlineQueryResultGame {
   /** Type of the result, must be game */
   type: string
   /** Unique identifier for this result, 1-64 bytes */
   id: string
   /** Short name of the game */
   game_short_name: string
   /** Optional. Inline keyboard attached to the message */
   reply_markup?: InlineKeyboardMarkup
}

/**
 * Represents a contact with a phone number. By default, this contact will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the contact.
 */
export interface InlineQueryResultContact {
   /** Type of the result, must be contact */
   type: string
   /** Unique identifier for this result, 1-64 Bytes */
   id: string
   /** Contact's phone number */
   phone_number: string
   /** Contact's first name */
   first_name: string
   /** Optional. Contact's last name */
   last_name?: string
   /** Optional. Additional data about the contact in the form of a vCard, 0-2048 bytes */
   vcard?: string
   /** Optional. Inline keyboard attached to the message */
   reply_markup?: InlineKeyboardMarkup
   /** Optional. Content of the message to be sent instead of the contact */
   input_message_content?: InputMessageContent
   /** Optional. Url of the thumbnail for the result */
   thumbnail_url?: string
   /** Optional. Thumbnail width */
   thumbnail_width?: number
   /** Optional. Thumbnail height */
   thumbnail_height?: number
}

/**
 * Represents a venue. By default, the venue will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the venue.
 */
export interface InlineQueryResultVenue {
   /** Type of the result, must be venue */
   type: string
   /** Unique identifier for this result, 1-64 Bytes */
   id: string
   /** Latitude of the venue location in degrees */
   latitude: number
   /** Longitude of the venue location in degrees */
   longitude: number
   /** Title of the venue */
   title: string
   /** Address of the venue */
   address: string
   /** Optional. Foursquare identifier of the venue if known */
   foursquare_id?: string
   /** Optional. Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.) */
   foursquare_type?: string
   /** Optional. Google Places identifier of the venue */
   google_place_id?: string
   /** Optional. Google Places type of the venue. (See supported types.) */
   google_place_type?: string
   /** Optional. Inline keyboard attached to the message */
   reply_markup?: InlineKeyboardMarkup
   /** Optional. Content of the message to be sent instead of the venue */
   input_message_content?: InputMessageContent
   /** Optional. Url of the thumbnail for the result */
   thumbnail_url?: string
   /** Optional. Thumbnail width */
   thumbnail_width?: number
   /** Optional. Thumbnail height */
   thumbnail_height?: number
}

/**
 * Represents a location on a map. By default, the location will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the location.
 */
export interface InlineQueryResultLocation {
   /** Type of the result, must be location */
   type: string
   /** Unique identifier for this result, 1-64 Bytes */
   id: string
   /** Location latitude in degrees */
   latitude: number
   /** Location longitude in degrees */
   longitude: number
   /** Location title */
   title: string
   /** Optional. The radius of uncertainty for the location, measured in meters; 0-1500 */
   horizontal_accuracy?: number
   /** Optional. Period in seconds during which the location can be updated, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely. */
   live_period?: number
   /** Optional. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. */
   heading?: number
   /** Optional. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. */
   proximity_alert_radius?: number
   /** Optional. Inline keyboard attached to the message */
   reply_markup?: InlineKeyboardMarkup
   /** Optional. Content of the message to be sent instead of the location */
   input_message_content?: InputMessageContent
   /** Optional. Url of the thumbnail for the result */
   thumbnail_url?: string
   /** Optional. Thumbnail width */
   thumbnail_width?: number
   /** Optional. Thumbnail height */
   thumbnail_height?: number
}

/**
 * Represents a link to a file. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file. Currently, only .PDF and .ZIP files can be sent using this method.
 */
export interface InlineQueryResultDocument {
   /** Type of the result, must be document */
   type: string
   /** Unique identifier for this result, 1-64 bytes */
   id: string
   /** Title for the result */
   title: string
   /** A valid URL for the file */
   document_url: string
   /** MIME type of the content of the file, either “application/pdf” or “application/zip” */
   mime_type: string
   /** Optional. Caption of the document to be sent, 0-1024 characters after entities parsing */
   caption?: string
   /** Optional. Mode for parsing entities in the document caption. See formatting options for more details. */
   parse_mode?: string
   /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
   caption_entities?: MessageEntity[]
   /** Optional. Short description of the result */
   description?: string
   /** Optional. Inline keyboard attached to the message */
   reply_markup?: InlineKeyboardMarkup
   /** Optional. Content of the message to be sent instead of the file */
   input_message_content?: InputMessageContent
   /** Optional. URL of the thumbnail (JPEG only) for the file */
   thumbnail_url?: string
   /** Optional. Thumbnail width */
   thumbnail_width?: number
   /** Optional. Thumbnail height */
   thumbnail_height?: number
}

/**
 * Represents a link to a voice recording in an .OGG container encoded with OPUS. By default, this voice recording will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the the voice message.
 */
export interface InlineQueryResultVoice {
   /** Type of the result, must be voice */
   type: string
   /** Unique identifier for this result, 1-64 bytes */
   id: string
   /** A valid URL for the voice recording */
   voice_url: string
   /** Recording title */
   title: string
   /** Optional. Caption, 0-1024 characters after entities parsing */
   caption?: string
   /** Optional. Mode for parsing entities in the voice message caption. See formatting options for more details. */
   parse_mode?: string
   /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
   caption_entities?: MessageEntity[]
   /** Optional. Recording duration in seconds */
   voice_duration?: number
   /** Optional. Inline keyboard attached to the message */
   reply_markup?: InlineKeyboardMarkup
   /** Optional. Content of the message to be sent instead of the voice recording */
   input_message_content?: InputMessageContent
}

/**
 * Represents a link to an MP3 audio file. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.
 */
export interface InlineQueryResultAudio {
   /** Type of the result, must be audio */
   type: string
   /** Unique identifier for this result, 1-64 bytes */
   id: string
   /** A valid URL for the audio file */
   audio_url: string
   /** Title */
   title: string
   /** Optional. Caption, 0-1024 characters after entities parsing */
   caption?: string
   /** Optional. Mode for parsing entities in the audio caption. See formatting options for more details. */
   parse_mode?: string
   /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
   caption_entities?: MessageEntity[]
   /** Optional. Performer */
   performer?: string
   /** Optional. Audio duration in seconds */
   audio_duration?: number
   /** Optional. Inline keyboard attached to the message */
   reply_markup?: InlineKeyboardMarkup
   /** Optional. Content of the message to be sent instead of the audio */
   input_message_content?: InputMessageContent
}

/**
 * Represents a link to a page containing an embedded video player or a video file. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the video.
 */
export interface InlineQueryResultVideo {
   /** Type of the result, must be video */
   type: string
   /** Unique identifier for this result, 1-64 bytes */
   id: string
   /** A valid URL for the embedded video player or video file */
   video_url: string
   /** MIME type of the content of the video URL, “text/html” or “video/mp4” */
   mime_type: string
   /** URL of the thumbnail (JPEG only) for the video */
   thumbnail_url: string
   /** Title for the result */
   title: string
   /** Optional. Caption of the video to be sent, 0-1024 characters after entities parsing */
   caption?: string
   /** Optional. Mode for parsing entities in the video caption. See formatting options for more details. */
   parse_mode?: string
   /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
   caption_entities?: MessageEntity[]
   /** Optional. Pass True, if the caption must be shown above the message media */
   show_caption_above_media?: boolean
   /** Optional. Video width */
   video_width?: number
   /** Optional. Video height */
   video_height?: number
   /** Optional. Video duration in seconds */
   video_duration?: number
   /** Optional. Short description of the result */
   description?: string
   /** Optional. Inline keyboard attached to the message */
   reply_markup?: InlineKeyboardMarkup
   /** Optional. Content of the message to be sent instead of the video. This field is required if InlineQueryResultVideo is used to send an HTML-page as a result (e.g., a YouTube video). */
   input_message_content?: InputMessageContent
}

/**
 * Represents a link to a video animation (H.264/MPEG-4 AVC video without sound). By default, this animated MPEG-4 file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
 */
export interface InlineQueryResultMpeg4Gif {
   /** Type of the result, must be mpeg4_gif */
   type: string
   /** Unique identifier for this result, 1-64 bytes */
   id: string
   /** A valid URL for the MPEG4 file. File size must not exceed 1MB */
   mpeg4_url: string
   /** URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result */
   thumbnail_url: string
   /** Optional. Video width */
   mpeg4_width?: number
   /** Optional. Video height */
   mpeg4_height?: number
   /** Optional. Video duration in seconds */
   mpeg4_duration?: number
   /** Optional. MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg” */
   thumbnail_mime_type?: string
   /** Optional. Title for the result */
   title?: string
   /** Optional. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing */
   caption?: string
   /** Optional. Mode for parsing entities in the caption. See formatting options for more details. */
   parse_mode?: string
   /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
   caption_entities?: MessageEntity[]
   /** Optional. Pass True, if the caption must be shown above the message media */
   show_caption_above_media?: boolean
   /** Optional. Inline keyboard attached to the message */
   reply_markup?: InlineKeyboardMarkup
   /** Optional. Content of the message to be sent instead of the video animation */
   input_message_content?: InputMessageContent
}

/**
 * Represents a link to an animated GIF file. By default, this animated GIF file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
 */
export interface InlineQueryResultGif {
   /** Type of the result, must be gif */
   type: string
   /** Unique identifier for this result, 1-64 bytes */
   id: string
   /** A valid URL for the GIF file. File size must not exceed 1MB */
   gif_url: string
   /** URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result */
   thumbnail_url: string
   /** Optional. Width of the GIF */
   gif_width?: number
   /** Optional. Height of the GIF */
   gif_height?: number
   /** Optional. Duration of the GIF in seconds */
   gif_duration?: number
   /** Optional. MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg” */
   thumbnail_mime_type?: string
   /** Optional. Title for the result */
   title?: string
   /** Optional. Caption of the GIF file to be sent, 0-1024 characters after entities parsing */
   caption?: string
   /** Optional. Mode for parsing entities in the caption. See formatting options for more details. */
   parse_mode?: string
   /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
   caption_entities?: MessageEntity[]
   /** Optional. Pass True, if the caption must be shown above the message media */
   show_caption_above_media?: boolean
   /** Optional. Inline keyboard attached to the message */
   reply_markup?: InlineKeyboardMarkup
   /** Optional. Content of the message to be sent instead of the GIF animation */
   input_message_content?: InputMessageContent
}

/**
 * Represents a link to a photo. By default, this photo will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.
 */
export interface InlineQueryResultPhoto {
   /** Type of the result, must be photo */
   type: string
   /** Unique identifier for this result, 1-64 bytes */
   id: string
   /** A valid URL of the photo. Photo must be in JPEG format. Photo size must not exceed 5MB */
   photo_url: string
   /** URL of the thumbnail for the photo */
   thumbnail_url: string
   /** Optional. Width of the photo */
   photo_width?: number
   /** Optional. Height of the photo */
   photo_height?: number
   /** Optional. Title for the result */
   title?: string
   /** Optional. Short description of the result */
   description?: string
   /** Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing */
   caption?: string
   /** Optional. Mode for parsing entities in the photo caption. See formatting options for more details. */
   parse_mode?: string
   /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
   caption_entities?: MessageEntity[]
   /** Optional. Pass True, if the caption must be shown above the message media */
   show_caption_above_media?: boolean
   /** Optional. Inline keyboard attached to the message */
   reply_markup?: InlineKeyboardMarkup
   /** Optional. Content of the message to be sent instead of the photo */
   input_message_content?: InputMessageContent
}

/**
 * Represents a link to an article or web page.
 */
export interface InlineQueryResultArticle {
   /** Type of the result, must be article */
   type: string
   /** Unique identifier for this result, 1-64 Bytes */
   id: string
   /** Title of the result */
   title: string
   /** Content of the message to be sent */
   input_message_content: InputMessageContent
   /** Optional. Inline keyboard attached to the message */
   reply_markup?: InlineKeyboardMarkup
   /** Optional. URL of the result */
   url?: string
   /** Optional. Pass True if you don't want the URL to be shown in the message */
   hide_url?: boolean
   /** Optional. Short description of the result */
   description?: string
   /** Optional. Url of the thumbnail for the result */
   thumbnail_url?: string
   /** Optional. Thumbnail width */
   thumbnail_width?: number
   /** Optional. Thumbnail height */
   thumbnail_height?: number
}

/**
 * This object represents one result of an inline query. Telegram clients currently support results of the following 20 types:Note: All URLs passed in inline query results will be available to end users and therefore must be assumed to be public.
 */
export interface InlineQueryResult {}

/**
 * This object represents a button to be shown above inline query results. You must use exactly one of the optional fields.
 */
export interface InlineQueryResultsButton {
   /** Label text on the button */
   text: string
   /** Optional. Description of the Web App that will be launched when the user presses the button. The Web App will be able to switch back to the inline mode using the method switchInlineQuery inside the Web App. */
   web_app?: WebAppInfo
   /** Optional. Deep-linking parameter for the /start message sent to the bot when a user presses the button. 1-64 characters, only A-Z, a-z, 0-9, _ and - are allowed.Example: An inline bot that sends YouTube videos can ask the user to connect the bot to their YouTube account to adapt search results accordingly. To do this, it displays a 'Connect your YouTube account' button above the results, or even before showing any. The user presses the button, switches to a private chat with the bot and, in doing so, passes a start parameter that instructs the bot to return an OAuth link. Once done, the bot can offer a switch_inline button so that the user can easily return to the chat where they wanted to use the bot's inline capabilities. */
   start_parameter?: string
}

/**
 * This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results.
 */
export interface InlineQuery {
   /** Unique identifier for this query */
   id: string
   /** Sender */
   from: User
   /** Text of the query (up to 256 characters) */
   query: string
   /** Offset of the results to be returned, can be controlled by the bot */
   offset: string
   /** Optional. Type of the chat from which the inline query was sent. Can be either “sender” for a private chat with the inline query sender, “private”, “group”, “supergroup”, or “channel”. The chat type should be always known for requests sent from official clients and most third-party clients, unless the request was sent from a secret chat */
   chat_type?: string
   /** Optional. Sender location, only for bots that request user location */
   location?: Location
}

/**
 * This object describes a sticker to be added to a sticker set.
 */
export interface InputSticker {
   /** The added sticker. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, upload a new one using multipart/form-data, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. Animated and video stickers can't be uploaded via HTTP URL. More information on Sending Files » */
   sticker: InputFile | string
   /** Format of the added sticker, must be one of “static” for a .WEBP or .PNG image, “animated” for a .TGS animation, “video” for a WEBM video */
   format: string
   /** List of 1-20 emoji associated with the sticker */
   emoji_list: string[]
   /** Optional. Position where the mask should be placed on faces. For “mask” stickers only. */
   mask_position?: MaskPosition
   /** Optional. List of 0-20 search keywords for the sticker with total length of up to 64 characters. For “regular” and “custom_emoji” stickers only. */
   keywords?: string[]
}

/**
 * This object describes the position on faces where a mask should be placed by default.
 */
export interface MaskPosition {
   /** The part of the face relative to which the mask should be placed. One of “forehead”, “eyes”, “mouth”, or “chin”. */
   point: string
   /** Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. For example, choosing -1.0 will place mask just to the left of the default mask position. */
   x_shift: number
   /** Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. For example, 1.0 will place the mask just below the default mask position. */
   y_shift: number
   /** Mask scaling coefficient. For example, 2.0 means double size. */
   scale: number
}

/**
 * This object represents a sticker set.
 */
export interface StickerSet {
   /** Sticker set name */
   name: string
   /** Sticker set title */
   title: string
   /** Type of stickers in the set, currently one of “regular”, “mask”, “custom_emoji” */
   sticker_type: string
   /** List of all set stickers */
   stickers: Sticker[]
   /** Optional. Sticker set thumbnail in the .WEBP, .TGS, or .WEBM format */
   thumbnail?: PhotoSize
}

/**
 * This object represents a sticker.
 */
export interface Sticker {
   /** Identifier for this file, which can be used to download or reuse the file */
   file_id: string
   /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
   file_unique_id: string
   /** Type of the sticker, currently one of “regular”, “mask”, “custom_emoji”. The type of the sticker is independent from its format, which is determined by the fields is_animated and is_video. */
   type: string
   /** Sticker width */
   width: number
   /** Sticker height */
   height: number
   /** True, if the sticker is animated */
   is_animated: boolean
   /** True, if the sticker is a video sticker */
   is_video: boolean
   /** Optional. Sticker thumbnail in the .WEBP or .JPG format */
   thumbnail?: PhotoSize
   /** Optional. Emoji associated with the sticker */
   emoji?: string
   /** Optional. Name of the sticker set to which the sticker belongs */
   set_name?: string
   /** Optional. For premium regular stickers, premium animation for the sticker */
   premium_animation?: File
   /** Optional. For mask stickers, the position where the mask should be placed */
   mask_position?: MaskPosition
   /** Optional. For custom emoji stickers, unique identifier of the custom emoji */
   custom_emoji_id?: string
   /** Optional. True, if the sticker must be repainted to a text color in messages, the color of the Telegram Premium badge in emoji status, white color on chat photos, or another appropriate color in other places */
   needs_repainting?: boolean
   /** Optional. File size in bytes */
   file_size?: number
}

/**
 * The paid media to send is a video.There are three ways to send files (photos, stickers, audio, media, etc.):Sending by file_idSending by URLColors with identifiers 0 (red), 1 (orange), 2 (purple/violet), 3 (green), 4 (cyan), 5 (blue), 6 (pink) can be customized by app themes. Additionally, the following colors in RGB format are currently in use. Currently, the following colors in RGB format are in use for profile backgrounds. Objects and methods used in the inline mode are described in the Inline mode section.
 */
export interface InputPaidMediaVideo {
   /** Type of the media, must be video */
   type: string
   /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files » */
   media: string
   /** Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
   thumbnail?: InputFile | string
   /** Optional. Video width */
   width?: number
   /** Optional. Video height */
   height?: number
   /** Optional. Video duration in seconds */
   duration?: number
   /** Optional. Pass True if the uploaded video is suitable for streaming */
   supports_streaming?: boolean
}

/**
 * The paid media to send is a photo.
 */
export interface InputPaidMediaPhoto {
   /** Type of the media, must be photo */
   type: string
   /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files » */
   media: string
}

/**
 * This object describes the paid media to be sent. Currently, it can be one of
 */
export interface InputPaidMedia {}

/**
 * This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.
 */
export interface InputFile {}

/**
 * Represents a general file to be sent.
 */
export interface InputMediaDocument {
   /** Type of the result, must be document */
   type: string
   /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files » */
   media: string
   /** Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
   thumbnail?: InputFile | string
   /** Optional. Caption of the document to be sent, 0-1024 characters after entities parsing */
   caption?: string
   /** Optional. Mode for parsing entities in the document caption. See formatting options for more details. */
   parse_mode?: string
   /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
   caption_entities?: MessageEntity[]
   /** Optional. Disables automatic server-side content type detection for files uploaded using multipart/form-data. Always True, if the document is sent as part of an album. */
   disable_content_type_detection?: boolean
}

/**
 * Represents an audio file to be treated as music to be sent.
 */
export interface InputMediaAudio {
   /** Type of the result, must be audio */
   type: string
   /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files » */
   media: string
   /** Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
   thumbnail?: InputFile | string
   /** Optional. Caption of the audio to be sent, 0-1024 characters after entities parsing */
   caption?: string
   /** Optional. Mode for parsing entities in the audio caption. See formatting options for more details. */
   parse_mode?: string
   /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
   caption_entities?: MessageEntity[]
   /** Optional. Duration of the audio in seconds */
   duration?: number
   /** Optional. Performer of the audio */
   performer?: string
   /** Optional. Title of the audio */
   title?: string
}

/**
 * Represents an animation file (GIF or H.264/MPEG-4 AVC video without sound) to be sent.
 */
export interface InputMediaAnimation {
   /** Type of the result, must be animation */
   type: string
   /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files » */
   media: string
   /** Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
   thumbnail?: InputFile | string
   /** Optional. Caption of the animation to be sent, 0-1024 characters after entities parsing */
   caption?: string
   /** Optional. Mode for parsing entities in the animation caption. See formatting options for more details. */
   parse_mode?: string
   /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
   caption_entities?: MessageEntity[]
   /** Optional. Pass True, if the caption must be shown above the message media */
   show_caption_above_media?: boolean
   /** Optional. Animation width */
   width?: number
   /** Optional. Animation height */
   height?: number
   /** Optional. Animation duration in seconds */
   duration?: number
   /** Optional. Pass True if the animation needs to be covered with a spoiler animation */
   has_spoiler?: boolean
}

/**
 * Represents a video to be sent.
 */
export interface InputMediaVideo {
   /** Type of the result, must be video */
   type: string
   /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files » */
   media: string
   /** Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
   thumbnail?: InputFile | string
   /** Optional. Caption of the video to be sent, 0-1024 characters after entities parsing */
   caption?: string
   /** Optional. Mode for parsing entities in the video caption. See formatting options for more details. */
   parse_mode?: string
   /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
   caption_entities?: MessageEntity[]
   /** Optional. Pass True, if the caption must be shown above the message media */
   show_caption_above_media?: boolean
   /** Optional. Video width */
   width?: number
   /** Optional. Video height */
   height?: number
   /** Optional. Video duration in seconds */
   duration?: number
   /** Optional. Pass True if the uploaded video is suitable for streaming */
   supports_streaming?: boolean
   /** Optional. Pass True if the video needs to be covered with a spoiler animation */
   has_spoiler?: boolean
}

/**
 * Represents a photo to be sent.
 */
export interface InputMediaPhoto {
   /** Type of the result, must be photo */
   type: string
   /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files » */
   media: string
   /** Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing */
   caption?: string
   /** Optional. Mode for parsing entities in the photo caption. See formatting options for more details. */
   parse_mode?: string
   /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
   caption_entities?: MessageEntity[]
   /** Optional. Pass True, if the caption must be shown above the message media */
   show_caption_above_media?: boolean
   /** Optional. Pass True if the photo needs to be covered with a spoiler animation */
   has_spoiler?: boolean
}

/**
 * This object represents the content of a media message to be sent. It should be one of
 */
export interface InputMedia {}

/**
 * Describes why a request was unsuccessful.
 */
export interface ResponseParameters {
   /** Optional. The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
   migrate_to_chat_id?: number
   /** Optional. In case of exceeding flood control, the number of seconds left to wait before the request can be repeated */
   retry_after?: number
}

/**
 * This object is received when messages are deleted from a connected business account.
 */
export interface BusinessMessagesDeleted {
   /** Unique identifier of the business connection */
   business_connection_id: string
   /** Information about a chat in the business account. The bot may not have access to the chat or the corresponding user. */
   chat: Chat
   /** The list of identifiers of deleted messages in the chat of the business account */
   message_ids: number[]
}

/**
 * Describes the connection of the bot with a business account.
 */
export interface BusinessConnection {
   /** Unique identifier of the business connection */
   id: string
   /** Business account user that created the business connection */
   user: User
   /** Identifier of a private chat with the user who created the business connection. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. */
   user_chat_id: number
   /** Date the connection was established in Unix time */
   date: number
   /** True, if the bot can act on behalf of the business account in chats that were active in the last 24 hours */
   can_reply: boolean
   /** True, if the connection is active */
   is_enabled: boolean
}

/**
 * This object represents a list of boosts added to a chat by a user.
 */
export interface UserChatBoosts {
   /** The list of boosts added to the chat by the user */
   boosts: ChatBoost[]
}

/**
 * This object represents a boost removed from a chat.
 */
export interface ChatBoostRemoved {
   /** Chat which was boosted */
   chat: Chat
   /** Unique identifier of the boost */
   boost_id: string
   /** Point in time (Unix timestamp) when the boost was removed */
   remove_date: number
   /** Source of the removed boost */
   source: ChatBoostSource
}

/**
 * This object represents a boost added to a chat or changed.
 */
export interface ChatBoostUpdated {
   /** Chat which was boosted */
   chat: Chat
   /** Information about the chat boost */
   boost: ChatBoost
}

/**
 * This object contains information about a chat boost.
 */
export interface ChatBoost {
   /** Unique identifier of the boost */
   boost_id: string
   /** Point in time (Unix timestamp) when the chat was boosted */
   add_date: number
   /** Point in time (Unix timestamp) when the boost will automatically expire, unless the booster's Telegram Premium subscription is prolonged */
   expiration_date: number
   /** Source of the added boost */
   source: ChatBoostSource
}

/**
 * The boost was obtained by the creation of a Telegram Premium or a Telegram Star giveaway. This boosts the chat 4 times for the duration of the corresponding Telegram Premium subscription for Telegram Premium giveaways and prize_star_count / 500 times for one year for Telegram Star giveaways.
 */
export interface ChatBoostSourceGiveaway {
   /** Source of the boost, always “giveaway” */
   source: string
   /** Identifier of a message in the chat with the giveaway; the message could have been deleted already. May be 0 if the message isn't sent yet. */
   giveaway_message_id: number
   /** Optional. User that won the prize in the giveaway if any; for Telegram Premium giveaways only */
   user?: User
   /** Optional. The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only */
   prize_star_count?: number
   /** Optional. True, if the giveaway was completed, but there was no user to win the prize */
   is_unclaimed?: boolean
}

/**
 * The boost was obtained by the creation of Telegram Premium gift codes to boost a chat. Each such code boosts the chat 4 times for the duration of the corresponding Telegram Premium subscription.
 */
export interface ChatBoostSourceGiftCode {
   /** Source of the boost, always “gift_code” */
   source: string
   /** User for which the gift code was created */
   user: User
}

/**
 * The boost was obtained by subscribing to Telegram Premium or by gifting a Telegram Premium subscription to another user.
 */
export interface ChatBoostSourcePremium {
   /** Source of the boost, always “premium” */
   source: string
   /** User that boosted the chat */
   user: User
}

/**
 * This object describes the source of a chat boost. It can be one of
 */
export interface ChatBoostSource {}

/**
 * Describes that no specific value for the menu button was set.
 */
export interface MenuButtonDefault {
   /** Type of the button, must be default */
   type: string
}

/**
 * Represents a menu button, which launches a Web App.
 */
export interface MenuButtonWebApp {
   /** Type of the button, must be web_app */
   type: string
   /** Text on the button */
   text: string
   /** Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. Alternatively, a t.me link to a Web App of the bot can be specified in the object instead of the Web App's URL, in which case the Web App will be opened as if the user pressed the link. */
   web_app: WebAppInfo
}

/**
 * Represents a menu button, which opens the bot's list of commands.
 */
export interface MenuButtonCommands {
   /** Type of the button, must be commands */
   type: string
}

/**
 * This object describes the bot's menu button in a private chat. It should be one ofIf a menu button other than MenuButtonDefault is set for a private chat, then it is applied in the chat. Otherwise the default menu button is applied. By default, the menu button opens the list of bot commands.
 */
export interface MenuButton {}

/**
 * This object represents the bot's short description.
 */
export interface BotShortDescription {
   /** The bot's short description */
   short_description: string
}

/**
 * This object represents the bot's description.
 */
export interface BotDescription {
   /** The bot's description */
   description: string
}

/**
 * This object represents the bot's name.
 */
export interface BotName {
   /** The bot's name */
   name: string
}

/**
 * Represents the scope of bot commands, covering a specific member of a group or supergroup chat.
 */
export interface BotCommandScopeChatMember {
   /** Scope type, must be chat_member */
   type: string
   /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
   chat_id: number | string
   /** Unique identifier of the target user */
   user_id: number
}

/**
 * Represents the scope of bot commands, covering all administrators of a specific group or supergroup chat.
 */
export interface BotCommandScopeChatAdministrators {
   /** Scope type, must be chat_administrators */
   type: string
   /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
   chat_id: number | string
}

/**
 * Represents the scope of bot commands, covering a specific chat.
 */
export interface BotCommandScopeChat {
   /** Scope type, must be chat */
   type: string
   /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
   chat_id: number | string
}

/**
 * Represents the scope of bot commands, covering all group and supergroup chat administrators.
 */
export interface BotCommandScopeAllChatAdministrators {
   /** Scope type, must be all_chat_administrators */
   type: string
}

/**
 * Represents the scope of bot commands, covering all group and supergroup chats.
 */
export interface BotCommandScopeAllGroupChats {
   /** Scope type, must be all_group_chats */
   type: string
}

/**
 * Represents the scope of bot commands, covering all private chats.
 */
export interface BotCommandScopeAllPrivateChats {
   /** Scope type, must be all_private_chats */
   type: string
}

/**
 * Represents the default scope of bot commands. Default commands are used if no commands with a narrower scope are specified for the user.
 */
export interface BotCommandScopeDefault {
   /** Scope type, must be default */
   type: string
}

/**
 * This object represents the scope to which bot commands are applied. Currently, the following 7 scopes are supported:The following algorithm is used to determine the list of commands for a particular user viewing the bot menu. The first list of commands which is set is returned:Commands in the chat with the botCommands in group and supergroup chats
 */
export interface BotCommandScope {}

/**
 * This object represents a bot command.
 */
export interface BotCommand {
   /** Text of the command; 1-32 characters. Can contain only lowercase English letters, digits and underscores. */
   command: string
   /** Description of the command; 1-256 characters. */
   description: string
}

/**
 * This object represents a forum topic.
 */
export interface ForumTopic {
   /** Unique identifier of the forum topic */
   message_thread_id: number
   /** Name of the topic */
   name: string
   /** Color of the topic icon in RGB format */
   icon_color: number
   /** Optional. Unique identifier of the custom emoji shown as the topic icon */
   icon_custom_emoji_id?: string
}

/**
 * This object represents reaction changes on a message with anonymous reactions.
 */
export interface MessageReactionCountUpdated {
   /** The chat containing the message */
   chat: Chat
   /** Unique message identifier inside the chat */
   message_id: number
   /** Date of the change in Unix time */
   date: number
   /** List of reactions that are present on the message */
   reactions: ReactionCount[]
}

/**
 * This object represents a change of a reaction on a message performed by a user.
 */
export interface MessageReactionUpdated {
   /** The chat containing the message the user reacted to */
   chat: Chat
   /** Unique identifier of the message inside the chat */
   message_id: number
   /** Date of the change in Unix time */
   date: number
   /** Previous list of reaction types that were set by the user */
   old_reaction: ReactionType[]
   /** New list of reaction types that have been set by the user */
   new_reaction: ReactionType[]
   /** Optional. The user that changed the reaction, if the user isn't anonymous */
   user?: User
   /** Optional. The chat on behalf of which the reaction was changed, if the user is anonymous */
   actor_chat?: Chat
}

/**
 * Represents a reaction added to a message along with the number of times it was added.
 */
export interface ReactionCount {
   /** Type of the reaction */
   type: ReactionType
   /** Number of times the reaction was added */
   total_count: number
}

/**
 * The reaction is paid.
 */
export interface ReactionTypePaid {
   /** Type of the reaction, always “paid” */
   type: string
}

/**
 * The reaction is based on a custom emoji.
 */
export interface ReactionTypeCustomEmoji {
   /** Type of the reaction, always “custom_emoji” */
   type: string
   /** Custom emoji identifier */
   custom_emoji_id: string
}

/**
 * The reaction is based on an emoji.
 */
export interface ReactionTypeEmoji {
   /** Type of the reaction, always “emoji” */
   type: string
   /** Reaction emoji. Currently, it can be one of "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" */
   emoji: string
}

/**
 * This object describes the type of a reaction. Currently, it can be one of
 */
export interface ReactionType {}

/**
 * Represents a location to which a chat is connected.
 */
export interface ChatLocation {
   /** The location to which the supergroup is connected. Can't be a live location. */
   location: Location
   /** Location address; 1-64 characters, as defined by the chat owner */
   address: string
}

/**
 * Describes the opening hours of a business.
 */
export interface BusinessOpeningHours {
   /** Unique name of the time zone for which the opening hours are defined */
   time_zone_name: string
   /** List of time intervals describing business opening hours */
   opening_hours: BusinessOpeningHoursInterval[]
}

/**
 * Describes an interval of time during which a business is open.
 */
export interface BusinessOpeningHoursInterval {
   /** The minute's sequence number in a week, starting on Monday, marking the start of the time interval during which the business is open; 0 - 7 * 24 * 60 */
   opening_minute: number
   /** The minute's sequence number in a week, starting on Monday, marking the end of the time interval during which the business is open; 0 - 8 * 24 * 60 */
   closing_minute: number
}

/**
 * Contains information about the location of a Telegram Business account.
 */
export interface BusinessLocation {
   /** Address of the business */
   address: string
   /** Optional. Location of the business */
   location?: Location
}

/**
 * Contains information about the start page settings of a Telegram Business account.
 */
export interface BusinessIntro {
   /** Optional. Title text of the business intro */
   title?: string
   /** Optional. Message text of the business intro */
   message?: string
   /** Optional. Sticker of the business intro */
   sticker?: Sticker
}

/**
 * Describes the birthdate of a user.
 */
export interface Birthdate {
   /** Day of the user's birth; 1-31 */
   day: number
   /** Month of the user's birth; 1-12 */
   month: number
   /** Optional. Year of the user's birth */
   year?: number
}

/**
 * Describes actions that a non-administrator user is allowed to take in a chat.
 */
export interface ChatPermissions {
   /** Optional. True, if the user is allowed to send text messages, contacts, giveaways, giveaway winners, invoices, locations and venues */
   can_send_messages?: boolean
   /** Optional. True, if the user is allowed to send audios */
   can_send_audios?: boolean
   /** Optional. True, if the user is allowed to send documents */
   can_send_documents?: boolean
   /** Optional. True, if the user is allowed to send photos */
   can_send_photos?: boolean
   /** Optional. True, if the user is allowed to send videos */
   can_send_videos?: boolean
   /** Optional. True, if the user is allowed to send video notes */
   can_send_video_notes?: boolean
   /** Optional. True, if the user is allowed to send voice notes */
   can_send_voice_notes?: boolean
   /** Optional. True, if the user is allowed to send polls */
   can_send_polls?: boolean
   /** Optional. True, if the user is allowed to send animations, games, stickers and use inline bots */
   can_send_other_messages?: boolean
   /** Optional. True, if the user is allowed to add web page previews to their messages */
   can_add_web_page_previews?: boolean
   /** Optional. True, if the user is allowed to change the chat title, photo and other settings. Ignored in public supergroups */
   can_change_info?: boolean
   /** Optional. True, if the user is allowed to invite new users to the chat */
   can_invite_users?: boolean
   /** Optional. True, if the user is allowed to pin messages. Ignored in public supergroups */
   can_pin_messages?: boolean
   /** Optional. True, if the user is allowed to create forum topics. If omitted defaults to the value of can_pin_messages */
   can_manage_topics?: boolean
}

/**
 * Represents a join request sent to a chat.
 */
export interface ChatJoinRequest {
   /** Chat to which the request was sent */
   chat: Chat
   /** User that sent the join request */
   from: User
   /** Identifier of a private chat with the user who sent the join request. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot can use this identifier for 5 minutes to send messages until the join request is processed, assuming no other administrator contacted the user. */
   user_chat_id: number
   /** Date the request was sent in Unix time */
   date: number
   /** Optional. Bio of the user. */
   bio?: string
   /** Optional. Chat invite link that was used by the user to send the join request */
   invite_link?: ChatInviteLink
}

/**
 * Represents a chat member that was banned in the chat and can't return to the chat or view chat messages.
 */
export interface ChatMemberBanned {
   /** The member's status in the chat, always “kicked” */
   status: string
   /** Information about the user */
   user: User
   /** Date when restrictions will be lifted for this user; Unix time. If 0, then the user is banned forever */
   until_date: number
}

/**
 * Represents a chat member that isn't currently a member of the chat, but may join it themselves.
 */
export interface ChatMemberLeft {
   /** The member's status in the chat, always “left” */
   status: string
   /** Information about the user */
   user: User
}

/**
 * Represents a chat member that is under certain restrictions in the chat. Supergroups only.
 */
export interface ChatMemberRestricted {
   /** The member's status in the chat, always “restricted” */
   status: string
   /** Information about the user */
   user: User
   /** True, if the user is a member of the chat at the moment of the request */
   is_member: boolean
   /** True, if the user is allowed to send text messages, contacts, giveaways, giveaway winners, invoices, locations and venues */
   can_send_messages: boolean
   /** True, if the user is allowed to send audios */
   can_send_audios: boolean
   /** True, if the user is allowed to send documents */
   can_send_documents: boolean
   /** True, if the user is allowed to send photos */
   can_send_photos: boolean
   /** True, if the user is allowed to send videos */
   can_send_videos: boolean
   /** True, if the user is allowed to send video notes */
   can_send_video_notes: boolean
   /** True, if the user is allowed to send voice notes */
   can_send_voice_notes: boolean
   /** True, if the user is allowed to send polls */
   can_send_polls: boolean
   /** True, if the user is allowed to send animations, games, stickers and use inline bots */
   can_send_other_messages: boolean
   /** True, if the user is allowed to add web page previews to their messages */
   can_add_web_page_previews: boolean
   /** True, if the user is allowed to change the chat title, photo and other settings */
   can_change_info: boolean
   /** True, if the user is allowed to invite new users to the chat */
   can_invite_users: boolean
   /** True, if the user is allowed to pin messages */
   can_pin_messages: boolean
   /** True, if the user is allowed to create forum topics */
   can_manage_topics: boolean
   /** Date when restrictions will be lifted for this user; Unix time. If 0, then the user is restricted forever */
   until_date: number
}

/**
 * Represents a chat member that has no additional privileges or restrictions.
 */
export interface ChatMemberMember {
   /** The member's status in the chat, always “member” */
   status: string
   /** Information about the user */
   user: User
   /** Optional. Date when the user's subscription will expire; Unix time */
   until_date?: number
}

/**
 * Represents a chat member that has some additional privileges.
 */
export interface ChatMemberAdministrator {
   /** The member's status in the chat, always “administrator” */
   status: string
   /** Information about the user */
   user: User
   /** True, if the bot is allowed to edit administrator privileges of that user */
   can_be_edited: boolean
   /** True, if the user's presence in the chat is hidden */
   is_anonymous: boolean
   /** True, if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages and ignore slow mode. Implied by any other administrator privilege. */
   can_manage_chat: boolean
   /** True, if the administrator can delete messages of other users */
   can_delete_messages: boolean
   /** True, if the administrator can manage video chats */
   can_manage_video_chats: boolean
   /** True, if the administrator can restrict, ban or unban chat members, or access supergroup statistics */
   can_restrict_members: boolean
   /** True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user) */
   can_promote_members: boolean
   /** True, if the user is allowed to change the chat title, photo and other settings */
   can_change_info: boolean
   /** True, if the user is allowed to invite new users to the chat */
   can_invite_users: boolean
   /** True, if the administrator can post stories to the chat */
   can_post_stories: boolean
   /** True, if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive */
   can_edit_stories: boolean
   /** True, if the administrator can delete stories posted by other users */
   can_delete_stories: boolean
   /** Optional. True, if the administrator can post messages in the channel, or access channel statistics; for channels only */
   can_post_messages?: boolean
   /** Optional. True, if the administrator can edit messages of other users and can pin messages; for channels only */
   can_edit_messages?: boolean
   /** Optional. True, if the user is allowed to pin messages; for groups and supergroups only */
   can_pin_messages?: boolean
   /** Optional. True, if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only */
   can_manage_topics?: boolean
   /** Optional. Custom title for this user */
   custom_title?: string
}

/**
 * Represents a chat member that owns the chat and has all administrator privileges.
 */
export interface ChatMemberOwner {
   /** The member's status in the chat, always “creator” */
   status: string
   /** Information about the user */
   user: User
   /** True, if the user's presence in the chat is hidden */
   is_anonymous: boolean
   /** Optional. Custom title for this user */
   custom_title?: string
}

/**
 * This object contains information about one member of a chat. Currently, the following 6 types of chat members are supported:
 */
export interface ChatMember {}

/**
 * This object represents changes in the status of a chat member.
 */
export interface ChatMemberUpdated {
   /** Chat the user belongs to */
   chat: Chat
   /** Performer of the action, which resulted in the change */
   from: User
   /** Date the change was done in Unix time */
   date: number
   /** Previous information about the chat member */
   old_chat_member: ChatMember
   /** New information about the chat member */
   new_chat_member: ChatMember
   /** Optional. Chat invite link, which was used by the user to join the chat; for joining by invite link events only. */
   invite_link?: ChatInviteLink
   /** Optional. True, if the user joined the chat after sending a direct join request without using an invite link and being approved by an administrator */
   via_join_request?: boolean
   /** Optional. True, if the user joined the chat via a chat folder invite link */
   via_chat_folder_invite_link?: boolean
}

/**
 * Represents the rights of an administrator in a chat.
 */
export interface ChatAdministratorRights {
   /** True, if the user's presence in the chat is hidden */
   is_anonymous: boolean
   /** True, if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages and ignore slow mode. Implied by any other administrator privilege. */
   can_manage_chat: boolean
   /** True, if the administrator can delete messages of other users */
   can_delete_messages: boolean
   /** True, if the administrator can manage video chats */
   can_manage_video_chats: boolean
   /** True, if the administrator can restrict, ban or unban chat members, or access supergroup statistics */
   can_restrict_members: boolean
   /** True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user) */
   can_promote_members: boolean
   /** True, if the user is allowed to change the chat title, photo and other settings */
   can_change_info: boolean
   /** True, if the user is allowed to invite new users to the chat */
   can_invite_users: boolean
   /** True, if the administrator can post stories to the chat */
   can_post_stories: boolean
   /** True, if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive */
   can_edit_stories: boolean
   /** True, if the administrator can delete stories posted by other users */
   can_delete_stories: boolean
   /** Optional. True, if the administrator can post messages in the channel, or access channel statistics; for channels only */
   can_post_messages?: boolean
   /** Optional. True, if the administrator can edit messages of other users and can pin messages; for channels only */
   can_edit_messages?: boolean
   /** Optional. True, if the user is allowed to pin messages; for groups and supergroups only */
   can_pin_messages?: boolean
   /** Optional. True, if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only */
   can_manage_topics?: boolean
}

/**
 * Represents an invite link for a chat.
 */
export interface ChatInviteLink {
   /** The invite link. If the link was created by another chat administrator, then the second part of the link will be replaced with “…”. */
   invite_link: string
   /** Creator of the link */
   creator: User
   /** True, if users joining the chat via the link need to be approved by chat administrators */
   creates_join_request: boolean
   /** True, if the link is primary */
   is_primary: boolean
   /** True, if the link is revoked */
   is_revoked: boolean
   /** Optional. Invite link name */
   name?: string
   /** Optional. Point in time (Unix timestamp) when the link will expire or has been expired */
   expire_date?: number
   /** Optional. The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999 */
   member_limit?: number
   /** Optional. Number of pending join requests created using this link */
   pending_join_request_count?: number
   /** Optional. The number of seconds the subscription will be active for before the next payment */
   subscription_period?: number
   /** Optional. The amount of Telegram Stars a user must pay initially and after each subsequent subscription period to be a member of the chat using the link */
   subscription_price?: number
}

/**
 * This object represents a chat photo.
 */
export interface ChatPhoto {
   /** File identifier of small (160x160) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed. */
   small_file_id: string
   /** Unique file identifier of small (160x160) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
   small_file_unique_id: string
   /** File identifier of big (640x640) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed. */
   big_file_id: string
   /** Unique file identifier of big (640x640) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
   big_file_unique_id: string
}

/**
 * Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice privacy mode. Not supported in channels and for messages sent on behalf of a Telegram Business account.
 */
export interface ForceReply {
   /** Shows reply interface to the user, as if they manually selected the bot's message and tapped 'Reply' */
   force_reply: boolean
   /** Optional. The placeholder to be shown in the input field when the reply is active; 1-64 characters */
   input_field_placeholder?: string
   /** Optional. Use this parameter if you want to force reply from specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply to a message in the same chat and forum topic, sender of the original message. */
   selective?: boolean
}

/**
 * This object represents an incoming callback query from a callback button in an inline keyboard. If the button that originated the query was attached to a message sent by the bot, the field message will be present. If the button was attached to a message sent via the bot (in inline mode), the field inline_message_id will be present. Exactly one of the fields data or game_short_name will be present.
 */
export interface CallbackQuery {
   /** Unique identifier for this query */
   id: string
   /** Sender */
   from: User
   /** Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in games. */
   chat_instance: string
   /** Optional. Message sent by the bot with the callback button that originated the query */
   message?: MaybeInaccessibleMessage
   /** Optional. Identifier of the message sent via the bot in inline mode, that originated the query. */
   inline_message_id?: string
   /** Optional. Data associated with the callback button. Be aware that the message originated the query can contain no callback buttons with this data. */
   data?: string
   /** Optional. Short name of a Game to be returned, serves as the unique identifier for the game */
   game_short_name?: string
}

/**
 * This object represents an inline button that switches the current user to inline mode in a chosen chat, with an optional default inline query.
 */
export interface SwitchInlineQueryChosenChat {
   /** Optional. The default inline query to be inserted in the input field. If left empty, only the bot's username will be inserted */
   query?: string
   /** Optional. True, if private chats with users can be chosen */
   allow_user_chats?: boolean
   /** Optional. True, if private chats with bots can be chosen */
   allow_bot_chats?: boolean
   /** Optional. True, if group and supergroup chats can be chosen */
   allow_group_chats?: boolean
   /** Optional. True, if channel chats can be chosen */
   allow_channel_chats?: boolean
}

/**
 * This object represents a parameter of the inline keyboard button used to automatically authorize a user. Serves as a great replacement for the Telegram Login Widget when the user is coming from Telegram. All the user needs to do is tap/click a button and confirm that they want to log in:Telegram apps support these buttons as of version 5.7.
 */
export interface LoginUrl {
   /** An HTTPS URL to be opened with user authorization data added to the query string when the button is pressed. If the user refuses to provide authorization data, the original URL without information about the user will be opened. The data added is the same as described in Receiving authorization data.NOTE: You must always check the hash of the received data to verify the authentication and the integrity of the data as described in Checking authorization. */
   url: string
   /** Optional. New text of the button in forwarded messages. */
   forward_text?: string
   /** Optional. Username of a bot, which will be used for user authorization. See Setting up a bot for more details. If not specified, the current bot's username will be assumed. The url's domain must be the same as the domain linked with the bot. See Linking your domain to the bot for more details. */
   bot_username?: string
   /** Optional. Pass True to request the permission for your bot to send messages to the user. */
   request_write_access?: boolean
}

/**
 * This object represents one button of an inline keyboard. Exactly one of the optional fields must be used to specify type of the button.
 */
export interface InlineKeyboardButton {
   /** Label text on the button */
   text: string
   /** Optional. HTTP or tg:// URL to be opened when the button is pressed. Links tg://user?id=<user_id> can be used to mention a user by their identifier without using a username, if this is allowed by their privacy settings. */
   url?: string
   /** Optional. Data to be sent in a callback query to the bot when the button is pressed, 1-64 bytes */
   callback_data?: string
   /** Optional. Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. Available only in private chats between a user and the bot. Not supported for messages sent on behalf of a Telegram Business account. */
   web_app?: WebAppInfo
   /** Optional. An HTTPS URL used to automatically authorize the user. Can be used as a replacement for the Telegram Login Widget. */
   login_url?: LoginUrl
   /** Optional. If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot's username and the specified inline query in the input field. May be empty, in which case just the bot's username will be inserted. Not supported for messages sent on behalf of a Telegram Business account. */
   switch_inline_query?: string
   /** Optional. If set, pressing the button will insert the bot's username and the specified inline query in the current chat's input field. May be empty, in which case only the bot's username will be inserted.This offers a quick way for the user to open your bot in inline mode in the same chat - good for selecting something from multiple options. Not supported in channels and for messages sent on behalf of a Telegram Business account. */
   switch_inline_query_current_chat?: string
   /** Optional. If set, pressing the button will prompt the user to select one of their chats of the specified type, open that chat and insert the bot's username and the specified inline query in the input field. Not supported for messages sent on behalf of a Telegram Business account. */
   switch_inline_query_chosen_chat?: SwitchInlineQueryChosenChat
   /** Optional. Description of the game that will be launched when the user presses the button.NOTE: This type of button must always be the first button in the first row. */
   callback_game?: CallbackGame
   /** Optional. Specify True, to send a Pay button. Substrings “” and “XTR” in the buttons's text will be replaced with a Telegram Star icon.NOTE: This type of button must always be the first button in the first row and can only be used in invoice messages. */
   pay?: boolean
}

/**
 * This object represents an inline keyboard that appears right next to the message it belongs to.
 */
export interface InlineKeyboardMarkup {
   /** Array of button rows, each represented by an Array of InlineKeyboardButton objects */
   inline_keyboard: InlineKeyboardButton[][]
}

/**
 * Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see ReplyKeyboardMarkup). Not supported in channels and for messages sent on behalf of a Telegram Business account.
 */
export interface ReplyKeyboardRemove {
   /** Requests clients to remove the custom keyboard (user will not be able to summon this keyboard; if you want to hide the keyboard from sight but keep it accessible, use one_time_keyboard in ReplyKeyboardMarkup) */
   remove_keyboard: boolean
   /** Optional. Use this parameter if you want to remove the keyboard for specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply to a message in the same chat and forum topic, sender of the original message.Example: A user votes in a poll, bot returns confirmation message in reply to the vote and removes the keyboard for that user, while still showing the keyboard with poll options to users who haven't voted yet. */
   selective?: boolean
}

/**
 * This object represents type of a poll, which is allowed to be created and sent when the corresponding button is pressed.
 */
export interface KeyboardButtonPollType {
   /** Optional. If quiz is passed, the user will be allowed to create only polls in the quiz mode. If regular is passed, only regular polls will be allowed. Otherwise, the user will be allowed to create a poll of any type. */
   type?: string
}

/**
 * This object defines the criteria used to request a suitable chat. Information about the selected chat will be shared with the bot when the corresponding button is pressed. The bot will be granted requested rights in the chat if appropriate. More about requesting chats ».
 */
export interface KeyboardButtonRequestChat {
   /** Signed 32-bit identifier of the request, which will be received back in the ChatShared object. Must be unique within the message */
   request_id: number
   /** Pass True to request a channel chat, pass False to request a group or a supergroup chat. */
   chat_is_channel: boolean
   /** Optional. Pass True to request a forum supergroup, pass False to request a non-forum chat. If not specified, no additional restrictions are applied. */
   chat_is_forum?: boolean
   /** Optional. Pass True to request a supergroup or a channel with a username, pass False to request a chat without a username. If not specified, no additional restrictions are applied. */
   chat_has_username?: boolean
   /** Optional. Pass True to request a chat owned by the user. Otherwise, no additional restrictions are applied. */
   chat_is_created?: boolean
   /** Optional. A JSON-serialized object listing the required administrator rights of the user in the chat. The rights must be a superset of bot_administrator_rights. If not specified, no additional restrictions are applied. */
   user_administrator_rights?: ChatAdministratorRights
   /** Optional. A JSON-serialized object listing the required administrator rights of the bot in the chat. The rights must be a subset of user_administrator_rights. If not specified, no additional restrictions are applied. */
   bot_administrator_rights?: ChatAdministratorRights
   /** Optional. Pass True to request a chat with the bot as a member. Otherwise, no additional restrictions are applied. */
   bot_is_member?: boolean
   /** Optional. Pass True to request the chat's title */
   request_title?: boolean
   /** Optional. Pass True to request the chat's username */
   request_username?: boolean
   /** Optional. Pass True to request the chat's photo */
   request_photo?: boolean
}

/**
 * This object defines the criteria used to request suitable users. Information about the selected users will be shared with the bot when the corresponding button is pressed. More about requesting users »
 */
export interface KeyboardButtonRequestUsers {
   /** Signed 32-bit identifier of the request that will be received back in the UsersShared object. Must be unique within the message */
   request_id: number
   /** Optional. Pass True to request bots, pass False to request regular users. If not specified, no additional restrictions are applied. */
   user_is_bot?: boolean
   /** Optional. Pass True to request premium users, pass False to request non-premium users. If not specified, no additional restrictions are applied. */
   user_is_premium?: boolean
   /** Optional. The maximum number of users to be selected; 1-10. Defaults to 1. */
   max_quantity?: number
   /** Optional. Pass True to request the users' first and last names */
   request_name?: boolean
   /** Optional. Pass True to request the users' usernames */
   request_username?: boolean
   /** Optional. Pass True to request the users' photos */
   request_photo?: boolean
}

/**
 * This object represents one button of the reply keyboard. At most one of the optional fields must be used to specify type of the button. For simple text buttons, String can be used instead of this object to specify the button text.Note: request_users and request_chat options will only work in Telegram versions released after 3 February, 2023. Older clients will display unsupported message.
 */
export interface KeyboardButton {
   /** Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed */
   text: string
   /** Optional. If specified, pressing the button will open a list of suitable users. Identifiers of selected users will be sent to the bot in a “users_shared” service message. Available in private chats only. */
   request_users?: KeyboardButtonRequestUsers
   /** Optional. If specified, pressing the button will open a list of suitable chats. Tapping on a chat will send its identifier to the bot in a “chat_shared” service message. Available in private chats only. */
   request_chat?: KeyboardButtonRequestChat
   /** Optional. If True, the user's phone number will be sent as a contact when the button is pressed. Available in private chats only. */
   request_contact?: boolean
   /** Optional. If True, the user's current location will be sent when the button is pressed. Available in private chats only. */
   request_location?: boolean
   /** Optional. If specified, the user will be asked to create a poll and send it to the bot when the button is pressed. Available in private chats only. */
   request_poll?: KeyboardButtonPollType
   /** Optional. If specified, the described Web App will be launched when the button is pressed. The Web App will be able to send a “web_app_data” service message. Available in private chats only. */
   web_app?: WebAppInfo
}

/**
 * This object represents a custom keyboard with reply options (see Introduction to bots for details and examples). Not supported in channels and for messages sent on behalf of a Telegram Business account.
 */
export interface ReplyKeyboardMarkup {
   /** Array of button rows, each represented by an Array of KeyboardButton objects */
   keyboard: KeyboardButton[][]
   /** Optional. Requests clients to always show the keyboard when the regular keyboard is hidden. Defaults to false, in which case the custom keyboard can be hidden and opened with a keyboard icon. */
   is_persistent?: boolean
   /** Optional. Requests clients to resize the keyboard vertically for optimal fit (e.g., make the keyboard smaller if there are just two rows of buttons). Defaults to false, in which case the custom keyboard is always of the same height as the app's standard keyboard. */
   resize_keyboard?: boolean
   /** Optional. Requests clients to hide the keyboard as soon as it's been used. The keyboard will still be available, but clients will automatically display the usual letter-keyboard in the chat - the user can press a special button in the input field to see the custom keyboard again. Defaults to false. */
   one_time_keyboard?: boolean
   /** Optional. The placeholder to be shown in the input field when the keyboard is active; 1-64 characters */
   input_field_placeholder?: string
   /** Optional. Use this parameter if you want to show the keyboard to specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply to a message in the same chat and forum topic, sender of the original message.Example: A user requests to change the bot's language, bot replies to the request with a keyboard to select the new language. Other users in the group don't see the keyboard. */
   selective?: boolean
}

/**
 * Describes a Web App.
 */
export interface WebAppInfo {
   /** An HTTPS URL of a Web App to be opened with additional data as specified in Initializing Web Apps */
   url: string
}

/**
 * This object represents a file ready to be downloaded. The file can be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile.
 */
export interface File {
   /** Identifier for this file, which can be used to download or reuse the file */
   file_id: string
   /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
   file_unique_id: string
   /** Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
   file_size?: number
   /** Optional. File path. Use https://api.telegram.org/file/bot<token>/<file_path> to get the file. */
   file_path?: string
}

/**
 * This object represent a user's profile pictures.
 */
export interface UserProfilePhotos {
   /** Total number of profile pictures the target user has */
   total_count: number
   /** Requested profile pictures (in up to 4 sizes each) */
   photos: PhotoSize[][]
}

/**
 * Describes the options used for link preview generation.
 */
export interface LinkPreviewOptions {
   /** Optional. True, if the link preview is disabled */
   is_disabled?: boolean
   /** Optional. URL to use for the link preview. If empty, then the first URL found in the message text will be used */
   url?: string
   /** Optional. True, if the media in the link preview is supposed to be shrunk; ignored if the URL isn't explicitly specified or media size change isn't supported for the preview */
   prefer_small_media?: boolean
   /** Optional. True, if the media in the link preview is supposed to be enlarged; ignored if the URL isn't explicitly specified or media size change isn't supported for the preview */
   prefer_large_media?: boolean
   /** Optional. True, if the link preview must be shown above the message text; otherwise, the link preview will be shown below the message text */
   show_above_text?: boolean
}

/**
 * This object represents a service message about the completion of a giveaway without public winners.
 */
export interface GiveawayCompleted {
   /** Number of winners in the giveaway */
   winner_count: number
   /** Optional. Number of undistributed prizes */
   unclaimed_prize_count?: number
   /** Optional. Message with the giveaway that was completed, if it wasn't deleted */
   giveaway_message?: Message
   /** Optional. True, if the giveaway is a Telegram Star giveaway. Otherwise, currently, the giveaway is a Telegram Premium giveaway. */
   is_star_giveaway?: boolean
}

/**
 * This object represents a message about the completion of a giveaway with public winners.
 */
export interface GiveawayWinners {
   /** The chat that created the giveaway */
   chat: Chat
   /** Identifier of the message with the giveaway in the chat */
   giveaway_message_id: number
   /** Point in time (Unix timestamp) when winners of the giveaway were selected */
   winners_selection_date: number
   /** Total number of winners in the giveaway */
   winner_count: number
   /** List of up to 100 winners of the giveaway */
   winners: User[]
   /** Optional. The number of other chats the user had to join in order to be eligible for the giveaway */
   additional_chat_count?: number
   /** Optional. The number of Telegram Stars that were split between giveaway winners; for Telegram Star giveaways only */
   prize_star_count?: number
   /** Optional. The number of months the Telegram Premium subscription won from the giveaway will be active for; for Telegram Premium giveaways only */
   premium_subscription_month_count?: number
   /** Optional. Number of undistributed prizes */
   unclaimed_prize_count?: number
   /** Optional. True, if only users who had joined the chats after the giveaway started were eligible to win */
   only_new_members?: boolean
   /** Optional. True, if the giveaway was canceled because the payment for it was refunded */
   was_refunded?: boolean
   /** Optional. Description of additional giveaway prize */
   prize_description?: string
}

/**
 * This object represents a message about a scheduled giveaway.
 */
export interface Giveaway {
   /** The list of chats which the user must join to participate in the giveaway */
   chats: Chat[]
   /** Point in time (Unix timestamp) when winners of the giveaway will be selected */
   winners_selection_date: number
   /** The number of users which are supposed to be selected as winners of the giveaway */
   winner_count: number
   /** Optional. True, if only users who join the chats after the giveaway started should be eligible to win */
   only_new_members?: boolean
   /** Optional. True, if the list of giveaway winners will be visible to everyone */
   has_public_winners?: boolean
   /** Optional. Description of additional giveaway prize */
   prize_description?: string
   /** Optional. A list of two-letter ISO 3166-1 alpha-2 country codes indicating the countries from which eligible users for the giveaway must come. If empty, then all users can participate in the giveaway. Users with a phone number that was bought on Fragment can always participate in giveaways. */
   country_codes?: string[]
   /** Optional. The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only */
   prize_star_count?: number
   /** Optional. The number of months the Telegram Premium subscription won from the giveaway will be active for; for Telegram Premium giveaways only */
   premium_subscription_month_count?: number
}

/**
 * This object represents a service message about the creation of a scheduled giveaway.
 */
export interface GiveawayCreated {
   /** Optional. The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only */
   prize_star_count?: number
}

/**
 * This object represents a service message about new members invited to a video chat.
 */
export interface VideoChatParticipantsInvited {
   /** New members that were invited to the video chat */
   users: User[]
}

/**
 * This object represents a service message about a video chat ended in the chat.
 */
export interface VideoChatEnded {
   /** Video chat duration in seconds */
   duration: number
}

/**
 * This object represents a service message about a video chat started in the chat. Currently holds no information.
 */
export interface VideoChatStarted {}

/**
 * This object represents a service message about a video chat scheduled in the chat.
 */
export interface VideoChatScheduled {
   /** Point in time (Unix timestamp) when the video chat is supposed to be started by a chat administrator */
   start_date: number
}

/**
 * This object represents a service message about a user allowing a bot to write messages after adding it to the attachment menu, launching a Web App from a link, or accepting an explicit request from a Web App sent by the method requestWriteAccess.
 */
export interface WriteAccessAllowed {
   /** Optional. True, if the access was granted after the user accepted an explicit request from a Web App sent by the method requestWriteAccess */
   from_request?: boolean
   /** Optional. Name of the Web App, if the access was granted when the Web App was launched from a link */
   web_app_name?: string
   /** Optional. True, if the access was granted when the bot was added to the attachment or side menu */
   from_attachment_menu?: boolean
}

/**
 * This object contains information about a chat that was shared with the bot using a KeyboardButtonRequestChat button.
 */
export interface ChatShared {
   /** Identifier of the request */
   request_id: number
   /** Identifier of the shared chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot may not have access to the chat and could be unable to use this identifier, unless the chat is already known to the bot by some other means. */
   chat_id: number
   /** Optional. Title of the chat, if the title was requested by the bot. */
   title?: string
   /** Optional. Username of the chat, if the username was requested by the bot and available. */
   username?: string
   /** Optional. Available sizes of the chat photo, if the photo was requested by the bot */
   photo?: PhotoSize[]
}

/**
 * This object contains information about the users whose identifiers were shared with the bot using a KeyboardButtonRequestUsers button.
 */
export interface UsersShared {
   /** Identifier of the request */
   request_id: number
   /** Information about users shared with the bot. */
   users: SharedUser[]
}

/**
 * This object contains information about a user that was shared with the bot using a KeyboardButtonRequestUsers button.
 */
export interface SharedUser {
   /** Identifier of the shared user. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so 64-bit integers or double-precision float types are safe for storing these identifiers. The bot may not have access to the user and could be unable to use this identifier, unless the user is already known to the bot by some other means. */
   user_id: number
   /** Optional. First name of the user, if the name was requested by the bot */
   first_name?: string
   /** Optional. Last name of the user, if the name was requested by the bot */
   last_name?: string
   /** Optional. Username of the user, if the username was requested by the bot */
   username?: string
   /** Optional. Available sizes of the chat photo, if the photo was requested by the bot */
   photo?: PhotoSize[]
}

/**
 * This object represents a service message about General forum topic unhidden in the chat. Currently holds no information.
 */
export interface GeneralForumTopicUnhidden {}

/**
 * This object represents a service message about General forum topic hidden in the chat. Currently holds no information.
 */
export interface GeneralForumTopicHidden {}

/**
 * This object represents a service message about a forum topic reopened in the chat. Currently holds no information.
 */
export interface ForumTopicReopened {}

/**
 * This object represents a service message about an edited forum topic.
 */
export interface ForumTopicEdited {
   /** Optional. New name of the topic, if it was edited */
   name?: string
   /** Optional. New identifier of the custom emoji shown as the topic icon, if it was edited; an empty string if the icon was removed */
   icon_custom_emoji_id?: string
}

/**
 * This object represents a service message about a forum topic closed in the chat. Currently holds no information.
 */
export interface ForumTopicClosed {}

/**
 * This object represents a service message about a new forum topic created in the chat.
 */
export interface ForumTopicCreated {
   /** Name of the topic */
   name: string
   /** Color of the topic icon in RGB format */
   icon_color: number
   /** Optional. Unique identifier of the custom emoji shown as the topic icon */
   icon_custom_emoji_id?: string
}

/**
 * This object represents a chat background.
 */
export interface ChatBackground {
   /** Type of the background */
   type: BackgroundType
}

/**
 * The background is taken directly from a built-in chat theme.
 */
export interface BackgroundTypeChatTheme {
   /** Type of the background, always “chat_theme” */
   type: string
   /** Name of the chat theme, which is usually an emoji */
   theme_name: string
}

/**
 * The background is a PNG or TGV (gzipped subset of SVG with MIME type “application/x-tgwallpattern”) pattern to be combined with the background fill chosen by the user.
 */
export interface BackgroundTypePattern {
   /** Type of the background, always “pattern” */
   type: string
   /** Document with the pattern */
   document: Document
   /** The background fill that is combined with the pattern */
   fill: BackgroundFill
   /** Intensity of the pattern when it is shown above the filled background; 0-100 */
   intensity: number
   /** Optional. True, if the background fill must be applied only to the pattern itself. All other pixels are black in this case. For dark themes only */
   is_inverted?: boolean
   /** Optional. True, if the background moves slightly when the device is tilted */
   is_moving?: boolean
}

/**
 * The background is a wallpaper in the JPEG format.
 */
export interface BackgroundTypeWallpaper {
   /** Type of the background, always “wallpaper” */
   type: string
   /** Document with the wallpaper */
   document: Document
   /** Dimming of the background in dark themes, as a percentage; 0-100 */
   dark_theme_dimming: number
   /** Optional. True, if the wallpaper is downscaled to fit in a 450x450 square and then box-blurred with radius 12 */
   is_blurred?: boolean
   /** Optional. True, if the background moves slightly when the device is tilted */
   is_moving?: boolean
}

/**
 * The background is automatically filled based on the selected colors.
 */
export interface BackgroundTypeFill {
   /** Type of the background, always “fill” */
   type: string
   /** The background fill */
   fill: BackgroundFill
   /** Dimming of the background in dark themes, as a percentage; 0-100 */
   dark_theme_dimming: number
}

/**
 * This object describes the type of a background. Currently, it can be one of
 */
export interface BackgroundType {}

/**
 * The background is a freeform gradient that rotates after every message in the chat.
 */
export interface BackgroundFillFreeformGradient {
   /** Type of the background fill, always “freeform_gradient” */
   type: string
   /** A list of the 3 or 4 base colors that are used to generate the freeform gradient in the RGB24 format */
   colors: number[]
}

/**
 * The background is a gradient fill.
 */
export interface BackgroundFillGradient {
   /** Type of the background fill, always “gradient” */
   type: string
   /** Top color of the gradient in the RGB24 format */
   top_color: number
   /** Bottom color of the gradient in the RGB24 format */
   bottom_color: number
   /** Clockwise rotation angle of the background fill in degrees; 0-359 */
   rotation_angle: number
}

/**
 * The background is filled using the selected color.
 */
export interface BackgroundFillSolid {
   /** Type of the background fill, always “solid” */
   type: string
   /** The color of the background fill in the RGB24 format */
   color: number
}

/**
 * This object describes the way a background is filled based on the selected colors. Currently, it can be one of
 */
export interface BackgroundFill {}

/**
 * This object represents a service message about a user boosting a chat.
 */
export interface ChatBoostAdded {
   /** Number of boosts added by the user */
   boost_count: number
}

/**
 * This object represents a service message about a change in auto-delete timer settings.
 */
export interface MessageAutoDeleteTimerChanged {
   /** New auto-delete time for messages in the chat; in seconds */
   message_auto_delete_time: number
}

/**
 * This object represents the content of a service message, sent whenever a user in the chat triggers a proximity alert set by another user.
 */
export interface ProximityAlertTriggered {
   /** User that triggered the alert */
   traveler: User
   /** User that set the alert */
   watcher: User
   /** The distance between the users */
   distance: number
}

/**
 * Describes data sent from a Web App to the bot.
 */
export interface WebAppData {
   /** The data. Be aware that a bad client can send arbitrary data in this field. */
   data: string
   /** Text of the web_app keyboard button from which the Web App was opened. Be aware that a bad client can send arbitrary data in this field. */
   button_text: string
}

/**
 * This object represents a venue.
 */
export interface Venue {
   /** Venue location. Can't be a live location */
   location: Location
   /** Name of the venue */
   title: string
   /** Address of the venue */
   address: string
   /** Optional. Foursquare identifier of the venue */
   foursquare_id?: string
   /** Optional. Foursquare type of the venue. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.) */
   foursquare_type?: string
   /** Optional. Google Places identifier of the venue */
   google_place_id?: string
   /** Optional. Google Places type of the venue. (See supported types.) */
   google_place_type?: string
}

/**
 * This object represents a point on the map.
 */
export interface Location {
   /** Latitude as defined by the sender */
   latitude: number
   /** Longitude as defined by the sender */
   longitude: number
   /** Optional. The radius of uncertainty for the location, measured in meters; 0-1500 */
   horizontal_accuracy?: number
   /** Optional. Time relative to the message sending date, during which the location can be updated; in seconds. For active live locations only. */
   live_period?: number
   /** Optional. The direction in which user is moving, in degrees; 1-360. For active live locations only. */
   heading?: number
   /** Optional. The maximum distance for proximity alerts about approaching another chat member, in meters. For sent live locations only. */
   proximity_alert_radius?: number
}

/**
 * This object contains information about a poll.
 */
export interface Poll {
   /** Unique poll identifier */
   id: string
   /** Poll question, 1-300 characters */
   question: string
   /** List of poll options */
   options: PollOption[]
   /** Total number of users that voted in the poll */
   total_voter_count: number
   /** True, if the poll is closed */
   is_closed: boolean
   /** True, if the poll is anonymous */
   is_anonymous: boolean
   /** Poll type, currently can be “regular” or “quiz” */
   type: string
   /** True, if the poll allows multiple answers */
   allows_multiple_answers: boolean
   /** Optional. Special entities that appear in the question. Currently, only custom emoji entities are allowed in poll questions */
   question_entities?: MessageEntity[]
   /** Optional. 0-based identifier of the correct answer option. Available only for polls in the quiz mode, which are closed, or was sent (not forwarded) by the bot or to the private chat with the bot. */
   correct_option_id?: number
   /** Optional. Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters */
   explanation?: string
   /** Optional. Special entities like usernames, URLs, bot commands, etc. that appear in the explanation */
   explanation_entities?: MessageEntity[]
   /** Optional. Amount of time in seconds the poll will be active after creation */
   open_period?: number
   /** Optional. Point in time (Unix timestamp) when the poll will be automatically closed */
   close_date?: number
}

/**
 * This object represents an answer of a user in a non-anonymous poll.
 */
export interface PollAnswer {
   /** Unique poll identifier */
   poll_id: string
   /** 0-based identifiers of chosen answer options. May be empty if the vote was retracted. */
   option_ids: number[]
   /** Optional. The chat that changed the answer to the poll, if the voter is anonymous */
   voter_chat?: Chat
   /** Optional. The user that changed the answer to the poll, if the voter isn't anonymous */
   user?: User
}

/**
 * This object contains information about one answer option in a poll to be sent.
 */
export interface InputPollOption {
   /** Option text, 1-100 characters */
   text: string
   /** Optional. Mode for parsing entities in the text. See formatting options for more details. Currently, only custom emoji entities are allowed */
   text_parse_mode?: string
   /** Optional. A JSON-serialized list of special entities that appear in the poll option text. It can be specified instead of text_parse_mode */
   text_entities?: MessageEntity[]
}

/**
 * This object contains information about one answer option in a poll.
 */
export interface PollOption {
   /** Option text, 1-100 characters */
   text: string
   /** Number of users that voted for this option */
   voter_count: number
   /** Optional. Special entities that appear in the option text. Currently, only custom emoji entities are allowed in poll option texts */
   text_entities?: MessageEntity[]
}

/**
 * This object represents an animated emoji that displays a random value.
 */
export interface Dice {
   /** Emoji on which the dice throw animation is based */
   emoji: string
   /** Value of the dice, 1-6 for “”, “” and “” base emoji, 1-5 for “” and “” base emoji, 1-64 for “” base emoji */
   value: number
}

/**
 * This object represents a phone contact.
 */
export interface Contact {
   /** Contact's phone number */
   phone_number: string
   /** Contact's first name */
   first_name: string
   /** Optional. Contact's last name */
   last_name?: string
   /** Optional. Contact's user identifier in Telegram. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. */
   user_id?: number
   /** Optional. Additional data about the contact in the form of a vCard */
   vcard?: string
}

/**
 * The paid media is a video.
 */
export interface PaidMediaVideo {
   /** Type of the paid media, always “video” */
   type: string
   /** The video */
   video: Video
}

/**
 * The paid media is a photo.
 */
export interface PaidMediaPhoto {
   /** Type of the paid media, always “photo” */
   type: string
   /** The photo */
   photo: PhotoSize[]
}

/**
 * The paid media isn't available before the payment.
 */
export interface PaidMediaPreview {
   /** Type of the paid media, always “preview” */
   type: string
   /** Optional. Media width as defined by the sender */
   width?: number
   /** Optional. Media height as defined by the sender */
   height?: number
   /** Optional. Duration of the media in seconds as defined by the sender */
   duration?: number
}

/**
 * This object describes paid media. Currently, it can be one of
 */
export interface PaidMedia {}

/**
 * Describes the paid media added to a message.
 */
export interface PaidMediaInfo {
   /** The number of Telegram Stars that must be paid to buy access to the media */
   star_count: number
   /** Information about the paid media */
   paid_media: PaidMedia[]
}

/**
 * This object represents a voice note.
 */
export interface Voice {
   /** Identifier for this file, which can be used to download or reuse the file */
   file_id: string
   /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
   file_unique_id: string
   /** Duration of the audio in seconds as defined by the sender */
   duration: number
   /** Optional. MIME type of the file as defined by the sender */
   mime_type?: string
   /** Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
   file_size?: number
}

/**
 * This object represents a video message (available in Telegram apps as of v.4.0).
 */
export interface VideoNote {
   /** Identifier for this file, which can be used to download or reuse the file */
   file_id: string
   /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
   file_unique_id: string
   /** Video width and height (diameter of the video message) as defined by the sender */
   length: number
   /** Duration of the video in seconds as defined by the sender */
   duration: number
   /** Optional. Video thumbnail */
   thumbnail?: PhotoSize
   /** Optional. File size in bytes */
   file_size?: number
}

/**
 * This object represents a video file.
 */
export interface Video {
   /** Identifier for this file, which can be used to download or reuse the file */
   file_id: string
   /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
   file_unique_id: string
   /** Video width as defined by the sender */
   width: number
   /** Video height as defined by the sender */
   height: number
   /** Duration of the video in seconds as defined by the sender */
   duration: number
   /** Optional. Video thumbnail */
   thumbnail?: PhotoSize
   /** Optional. Original filename as defined by the sender */
   file_name?: string
   /** Optional. MIME type of the file as defined by the sender */
   mime_type?: string
   /** Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
   file_size?: number
}

/**
 * This object represents a story.
 */
export interface Story {
   /** Chat that posted the story */
   chat: Chat
   /** Unique identifier for the story in the chat */
   id: number
}

/**
 * This object represents a general file (as opposed to photos, voice messages and audio files).
 */
export interface Document {
   /** Identifier for this file, which can be used to download or reuse the file */
   file_id: string
   /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
   file_unique_id: string
   /** Optional. Document thumbnail as defined by the sender */
   thumbnail?: PhotoSize
   /** Optional. Original filename as defined by the sender */
   file_name?: string
   /** Optional. MIME type of the file as defined by the sender */
   mime_type?: string
   /** Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
   file_size?: number
}

/**
 * This object represents an audio file to be treated as music by the Telegram clients.
 */
export interface Audio {
   /** Identifier for this file, which can be used to download or reuse the file */
   file_id: string
   /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
   file_unique_id: string
   /** Duration of the audio in seconds as defined by the sender */
   duration: number
   /** Optional. Performer of the audio as defined by the sender or by audio tags */
   performer?: string
   /** Optional. Title of the audio as defined by the sender or by audio tags */
   title?: string
   /** Optional. Original filename as defined by the sender */
   file_name?: string
   /** Optional. MIME type of the file as defined by the sender */
   mime_type?: string
   /** Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
   file_size?: number
   /** Optional. Thumbnail of the album cover to which the music file belongs */
   thumbnail?: PhotoSize
}

/**
 * This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound).
 */
export interface Animation {
   /** Identifier for this file, which can be used to download or reuse the file */
   file_id: string
   /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
   file_unique_id: string
   /** Video width as defined by the sender */
   width: number
   /** Video height as defined by the sender */
   height: number
   /** Duration of the video in seconds as defined by the sender */
   duration: number
   /** Optional. Animation thumbnail as defined by the sender */
   thumbnail?: PhotoSize
   /** Optional. Original animation filename as defined by the sender */
   file_name?: string
   /** Optional. MIME type of the file as defined by the sender */
   mime_type?: string
   /** Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
   file_size?: number
}

/**
 * This object represents one size of a photo or a file / sticker thumbnail.
 */
export interface PhotoSize {
   /** Identifier for this file, which can be used to download or reuse the file */
   file_id: string
   /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
   file_unique_id: string
   /** Photo width */
   width: number
   /** Photo height */
   height: number
   /** Optional. File size in bytes */
   file_size?: number
}

/**
 * The message was originally sent to a channel chat.
 */
export interface MessageOriginChannel {
   /** Type of the message origin, always “channel” */
   type: string
   /** Date the message was sent originally in Unix time */
   date: number
   /** Channel chat to which the message was originally sent */
   chat: Chat
   /** Unique message identifier inside the chat */
   message_id: number
   /** Optional. Signature of the original post author */
   author_signature?: string
}

/**
 * The message was originally sent on behalf of a chat to a group chat.
 */
export interface MessageOriginChat {
   /** Type of the message origin, always “chat” */
   type: string
   /** Date the message was sent originally in Unix time */
   date: number
   /** Chat that sent the message originally */
   sender_chat: Chat
   /** Optional. For messages originally sent by an anonymous chat administrator, original message author signature */
   author_signature?: string
}

/**
 * The message was originally sent by an unknown user.
 */
export interface MessageOriginHiddenUser {
   /** Type of the message origin, always “hidden_user” */
   type: string
   /** Date the message was sent originally in Unix time */
   date: number
   /** Name of the user that sent the message originally */
   sender_user_name: string
}

/**
 * The message was originally sent by a known user.
 */
export interface MessageOriginUser {
   /** Type of the message origin, always “user” */
   type: string
   /** Date the message was sent originally in Unix time */
   date: number
   /** User that sent the message originally */
   sender_user: User
}

/**
 * This object describes the origin of a message. It can be one of
 */
export interface MessageOrigin {}

/**
 * Describes reply parameters for the message that is being sent.
 */
export interface ReplyParameters {
   /** Identifier of the message that will be replied to in the current chat, or in the chat chat_id if it is specified */
   message_id: number
   /** Optional. If the message to be replied to is from a different chat, unique identifier for the chat or username of the channel (in the format @channelusername). Not supported for messages sent on behalf of a business account. */
   chat_id?: number | string
   /** Optional. Pass True if the message should be sent even if the specified message to be replied to is not found. Always False for replies in another chat or forum topic. Always True for messages sent on behalf of a business account. */
   allow_sending_without_reply?: boolean
   /** Optional. Quoted part of the message to be replied to; 0-1024 characters after entities parsing. The quote must be an exact substring of the message to be replied to, including bold, italic, underline, strikethrough, spoiler, and custom_emoji entities. The message will fail to send if the quote isn't found in the original message. */
   quote?: string
   /** Optional. Mode for parsing entities in the quote. See formatting options for more details. */
   quote_parse_mode?: string
   /** Optional. A JSON-serialized list of special entities that appear in the quote. It can be specified instead of quote_parse_mode. */
   quote_entities?: MessageEntity[]
   /** Optional. Position of the quote in the original message in UTF-16 code units */
   quote_position?: number
}

/**
 * This object contains information about a message that is being replied to, which may come from another chat or forum topic.
 */
export interface ExternalReplyInfo {
   /** Origin of the message replied to by the given message */
   origin: MessageOrigin
   /** Optional. Chat the original message belongs to. Available only if the chat is a supergroup or a channel. */
   chat?: Chat
   /** Optional. Unique message identifier inside the original chat. Available only if the original chat is a supergroup or a channel. */
   message_id?: number
   /** Optional. Options used for link preview generation for the original message, if it is a text message */
   link_preview_options?: LinkPreviewOptions
   /** Optional. Message is an animation, information about the animation */
   animation?: Animation
   /** Optional. Message is an audio file, information about the file */
   audio?: Audio
   /** Optional. Message is a general file, information about the file */
   document?: Document
   /** Optional. Message contains paid media; information about the paid media */
   paid_media?: PaidMediaInfo
   /** Optional. Message is a photo, available sizes of the photo */
   photo?: PhotoSize[]
   /** Optional. Message is a sticker, information about the sticker */
   sticker?: Sticker
   /** Optional. Message is a forwarded story */
   story?: Story
   /** Optional. Message is a video, information about the video */
   video?: Video
   /** Optional. Message is a video note, information about the video message */
   video_note?: VideoNote
   /** Optional. Message is a voice message, information about the file */
   voice?: Voice
   /** Optional. True, if the message media is covered by a spoiler animation */
   has_media_spoiler?: boolean
   /** Optional. Message is a shared contact, information about the contact */
   contact?: Contact
   /** Optional. Message is a dice with random value */
   dice?: Dice
   /** Optional. Message is a game, information about the game. More about games » */
   game?: Game
   /** Optional. Message is a scheduled giveaway, information about the giveaway */
   giveaway?: Giveaway
   /** Optional. A giveaway with public winners was completed */
   giveaway_winners?: GiveawayWinners
   /** Optional. Message is an invoice for a payment, information about the invoice. More about payments » */
   invoice?: Invoice
   /** Optional. Message is a shared location, information about the location */
   location?: Location
   /** Optional. Message is a native poll, information about the poll */
   poll?: Poll
   /** Optional. Message is a venue, information about the venue */
   venue?: Venue
}

/**
 * This object contains information about the quoted part of a message that is replied to by the given message.
 */
export interface TextQuote {
   /** Text of the quoted part of a message that is replied to by the given message */
   text: string
   /** Approximate quote position in the original message in UTF-16 code units as specified by the sender */
   position: number
   /** Optional. Special entities that appear in the quote. Currently, only bold, italic, underline, strikethrough, spoiler, and custom_emoji entities are kept in quotes. */
   entities?: MessageEntity[]
   /** Optional. True, if the quote was chosen manually by the message sender. Otherwise, the quote was added automatically by the server. */
   is_manual?: boolean
}

/**
 * This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc.
 */
export interface MessageEntity {
   /** Type of the entity. Currently, can be “mention” (@username), “hashtag” (#hashtag), “cashtag” ($USD), “bot_command” (/start@jobs_bot), “url” (https://telegram.org), “email” (do-not-reply@telegram.org), “phone_number” (+1-212-555-0123), “bold” (bold text), “italic” (italic text), “underline” (underlined text), “strikethrough” (strikethrough text), “spoiler” (spoiler message), “blockquote” (block quotation), “expandable_blockquote” (collapsed-by-default block quotation), “code” (monowidth string), “pre” (monowidth block), “text_link” (for clickable text URLs), “text_mention” (for users without usernames), “custom_emoji” (for inline custom emoji stickers) */
   type: string
   /** Offset in UTF-16 code units to the start of the entity */
   offset: number
   /** Length of the entity in UTF-16 code units */
   length: number
   /** Optional. For “text_link” only, URL that will be opened after user taps on the text */
   url?: string
   /** Optional. For “text_mention” only, the mentioned user */
   user?: User
   /** Optional. For “pre” only, the programming language of the entity text */
   language?: string
   /** Optional. For “custom_emoji” only, unique identifier of the custom emoji. Use getCustomEmojiStickers to get full information about the sticker */
   custom_emoji_id?: string
}

/**
 * This object describes a message that can be inaccessible to the bot. It can be one of
 */
export interface MaybeInaccessibleMessage {}

/**
 * This object describes a message that was deleted or is otherwise inaccessible to the bot.
 */
export interface InaccessibleMessage {
   /** Chat the message belonged to */
   chat: Chat
   /** Unique message identifier inside the chat */
   message_id: number
   /** Always 0. The field can be used to differentiate regular and inaccessible messages. */
   date: number
}

/**
 * This object represents a unique message identifier.
 */
export interface MessageId {
   /** Unique message identifier */
   message_id: number
}

/**
 * This object represents a message.
 */
export interface Message {
   /** Unique message identifier inside this chat */
   message_id: number
   /** Date the message was sent in Unix time. It is always a positive number, representing a valid date. */
   date: number
   /** Chat the message belongs to */
   chat: Chat
   /** Optional. Unique identifier of a message thread to which the message belongs; for supergroups only */
   message_thread_id?: number
   /** Optional. Sender of the message; may be empty for messages sent to channels. For backward compatibility, if the message was sent on behalf of a chat, the field contains a fake sender user in non-channel chats */
   from?: User
   /** Optional. Sender of the message when sent on behalf of a chat. For example, the supergroup itself for messages sent by its anonymous administrators or a linked channel for messages automatically forwarded to the channel's discussion group. For backward compatibility, if the message was sent on behalf of a chat, the field from contains a fake sender user in non-channel chats. */
   sender_chat?: Chat
   /** Optional. If the sender of the message boosted the chat, the number of boosts added by the user */
   sender_boost_count?: number
   /** Optional. The bot that actually sent the message on behalf of the business account. Available only for outgoing messages sent on behalf of the connected business account. */
   sender_business_bot?: User
   /** Optional. Unique identifier of the business connection from which the message was received. If non-empty, the message belongs to a chat of the corresponding business account that is independent from any potential bot chat which might share the same identifier. */
   business_connection_id?: string
   /** Optional. Information about the original message for forwarded messages */
   forward_origin?: MessageOrigin
   /** Optional. True, if the message is sent to a forum topic */
   is_topic_message?: boolean
   /** Optional. True, if the message is a channel post that was automatically forwarded to the connected discussion group */
   is_automatic_forward?: boolean
   /** Optional. For replies in the same chat and message thread, the original message. Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply. */
   reply_to_message?: Message
   /** Optional. Information about the message that is being replied to, which may come from another chat or forum topic */
   external_reply?: ExternalReplyInfo
   /** Optional. For replies that quote part of the original message, the quoted part of the message */
   quote?: TextQuote
   /** Optional. For replies to a story, the original story */
   reply_to_story?: Story
   /** Optional. Bot through which the message was sent */
   via_bot?: User
   /** Optional. Date the message was last edited in Unix time */
   edit_date?: number
   /** Optional. True, if the message can't be forwarded */
   has_protected_content?: boolean
   /** Optional. True, if the message was sent by an implicit action, for example, as an away or a greeting business message, or as a scheduled message */
   is_from_offline?: boolean
   /** Optional. The unique identifier of a media message group this message belongs to */
   media_group_id?: string
   /** Optional. Signature of the post author for messages in channels, or the custom title of an anonymous group administrator */
   author_signature?: string
   /** Optional. For text messages, the actual UTF-8 text of the message */
   text?: string
   /** Optional. For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text */
   entities?: MessageEntity[]
   /** Optional. Options used for link preview generation for the message, if it is a text message and link preview options were changed */
   link_preview_options?: LinkPreviewOptions
   /** Optional. Unique identifier of the message effect added to the message */
   effect_id?: string
   /** Optional. Message is an animation, information about the animation. For backward compatibility, when this field is set, the document field will also be set */
   animation?: Animation
   /** Optional. Message is an audio file, information about the file */
   audio?: Audio
   /** Optional. Message is a general file, information about the file */
   document?: Document
   /** Optional. Message contains paid media; information about the paid media */
   paid_media?: PaidMediaInfo
   /** Optional. Message is a photo, available sizes of the photo */
   photo?: PhotoSize[]
   /** Optional. Message is a sticker, information about the sticker */
   sticker?: Sticker
   /** Optional. Message is a forwarded story */
   story?: Story
   /** Optional. Message is a video, information about the video */
   video?: Video
   /** Optional. Message is a video note, information about the video message */
   video_note?: VideoNote
   /** Optional. Message is a voice message, information about the file */
   voice?: Voice
   /** Optional. Caption for the animation, audio, document, paid media, photo, video or voice */
   caption?: string
   /** Optional. For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption */
   caption_entities?: MessageEntity[]
   /** Optional. True, if the caption must be shown above the message media */
   show_caption_above_media?: boolean
   /** Optional. True, if the message media is covered by a spoiler animation */
   has_media_spoiler?: boolean
   /** Optional. Message is a shared contact, information about the contact */
   contact?: Contact
   /** Optional. Message is a dice with random value */
   dice?: Dice
   /** Optional. Message is a game, information about the game. More about games » */
   game?: Game
   /** Optional. Message is a native poll, information about the poll */
   poll?: Poll
   /** Optional. Message is a venue, information about the venue. For backward compatibility, when this field is set, the location field will also be set */
   venue?: Venue
   /** Optional. Message is a shared location, information about the location */
   location?: Location
   /** Optional. New members that were added to the group or supergroup and information about them (the bot itself may be one of these members) */
   new_chat_members?: User[]
   /** Optional. A member was removed from the group, information about them (this member may be the bot itself) */
   left_chat_member?: User
   /** Optional. A chat title was changed to this value */
   new_chat_title?: string
   /** Optional. A chat photo was change to this value */
   new_chat_photo?: PhotoSize[]
   /** Optional. Service message: the chat photo was deleted */
   delete_chat_photo?: boolean
   /** Optional. Service message: the group has been created */
   group_chat_created?: boolean
   /** Optional. Service message: the supergroup has been created. This field can't be received in a message coming through updates, because bot can't be a member of a supergroup when it is created. It can only be found in reply_to_message if someone replies to a very first message in a directly created supergroup. */
   supergroup_chat_created?: boolean
   /** Optional. Service message: the channel has been created. This field can't be received in a message coming through updates, because bot can't be a member of a channel when it is created. It can only be found in reply_to_message if someone replies to a very first message in a channel. */
   channel_chat_created?: boolean
   /** Optional. Service message: auto-delete timer settings changed in the chat */
   message_auto_delete_timer_changed?: MessageAutoDeleteTimerChanged
   /** Optional. The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
   migrate_to_chat_id?: number
   /** Optional. The supergroup has been migrated from a group with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
   migrate_from_chat_id?: number
   /** Optional. Specified message was pinned. Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply. */
   pinned_message?: MaybeInaccessibleMessage
   /** Optional. Message is an invoice for a payment, information about the invoice. More about payments » */
   invoice?: Invoice
   /** Optional. Message is a service message about a successful payment, information about the payment. More about payments » */
   successful_payment?: SuccessfulPayment
   /** Optional. Message is a service message about a refunded payment, information about the payment. More about payments » */
   refunded_payment?: RefundedPayment
   /** Optional. Service message: users were shared with the bot */
   users_shared?: UsersShared
   /** Optional. Service message: a chat was shared with the bot */
   chat_shared?: ChatShared
   /** Optional. The domain name of the website on which the user has logged in. More about Telegram Login » */
   connected_website?: string
   /** Optional. Service message: the user allowed the bot to write messages after adding it to the attachment or side menu, launching a Web App from a link, or accepting an explicit request from a Web App sent by the method requestWriteAccess */
   write_access_allowed?: WriteAccessAllowed
   /** Optional. Telegram Passport data */
   passport_data?: PassportData
   /** Optional. Service message. A user in the chat triggered another user's proximity alert while sharing Live Location. */
   proximity_alert_triggered?: ProximityAlertTriggered
   /** Optional. Service message: user boosted the chat */
   boost_added?: ChatBoostAdded
   /** Optional. Service message: chat background set */
   chat_background_set?: ChatBackground
   /** Optional. Service message: forum topic created */
   forum_topic_created?: ForumTopicCreated
   /** Optional. Service message: forum topic edited */
   forum_topic_edited?: ForumTopicEdited
   /** Optional. Service message: forum topic closed */
   forum_topic_closed?: ForumTopicClosed
   /** Optional. Service message: forum topic reopened */
   forum_topic_reopened?: ForumTopicReopened
   /** Optional. Service message: the 'General' forum topic hidden */
   general_forum_topic_hidden?: GeneralForumTopicHidden
   /** Optional. Service message: the 'General' forum topic unhidden */
   general_forum_topic_unhidden?: GeneralForumTopicUnhidden
   /** Optional. Service message: a scheduled giveaway was created */
   giveaway_created?: GiveawayCreated
   /** Optional. The message is a scheduled giveaway message */
   giveaway?: Giveaway
   /** Optional. A giveaway with public winners was completed */
   giveaway_winners?: GiveawayWinners
   /** Optional. Service message: a giveaway without public winners was completed */
   giveaway_completed?: GiveawayCompleted
   /** Optional. Service message: video chat scheduled */
   video_chat_scheduled?: VideoChatScheduled
   /** Optional. Service message: video chat started */
   video_chat_started?: VideoChatStarted
   /** Optional. Service message: video chat ended */
   video_chat_ended?: VideoChatEnded
   /** Optional. Service message: new participants invited to a video chat */
   video_chat_participants_invited?: VideoChatParticipantsInvited
   /** Optional. Service message: data sent by a Web App */
   web_app_data?: WebAppData
   /** Optional. Inline keyboard attached to the message. login_url buttons are represented as ordinary url buttons. */
   reply_markup?: InlineKeyboardMarkup
}

/**
 * This object contains full information about a chat.
 */
export interface ChatFullInfo {
   /** Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
   id: number
   /** Type of the chat, can be either “private”, “group”, “supergroup” or “channel” */
   type: string
   /** Identifier of the accent color for the chat name and backgrounds of the chat photo, reply header, and link preview. See accent colors for more details. */
   accent_color_id: number
   /** The maximum number of reactions that can be set on a message in the chat */
   max_reaction_count: number
   /** Optional. Title, for supergroups, channels and group chats */
   title?: string
   /** Optional. Username, for private chats, supergroups and channels if available */
   username?: string
   /** Optional. First name of the other party in a private chat */
   first_name?: string
   /** Optional. Last name of the other party in a private chat */
   last_name?: string
   /** Optional. True, if the supergroup chat is a forum (has topics enabled) */
   is_forum?: boolean
   /** Optional. Chat photo */
   photo?: ChatPhoto
   /** Optional. If non-empty, the list of all active chat usernames; for private chats, supergroups and channels */
   active_usernames?: string[]
   /** Optional. For private chats, the date of birth of the user */
   birthdate?: Birthdate
   /** Optional. For private chats with business accounts, the intro of the business */
   business_intro?: BusinessIntro
   /** Optional. For private chats with business accounts, the location of the business */
   business_location?: BusinessLocation
   /** Optional. For private chats with business accounts, the opening hours of the business */
   business_opening_hours?: BusinessOpeningHours
   /** Optional. For private chats, the personal channel of the user */
   personal_chat?: Chat
   /** Optional. List of available reactions allowed in the chat. If omitted, then all emoji reactions are allowed. */
   available_reactions?: ReactionType[]
   /** Optional. Custom emoji identifier of the emoji chosen by the chat for the reply header and link preview background */
   background_custom_emoji_id?: string
   /** Optional. Identifier of the accent color for the chat's profile background. See profile accent colors for more details. */
   profile_accent_color_id?: number
   /** Optional. Custom emoji identifier of the emoji chosen by the chat for its profile background */
   profile_background_custom_emoji_id?: string
   /** Optional. Custom emoji identifier of the emoji status of the chat or the other party in a private chat */
   emoji_status_custom_emoji_id?: string
   /** Optional. Expiration date of the emoji status of the chat or the other party in a private chat, in Unix time, if any */
   emoji_status_expiration_date?: number
   /** Optional. Bio of the other party in a private chat */
   bio?: string
   /** Optional. True, if privacy settings of the other party in the private chat allows to use tg://user?id=<user_id> links only in chats with the user */
   has_private_forwards?: boolean
   /** Optional. True, if the privacy settings of the other party restrict sending voice and video note messages in the private chat */
   has_restricted_voice_and_video_messages?: boolean
   /** Optional. True, if users need to join the supergroup before they can send messages */
   join_to_send_messages?: boolean
   /** Optional. True, if all users directly joining the supergroup without using an invite link need to be approved by supergroup administrators */
   join_by_request?: boolean
   /** Optional. Description, for groups, supergroups and channel chats */
   description?: string
   /** Optional. Primary invite link, for groups, supergroups and channel chats */
   invite_link?: string
   /** Optional. The most recent pinned message (by sending date) */
   pinned_message?: Message
   /** Optional. Default chat member permissions, for groups and supergroups */
   permissions?: ChatPermissions
   /** Optional. True, if paid media messages can be sent or forwarded to the channel chat. The field is available only for channel chats. */
   can_send_paid_media?: boolean
   /** Optional. For supergroups, the minimum allowed delay between consecutive messages sent by each unprivileged user; in seconds */
   slow_mode_delay?: number
   /** Optional. For supergroups, the minimum number of boosts that a non-administrator user needs to add in order to ignore slow mode and chat permissions */
   unrestrict_boost_count?: number
   /** Optional. The time after which all messages sent to the chat will be automatically deleted; in seconds */
   message_auto_delete_time?: number
   /** Optional. True, if aggressive anti-spam checks are enabled in the supergroup. The field is only available to chat administrators. */
   has_aggressive_anti_spam_enabled?: boolean
   /** Optional. True, if non-administrators can only get the list of bots and administrators in the chat */
   has_hidden_members?: boolean
   /** Optional. True, if messages from the chat can't be forwarded to other chats */
   has_protected_content?: boolean
   /** Optional. True, if new chat members will have access to old messages; available only to chat administrators */
   has_visible_history?: boolean
   /** Optional. For supergroups, name of the group sticker set */
   sticker_set_name?: string
   /** Optional. True, if the bot can change the group sticker set */
   can_set_sticker_set?: boolean
   /** Optional. For supergroups, the name of the group's custom emoji sticker set. Custom emoji from this set can be used by all users and bots in the group. */
   custom_emoji_sticker_set_name?: string
   /** Optional. Unique identifier for the linked chat, i.e. the discussion group identifier for a channel and vice versa; for supergroups and channel chats. This identifier may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. */
   linked_chat_id?: number
   /** Optional. For supergroups, the location to which the supergroup is connected */
   location?: ChatLocation
}

/**
 * This object represents a chat.
 */
export interface Chat {
   /** Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
   id: number
   /** Type of the chat, can be either “private”, “group”, “supergroup” or “channel” */
   type: string
   /** Optional. Title, for supergroups, channels and group chats */
   title?: string
   /** Optional. Username, for private chats, supergroups and channels if available */
   username?: string
   /** Optional. First name of the other party in a private chat */
   first_name?: string
   /** Optional. Last name of the other party in a private chat */
   last_name?: string
   /** Optional. True, if the supergroup chat is a forum (has topics enabled) */
   is_forum?: boolean
}

/**
 * This object represents a Telegram user or bot.
 */
export interface User {
   /** Unique identifier for this user or bot. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. */
   id: number
   /** True, if this user is a bot */
   is_bot: boolean
   /** User's or bot's first name */
   first_name: string
   /** Optional. User's or bot's last name */
   last_name?: string
   /** Optional. User's or bot's username */
   username?: string
   /** Optional. IETF language tag of the user's language */
   language_code?: string
   /** Optional. True, if this user is a Telegram Premium user */
   is_premium?: boolean
   /** Optional. True, if this user added the bot to the attachment menu */
   added_to_attachment_menu?: boolean
   /** Optional. True, if the bot can be invited to groups. Returned only in getMe. */
   can_join_groups?: boolean
   /** Optional. True, if privacy mode is disabled for the bot. Returned only in getMe. */
   can_read_all_group_messages?: boolean
   /** Optional. True, if the bot supports inline queries. Returned only in getMe. */
   supports_inline_queries?: boolean
   /** Optional. True, if the bot can be connected to a Telegram Business account to receive its messages. Returned only in getMe. */
   can_connect_to_business?: boolean
   /** Optional. True, if the bot has a main Web App. Returned only in getMe. */
   has_main_web_app?: boolean
}

/**
 * Describes the current status of a webhook.All types used in the Bot API responses are represented as JSON-objects.It is safe to use 32-bit signed integers for storing all Integer fields unless otherwise noted.
 */
export interface WebhookInfo {
   /** Webhook URL, may be empty if webhook is not set up */
   url: string
   /** True, if a custom certificate was provided for webhook certificate checks */
   has_custom_certificate: boolean
   /** Number of updates awaiting delivery */
   pending_update_count: number
   /** Optional. Currently used webhook IP address */
   ip_address?: string
   /** Optional. Unix time for the most recent error that happened when trying to deliver an update via webhook */
   last_error_date?: number
   /** Optional. Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook */
   last_error_message?: string
   /** Optional. Unix time of the most recent error that happened when trying to synchronize available updates with Telegram datacenters */
   last_synchronization_error_date?: number
   /** Optional. The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery */
   max_connections?: number
   /** Optional. A list of update types the bot is subscribed to. Defaults to all update types except chat_member */
   allowed_updates?: string[]
}

/**
 * This object represents an incoming update.At most one of the optional parameters can be present in any given update.
 */
export interface Update {
   /** The update's unique identifier. Update identifiers start from a certain positive number and increase sequentially. This identifier becomes especially handy if you're using webhooks, since it allows you to ignore repeated updates or to restore the correct update sequence, should they get out of order. If there are no new updates for at least a week, then identifier of the next update will be chosen randomly instead of sequentially. */
   update_id: number
   /** Optional. New incoming message of any kind - text, photo, sticker, etc. */
   message?: Message
   /** Optional. New version of a message that is known to the bot and was edited. This update may at times be triggered by changes to message fields that are either unavailable or not actively used by your bot. */
   edited_message?: Message
   /** Optional. New incoming channel post of any kind - text, photo, sticker, etc. */
   channel_post?: Message
   /** Optional. New version of a channel post that is known to the bot and was edited. This update may at times be triggered by changes to message fields that are either unavailable or not actively used by your bot. */
   edited_channel_post?: Message
   /** Optional. The bot was connected to or disconnected from a business account, or a user edited an existing connection with the bot */
   business_connection?: BusinessConnection
   /** Optional. New message from a connected business account */
   business_message?: Message
   /** Optional. New version of a message from a connected business account */
   edited_business_message?: Message
   /** Optional. Messages were deleted from a connected business account */
   deleted_business_messages?: BusinessMessagesDeleted
   /** Optional. A reaction to a message was changed by a user. The bot must be an administrator in the chat and must explicitly specify "message_reaction" in the list of allowed_updates to receive these updates. The update isn't received for reactions set by bots. */
   message_reaction?: MessageReactionUpdated
   /** Optional. Reactions to a message with anonymous reactions were changed. The bot must be an administrator in the chat and must explicitly specify "message_reaction_count" in the list of allowed_updates to receive these updates. The updates are grouped and can be sent with delay up to a few minutes. */
   message_reaction_count?: MessageReactionCountUpdated
   /** Optional. New incoming inline query */
   inline_query?: InlineQuery
   /** Optional. The result of an inline query that was chosen by a user and sent to their chat partner. Please see our documentation on the feedback collecting for details on how to enable these updates for your bot. */
   chosen_inline_result?: ChosenInlineResult
   /** Optional. New incoming callback query */
   callback_query?: CallbackQuery
   /** Optional. New incoming shipping query. Only for invoices with flexible price */
   shipping_query?: ShippingQuery
   /** Optional. New incoming pre-checkout query. Contains full information about checkout */
   pre_checkout_query?: PreCheckoutQuery
   /** Optional. A user purchased paid media with a non-empty payload sent by the bot in a non-channel chat */
   purchased_paid_media?: PaidMediaPurchased
   /** Optional. New poll state. Bots receive only updates about manually stopped polls and polls, which are sent by the bot */
   poll?: Poll
   /** Optional. A user changed their answer in a non-anonymous poll. Bots receive new votes only in polls that were sent by the bot itself. */
   poll_answer?: PollAnswer
   /** Optional. The bot's chat member status was updated in a chat. For private chats, this update is received only when the bot is blocked or unblocked by the user. */
   my_chat_member?: ChatMemberUpdated
   /** Optional. A chat member's status was updated in a chat. The bot must be an administrator in the chat and must explicitly specify "chat_member" in the list of allowed_updates to receive these updates. */
   chat_member?: ChatMemberUpdated
   /** Optional. A request to join the chat has been sent. The bot must have the can_invite_users administrator right in the chat to receive these updates. */
   chat_join_request?: ChatJoinRequest
   /** Optional. A chat boost was added or changed. The bot must be an administrator in the chat to receive these updates. */
   chat_boost?: ChatBoostUpdated
   /** Optional. A boost was removed from a chat. The bot must be an administrator in the chat to receive these updates. */
   removed_chat_boost?: ChatBoostRemoved
}
