import { Response } from 'node-fetch'
import { ClienteType } from './client.js'
import { parse2 } from './ndjson-parser.js'

export type GamesType = {
  current: (params: any) => Promise<Response>
  currentTv: () => Promise<Response>
  get: (gameId: string, params?: any) => Promise<unknown>
  listByIds: (ids: string[], options?: any) => Promise<string>
  listByUser: (username: string, params?: any) => Promise<string>
}
export type GameFunc = (client: ClienteType) => GamesType

const Games: GameFunc = (client: ClienteType): GamesType => {
  const _client = client
  return {
    current: (params: any) => {
      const path = 'api/account/playing'
      return _client.get(path, {}, params)
    },
    currentTv: () => {
      const path = 'tv/channels'
      return _client.get(path)
    },
    get: (gameId: string, params = {}) => {
      const path = `game/export/${gameId}`
      const headers = {
        Accept: 'application/json',
      }
      return _client
        .get(path, headers, params)
        .then(async response => await response.json())
    },
    listByIds: (ids: string[], options = {}) => {
      const idString = ids.join(',')
      const path = 'games/export/_ids'
      const headers = {
        Accept: 'application/x-ndjson',
      }
      const client = _client.post(path, headers, idString, options)
      return parse2(client)
    },
    listByUser: (username: string, params = {}) => {
      const path = `api/games/user/${username}`
      const headers = {
        Accept: 'application/x-ndjson',
      }
      const client = _client.get(path, headers, params)
      return parse2(client)
    },
  }
}

export { Games }
