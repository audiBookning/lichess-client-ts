import { ClienteType } from './client.js'
import { parse2 } from './ndjson-parser.js'

export type UsersType = {
  activityByUsername: (username: string) => Promise<unknown>
  get: (username: string) => Promise<unknown>
  listByTeamId: (teamId: string) => Promise<string>
  listByUsernames: (usernames: string[]) => Promise<unknown>
  liveStreams: () => Promise<unknown>
  statusesByUsernames: (usernames: string[]) => Promise<unknown>
}

export type UserFunc = (client: ClienteType) => UsersType

const Users: UserFunc = (client: ClienteType): UsersType => {
  const _client = client

  return {
    activityByUsername: (username: string) => {
      const path = `api/user/${username}/activity`
      const headers = {
        Accept: 'application/json',
      }
      return _client
        .get(path, headers)
        .then(async response => await response.json())
    },
    get: (username: string) => {
      console.log('************** Lichess Users GET')
      const path = `api/user/${username}`
      const headers = {
        Accept: 'application/json',
      }
      return _client
        .get(path, headers)
        .then(async response => await response.json())
    },
    listByTeamId: (teamId: string) => {
      const path = `team/${teamId}/users`
      const headers = {
        Accept: 'application/x-ndjson',
      }
      const client = _client.get(path, headers)
      return parse2(client)
    },
    listByUsernames: (usernames: string[]) => {
      const path = 'api/users'
      const headers = {
        Accept: 'application/json',
      }
      const usernameString = usernames.join(',')
      return _client
        .post(path, headers, usernameString)
        .then(async response => await response.json())
    },
    liveStreams: () => {
      const path = 'streamer/live'
      const headers = {
        Accept: 'application/json',
      }
      return _client
        .get(path, headers)
        .then(async response => await response.json())
    },
    statusesByUsernames: (usernames: string[]) => {
      const path = `api/users/status`
      const usernameString = usernames.join(',')
      const headers = {
        Accept: 'application/json',
      }
      return _client
        .get(path, headers, { ids: usernameString })
        .then(async response => await response.json())
    },
  }
}

export { Users }
