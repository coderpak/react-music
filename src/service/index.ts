import AxiosHttpRequest from './request'

export const request1 = new AxiosHttpRequest({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 500,
  interceptors: {
    requestSuccessFn: (config) => {
      if (config.headers) {
        config.headers.Authorization = ''
      }
      return config
    }
  }
})
