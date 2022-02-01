import { Client } from './client'
import { NdjsonParser } from './ndjson-parser'

class Users {
  _client: Client

  constructor(client: Client) {
    this._client = client
  }

  activityByUsername(username: string) {
    const path = `api/user/${username}/activity`
    const headers = {
      Accept: 'application/json',
    }

    return this._client
      .get(path, headers)
      .then(async response => await response.json())
  }

  get(username: string) {
    const path = `api/user/${username}`
    const headers = {
      Accept: 'application/json',
    }

    return this._client
      .get(path, headers)
      .then(async response => await response.json())
  }

  /* Missing path in the Lichess API */
  /* listByTitle(titles: string[], params = {}) {
    const path = `api/users/titled`;
    const headers = {
      Accept: "application/x-ndjson",
    };

    const newParams = { ...params, title: titles.join(",") };

    return this._client
      .get(path, {}, newParams)
      .then(({ data }) => (data === "" ? [] : NdjsonParser.parse(data)));
  } */

  listByTeamId(teamId: string) {
    const path = `team/${teamId}/users`
    const headers = {
      Accept: 'application/x-ndjson',
    }

    const client = this._client.get(path, headers)
    return NdjsonParser.parse2(client)
  }

  listByUsernames(usernames: string[]) {
    const path = 'api/users'
    const headers = {
      Accept: 'application/json',
    }
    const usernameString = usernames.join(',')

    return this._client
      .post(path, headers, usernameString)
      .then(async response => await response.json())
  }

  liveStreams() {
    const path = 'streamer/live'
    const headers = {
      Accept: 'application/json',
    }

    return this._client
      .get(path, headers)
      .then(async response => await response.json())
  }

  statusesByUsernames(usernames: string[]) {
    const path = `api/users/status`
    const usernameString = usernames.join(',')
    const headers = {
      Accept: 'application/json',
    }

    return this._client
      .get(path, headers, { ids: usernameString })
      .then(async response => await response.json())
  }
}

export { Users }
