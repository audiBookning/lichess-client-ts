import { Client } from './client'
import { NdjsonParser } from './ndjson-parser'

class Games {
  _client: Client

  constructor(client: Client) {
    this._client = client
  }

  current(params: any) {
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
      .then(async response => await response.json())
  }

  listByIds(ids: string[], options = {}) {
    const idString = ids.join(',')
    const path = 'games/export/_ids'

    const headers = {
      Accept: 'application/x-ndjson',
    }

    const client = this._client.post(path, headers, idString, options)
    return new NdjsonParser().parse2(client)
  }

  listByUser(username: string, params = {}) {
    const path = `api/games/user/${username}`

    const headers = {
      Accept: 'application/x-ndjson',
    }

    const client = this._client.get(path, headers, params)
    return new NdjsonParser().parse2(client)
  }
}

export { Games }
