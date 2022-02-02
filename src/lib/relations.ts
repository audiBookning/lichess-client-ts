import { UserExtended } from '../types/types.js'
import { ClienteType } from './client.js'
import { parse2 } from './ndjson-parser.js'

export type RelationType = {
  followers: (username: string) => string
  following: (username: string) => Promise<UserExtended>
}

export type RelationFunc = (client: ClienteType) => RelationType

const Relations: RelationFunc = (client: ClienteType): RelationType => {
  const _client = client
  return {
    followers: (username: string) => {
      return 'WARNING: Not in the Lichess API. Not implemented'
    },
    following: (username: string) => {
      const path = `api/user/${username}/following`
      const headers = {
        Accept: 'application/x-ndjson',
      }
      const client = _client.get(path, headers)
      return parse2(client) as Promise<UserExtended>
    },
  }
}

export { Relations }
