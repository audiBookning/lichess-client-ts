import type { AxiosRequestConfig } from 'axios'
import { Client } from './client'
import { NdjsonParser } from './ndjson-parser'

class Games {
  _client: Client

  constructor(client: Client) {
    this._client = client
  }

  current(params: Partial<AxiosRequestConfig<any>>) {
    const path = 'api/account/playing'

    return this._client.get(path, {}, params)
  }

  currentTv() {
    const path = 'tv/channels'

    return this._client.get(path)
  }

  get(gameId: string, params = {}) {
    const path = `game/export/${gameId}`

    const headers = {
      Accept: 'application/json',
    }

    return this._client
      .get(path, headers, params)
      .then(({ data }) => JSON.parse(data))
  }

  listByIds(ids: string[], options = {}) {
    const idString = ids.join(',')
    const path = 'games/export/_ids'

    const headers = {
      Accept: 'application/x-ndjson',
    }

    return this._client
      .post(path, headers, idString, options)
      .then(({ data }) => (data === '' ? [] : NdjsonParser.parse(data)))
  }

  listByUser(username: string, params = {}) {
    const path = `api/games/user/${username}`

    const headers = {
      Accept: 'application/x-ndjson',
    }

    return this._client
      .get(path, headers, params)
      .then(({ data }) => (data === '' ? [] : NdjsonParser.parse(data)))
  }
}

export { Games }
