import { Methods } from './telegram/autogen-Methods'
import axios from 'axios'

export class TelegenTS extends Methods {
   public url: string = 'https://api.telegram.org/bot<token>/<method>'
   public token: string = ''

   constructor(token: string) {
      super()
      if (token === '' || token === undefined || typeof token !== 'string') throw new Error('invalid bot token')
      this.token = token
   }

   public async makeRequest(methodName: string, body?: any, extra?: any): Promise<any> {
      const method = body === undefined ? 'get' : 'post'
      try {
         const res = await axios({
            method,
            url: this.url.replace('<token>', this.token).replace('<method>', methodName),
            headers: {
               'Content-Type': 'multipart/form-data',
            },
            data: { ...body, ...extra },
         })
         return res.data.result
      } catch (e: any) {
         try {
            throw { method: methodName, error: e.response.data }
         } catch (e: any) {
            throw { method: methodName, error: e }
         }
      }
   }
}
