import fetch, { BodyInit, HeadersInit, RequestInit, Response } from 'node-fetch'
import { URL, URLSearchParams } from 'url'

class Client {
  baseUrl: string
  token: string | null
  headers: HeadersInit

  constructor(token: string | null = null) {
    this.token = token
    this.headers = token ? { Authorization: `Bearer ${token}` } : {}
    this.baseUrl = 'https://lichess.org/'
  }

  get(path: string, headers: HeadersInit = {}, params: any = {}) {
    return this.request('GET', path, headers, null, params)
  }

  post(
    path: string,
    headers: HeadersInit,
    body: BodyInit | null,
    params: any = {}
  ) {
    return this.request('POST', path, headers, body, params)
  }

  request(
    method: string,
    path: string,
    headers: HeadersInit = {},
    body: BodyInit | null = null,
    params: any = {}
  ): Promise<Response> {
    const url = new URL(this.baseUrl + path)
    url.search = new URLSearchParams(params).toString()

    const requestHeaders = Object.assign({}, this.headers, headers)

    const requestOptions: RequestInit = {
      method,
      headers: requestHeaders,
      body,
    }
    if (method == 'POST' && body) requestOptions.body = body

    return fetch(url.toString(), requestOptions)
  }
}

export { Client }
