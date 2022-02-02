import {
  LichessUser,
  LiveStream,
  UserActivity,
  UserExtended,
  UserStatus,
} from '../types/types.js'
import { ClienteType } from './client.js'
import { parse2 } from './ndjson-parser.js'

export type UsersType = {
  // TODO: create types for activityByUsername from src\types\user-activity.json
  // REF: https://gist.github.com/ornicar/0ee2d2427cb74ed1a35e86f5ba09fabc
  activityByUsername: (username: string) => Promise<UserActivity>
  get: (username: string) => Promise<UserExtended>
  listByTeamId: (teamId: string) => Promise<UserExtended>
  listByUsernames: (usernames: string[]) => Promise<LichessUser[]>
  liveStreams: () => Promise<LiveStream>
  statusesByUsernames: (usernames: string[]) => Promise<UserStatus>
  listByTitle: any
}

export type UserFunc = (client: ClienteType) => UsersType

const Users: UserFunc = (client: ClienteType): UsersType => {
  const _client = client

  return {
    listByTitle: () => {
      return 'WARNING: Not implemented. listByTitle does not exist in the Lichess API'
    },
    activityByUsername: (username: string) => {
      const path = `api/user/${username}/activity`
      const headers = {
        Accept: 'application/json',
      }
      return _client.get(path, headers).then(async response => {
        return (await response.json()) as Promise<UserActivity>
      })
    },
    get: (username: string) => {
      console.log('************** Lichess Users GET')
      const path = `api/user/${username}`
      const headers = {
        Accept: 'application/json',
      }
      return _client.get(path, headers).then(async response => {
        return (await response.json()) as Promise<UserExtended>
      })
    },
    listByTeamId: (teamId: string) => {
      const path = `team/${teamId}/users`
      const headers = {
        Accept: 'application/x-ndjson',
      }
      const client = _client.get(path, headers)
      return parse2(client) as Promise<UserExtended>
    },
    listByUsernames: (usernames: string[]) => {
      const path = 'api/users'
      const headers = {
        Accept: 'application/json',
      }
      const usernameString = usernames.join(',')
      return _client
        .post(path, headers, usernameString)
        .then(async response => {
          return (await response.json()) as Promise<LichessUser[]>
        })
    },
    liveStreams: () => {
      const path = 'streamer/live'
      const headers = {
        Accept: 'application/json',
      }
      return _client.get(path, headers).then(async response => {
        return (await response.json()) as Promise<LiveStream>
      })
    },
    statusesByUsernames: (usernames: string[]) => {
      const path = `api/users/status`
      const usernameString = usernames.join(',')
      const headers = {
        Accept: 'application/json',
      }
      return _client
        .get(path, headers, { ids: usernameString })
        .then(async response => {
          return (await response.json()) as Promise<UserStatus>
        })
    },
  }
}

export { Users }
