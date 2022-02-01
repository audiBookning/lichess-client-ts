import { Client } from './client'
import { NdjsonParser } from './ndjson-parser'

export class Users {
  _client: Client

  constructor(client: Client) {
    this._client = client
  }

  activityByUsername(username: string) {
    const path = `api/user/${username}/activity`
    const headers = {
      Accept: 'application/json',
    }

    return this._client.get(path, headers).then(({ data }) => JSON.parse(data))
  }

  get(username: string) {
    const path = `api/user/${username}`
    const headers = {
      Accept: 'application/json',
    }

    return this._client.get(path, headers).then(({ data }) => JSON.parse(data))
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

    return this._client
      .get(path, headers)
      .then(({ data }) => (data === '' ? [] : NdjsonParser.parse(data)))
  }

  listByUsernames(usernames: string[]) {
    const path = 'api/users'
    const headers = {
      Accept: 'application/json',
    }
    const usernameString = usernames.join(',')

    return this._client
      .post(path, headers, usernameString)
      .then(({ data }) => JSON.parse(data))
  }

  liveStreams() {
    const path = 'streamer/live'
    const headers = {
      Accept: 'application/json',
    }

    return this._client.get(path, headers).then(({ data }) => JSON.parse(data))
  }

  statusesByUsernames(usernames: string[]) {
    const path = `api/users/status`
    const usernameString = usernames.join(',')
    const headers = {
      Accept: 'application/json',
    }

    return this._client
      .get(path, headers, { ids: usernameString })
      .then(({ data }) => JSON.parse(data))
  }
}

module.exports = Users
