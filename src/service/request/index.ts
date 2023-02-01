import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

interface MyAxiosRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: {
    requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
    requestFailureFn?: (err: any) => any
    responseSuccessFn?: (config: T) => T
    responseFailureFn?: (err: any) => any
  }
}

class AxiosHttpRequest {
  instance: AxiosInstance
  constructor(config: MyAxiosRequestConfig) {
    this.instance = axios.create(config)

    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        console.log(err, '全局请求失败拦截')
      }
    )
    this.instance.interceptors.response.use(
      (config) => {
        return config.data
      },
      (err) => {
        console.log('全局响应失败拦截')
        throw err
      }
    )

    // axios 可以添加多个拦截器,不会进行覆盖
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn
    )
  }

  request<T = any>(config: MyAxiosRequestConfig<T>) {
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config)
    }
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res)
          }
          resolve(res)
        })
        .catch((err) => {
          console.log('instance err')
          reject(err)
        })
    })
  }

  get<T = any>(config: MyAxiosRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T = any>(config: MyAxiosRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T = any>(config: MyAxiosRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: MyAxiosRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default AxiosHttpRequest
