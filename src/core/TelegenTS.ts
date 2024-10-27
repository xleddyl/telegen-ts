import { Methods } from './telegram/autogen-methods'
import axios, { AxiosInstance, AxiosError, AxiosRequestConfig } from 'axios'
import * as FormData from 'form-data'

type TelegramResponse<T> = {
   ok: boolean
   result?: T
   error_code?: number
   description?: string
}

export type TelegenTSConfig = {
   token: string
   baseURL?: string
   timeout?: number
   retries?: number
   retryDelay?: number
}

export class TelegenTS extends Methods {
   private readonly client: AxiosInstance
   private readonly config: Required<TelegenTSConfig>
   private readonly defaultConfig: Omit<Required<TelegenTSConfig>, 'token'> = {
      baseURL: 'https://api.telegram.org',
      timeout: 30000,
      retries: 3,
      retryDelay: 1000,
   }

   constructor(config: TelegenTSConfig) {
      super()

      this.config = { ...this.defaultConfig, ...config }
      this.validateToken(this.config.token)
      this.client = this.createAxiosInstance()
   }

   private validateToken(token: string): void {
      if (!token || typeof token !== 'string' || !/^\d+:[A-Za-z0-9_-]{35}$/.test(token)) {
         throw new Error('Invalid bot token format. Expected format: "123456789:ABCdefGHIjklMNOpqrsTUVwxyz"')
      }
   }

   private createAxiosInstance(): AxiosInstance {
      return axios.create({
         baseURL: `${this.config.baseURL}/bot${this.config.token}`,
         timeout: this.config.timeout,
         headers: {
            'User-Agent': 'TelegenTS',
            Accept: 'application/json',
         },
      })
   }

   private async sleep(ms: number): Promise<void> {
      return new Promise((resolve) => setTimeout(resolve, ms))
   }

   private isFormData(data: any): boolean {
      return (
         data instanceof FormData ||
         (data &&
            Object.values(data).some(
               (value) => value instanceof Buffer || value instanceof Blob || value instanceof ReadableStream,
            ))
      )
   }

   private formatRequestData(body?: any, extra?: any): any {
      const data = { ...body, ...extra }

      if (this.isFormData(data)) {
         const formData = new FormData()

         for (const [key, value] of Object.entries(data)) {
            if (value !== undefined && value !== null) {
               if (typeof value === 'object' && !(value instanceof Buffer) && !(value instanceof Blob)) {
                  formData.append(key, JSON.stringify(value))
               } else {
                  formData.append(key, value)
               }
            }
         }

         return formData
      }

      return data
   }

   private handleError(error: unknown, methodName: string): never {
      if (axios.isAxiosError(error)) {
         const axiosError = error as AxiosError<TelegramResponse<any>>

         const telegramError = {
            method: methodName,
            error: {
               code: axiosError.response?.data?.error_code || axiosError.response?.status || 500,
               description: axiosError.response?.data?.description || axiosError.message,
               response: axiosError.response?.data,
               request: {
                  url: axiosError.config?.url,
                  method: axiosError.config?.method,
                  data: axiosError.config?.data,
               },
            },
         }

         throw telegramError
      }

      throw {
         method: methodName,
         error: {
            code: 500,
            description: error instanceof Error ? error.message : 'Unknown error occurred',
         },
      }
   }

   public async makeRequest(methodName: string, body?: any, extra?: any): Promise<any> {
      let lastError: unknown
      const data = this.formatRequestData(body, extra)
      const config: AxiosRequestConfig = {
         method: body === undefined ? 'get' : 'post',
         url: `/${methodName}`,
         ...(data && { data }),
      }

      if (data instanceof FormData) {
         config.headers = {
            ...config.headers,
            ...data.getHeaders(),
         }
      }

      for (let attempt = 1; attempt <= this.config.retries; attempt++) {
         try {
            const response = await this.client.request<TelegramResponse<any>>(config)

            if (!response.data.ok) {
               throw new Error(response.data.description || 'Unknown Telegram API error')
            }

            return response.data.result
         } catch (error) {
            lastError = error

            if (axios.isAxiosError(error) && error.response?.status && error.response.status < 500) {
               break
            }

            if (attempt < this.config.retries) {
               await this.sleep(this.config.retryDelay * attempt)
               continue
            }

            break
         }
      }

      return this.handleError(lastError, methodName)
   }

   /**
    * Get the current bot information
    */
   public async getMe(): Promise<any> {
      return this.makeRequest('getMe')
   }

   /**
    * Test the bot's auth token
    */
   public async testConnection(): Promise<boolean> {
      try {
         await this.getMe()
         return true
      } catch {
         return false
      }
   }

   /**
    * Get the base API URL being used
    */
   public getBaseUrl(): string {
      return this.config.baseURL
   }

   /**
    * Update the request timeout
    */
   public setTimeout(timeout: number): void {
      this.client.defaults.timeout = timeout
   }
}
