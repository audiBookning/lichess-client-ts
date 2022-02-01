import fetch, { BodyInit, HeadersInit, RequestInit, Response } from 'node-fetch'
import { URL, URLSearchParams } from 'url'

export type ClienteType = {
  get: (path: string, headers?: HeadersInit, params?: any) => Promise<Response>
  post: (
    path: string,
    headers: HeadersInit,
    body: BodyInit | null,
    params?: any
  ) => Promise<Response>
}

export type ClienteFunc = (token?: string | null) => ClienteType

const Client: ClienteFunc = (token: string | null = null): ClienteType => {
  const headers11: HeadersInit = token
    ? { Authorization: `Bearer ${token}` }
    : {}
  const baseUrl = 'https://lichess.org/'

  const request = (
    method: string,
    path: string,
    headers: HeadersInit = {},
    body: BodyInit | null = null,
    params: any = {}
  ): Promise<Response> => {
    console.log('************** Lichess Client Request')
    const url = new URL(baseUrl + path)
    url.search = new URLSearchParams(params).toString()

    const requestHeaders = Object.assign({}, headers11, headers)

    const requestOptions: RequestInit = {
      method,
      headers: requestHeaders,
      body,
    }
    if (method == 'POST' && body) requestOptions.body = body
    console.log(`Request url.toString(): `, url.toString())
    return fetch(url.toString(), requestOptions)
  }

  return {
    get: (path: string, headers: HeadersInit = {}, params: any = {}) => {
      console.log('************** Lichess Client GET')
      return request('GET', path, headers, null, params)
    },
    post: (
      path: string,
      headers: HeadersInit,
      body: BodyInit | null,
      params: any = {}
    ) => {
      return request('POST', path, headers, body, params)
    },
  }
}

export { Client }
