import { ClienteType } from './client.js'
import { parse2 } from './ndjson-parser.js'

export type RelationType = {
  followers: (username: string) => Promise<string>
  following: (username: string) => Promise<string>
}

export type RelationFunc = (client: ClienteType) => RelationType

const Relations: RelationFunc = (client: ClienteType): RelationType => {
  const _client = client
  return {
    followers: (username: string) => {
      const path = `api/user/${username}/followers`
      const headers = {
        Accept: 'application/x-ndjson',
      }
      const client = _client.get(path, headers)
      return parse2(client)
    },

    following: (username: string) => {
      const path = `api/user/${username}/following`
      const headers = {
        Accept: 'application/x-ndjson',
      }
      const client = _client.get(path, headers)
      return parse2(client)
    },
  }
}

export { Relations }
