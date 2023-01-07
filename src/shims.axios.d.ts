import { AxiosHeaders } from 'axios'

declare module 'axios' {
  export interface AxiosHeaders {
    Authorization?: string
  }
}
