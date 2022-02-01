import { Client } from './client'
import { NdjsonParser } from './ndjson-parser'

class Relations {
  _client: Client

  constructor(client: Client) {
    this._client = client
  }

  followers(username: string) {
    const path = `api/user/${username}/followers`
    const headers = {
      Accept: 'application/x-ndjson',
    }

    return this._client
      .get(path, headers)
      .then(({ data }) => (data === '' ? [] : NdjsonParser.parse(data)))
  }

  following(username: string) {
    const path = `api/user/${username}/following`
    const headers = {
      Accept: 'application/x-ndjson',
    }

    return this._client
      .get(path, headers)
      .then(({ data }) => (data === '' ? [] : NdjsonParser.parse(data)))
  }
}

export { Relations }
