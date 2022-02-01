import axios, {
  AxiosPromise,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  Method,
} from 'axios'

class Client {
  baseUrl: string
  token: string | null
  headers: AxiosRequestHeaders

  constructor(token: string | null = null) {
    this.token = token
    this.headers = token ? { Authorization: `Bearer ${token}` } : {}
    this.baseUrl = 'https://lichess.org'
  }

  get(path: string, headers: AxiosRequestHeaders = {}, params: any = {}) {
    return this.request('GET', path, headers, {}, params)
  }

  post(
    path: string,
    headers: AxiosRequestHeaders,
    body: any,
    params: any = {}
  ) {
    return this.request('POST', path, headers, body, params)
  }

  request(
    method: Method,
    path: string,
    headers: AxiosRequestHeaders = {},
    body: any = null,
    params: any = {}
  ): AxiosPromise<any> {
    const url = path

    const requestHeaders = Object.assign({}, this.headers, headers)

    const requestOptions: AxiosRequestConfig<any> = {
      method,
      url,
      baseURL: this.baseUrl,
      headers: requestHeaders,
      params,
    }
    if (method == 'POST' && body) requestOptions.data = body

    return axios(requestOptions)
  }
}

export { Client }
