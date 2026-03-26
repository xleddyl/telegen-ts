import { TelegenTS } from '../core/TelegenTS'

const mockRequest = jest.fn()
const mockCreate = jest.fn(() => ({
   request: mockRequest,
   defaults: { timeout: 30000 },
}))

jest.mock('axios', () => ({
   __esModule: true,
   default: {
      create: () => mockCreate(),
      isAxiosError: (err: any) => err?.isAxiosError === true,
   },
}))

const VALID_TOKEN = '123456789:ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghi'
const VALID_TOKEN_LONG = '123456789:ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnop'

describe('TelegenTS constructor', () => {
   test('creates instance with valid token', () => {
      const bot = new TelegenTS({ token: VALID_TOKEN })
      expect(bot).toBeInstanceOf(TelegenTS)
   })

   test('creates instance with long token (>35 chars secret)', () => {
      const bot = new TelegenTS({ token: VALID_TOKEN_LONG })
      expect(bot).toBeInstanceOf(TelegenTS)
   })

   test('throws on empty token', () => {
      expect(() => new TelegenTS({ token: '' })).toThrow('Invalid bot token format')
   })

   test('throws on malformed token (no colon)', () => {
      expect(() => new TelegenTS({ token: 'not-a-valid-token' })).toThrow('Invalid bot token format')
   })

   test('throws on token with short secret', () => {
      expect(() => new TelegenTS({ token: '123:abc' })).toThrow('Invalid bot token format')
   })

   test('applies default config values', () => {
      const bot = new TelegenTS({ token: VALID_TOKEN })
      expect(bot.getBaseUrl()).toBe('https://api.telegram.org')
   })

   test('accepts custom baseURL', () => {
      const bot = new TelegenTS({ token: VALID_TOKEN, baseURL: 'http://localhost:8081' })
      expect(bot.getBaseUrl()).toBe('http://localhost:8081')
   })
})

describe('TelegenTS.makeRequest', () => {
   let bot: TelegenTS

   beforeEach(() => {
      bot = new TelegenTS({ token: VALID_TOKEN, retries: 1, retryDelay: 0 })
      mockRequest.mockReset()
   })

   test('returns result on successful response', async () => {
      mockRequest.mockResolvedValueOnce({
         data: { ok: true, result: { id: 123, is_bot: true, first_name: 'TestBot' } },
      })

      const result = await bot.makeRequest('getMe')
      expect(result).toEqual({ id: 123, is_bot: true, first_name: 'TestBot' })
   })

   test('uses GET when no body provided', async () => {
      mockRequest.mockResolvedValueOnce({
         data: { ok: true, result: true },
      })

      await bot.makeRequest('getMe')
      expect(mockRequest).toHaveBeenCalledWith(expect.objectContaining({ method: 'get', url: '/getMe' }))
   })

   test('uses POST when body provided', async () => {
      mockRequest.mockResolvedValueOnce({
         data: { ok: true, result: { message_id: 1 } },
      })

      await bot.makeRequest('sendMessage', { chat_id: 123, text: 'hello' })
      expect(mockRequest).toHaveBeenCalledWith(expect.objectContaining({ method: 'post', url: '/sendMessage' }))
   })

   test('throws on ok: false response', async () => {
      mockRequest.mockResolvedValueOnce({
         data: { ok: false, description: 'Bad Request: chat not found' },
      })

      await expect(bot.makeRequest('sendMessage', { chat_id: 0, text: 'x' })).rejects.toBeDefined()
   })

   test('throws structured error on axios error (4xx)', async () => {
      const axiosError = {
         isAxiosError: true,
         response: {
            status: 400,
            data: { ok: false, error_code: 400, description: 'Bad Request' },
         },
         message: 'Request failed',
         config: { url: '/sendMessage', method: 'post' },
      }
      mockRequest.mockRejectedValueOnce(axiosError)

      try {
         await bot.makeRequest('sendMessage', { chat_id: 0, text: 'x' })
         fail('Should have thrown')
      } catch (err: any) {
         expect(err.method).toBe('sendMessage')
         expect(err.error.code).toBe(400)
         expect(err.error.description).toBe('Bad Request')
      }
   })
})

describe('TelegenTS.testConnection', () => {
   let bot: TelegenTS

   beforeEach(() => {
      bot = new TelegenTS({ token: VALID_TOKEN, retries: 1, retryDelay: 0 })
      mockRequest.mockReset()
   })

   test('returns true on successful getMe', async () => {
      mockRequest.mockResolvedValueOnce({
         data: { ok: true, result: { id: 123, is_bot: true } },
      })

      const result = await bot.testConnection()
      expect(result).toBe(true)
   })

   test('returns false on failed getMe', async () => {
      mockRequest.mockRejectedValueOnce(new Error('Network error'))

      const result = await bot.testConnection()
      expect(result).toBe(false)
   })
})
