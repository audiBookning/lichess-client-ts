import { Client } from './client'

class Account {
  _client: Client

  constructor(client: Client) {
    this._client = client
  }

  account() {
    const path = 'api/account'
    const headers = {
      Accept: 'application/json',
    }

    return this._client
      .get(path, headers)
      .then(async response => await response.json())
  }

  email(): Promise<any> {
    const path = 'api/account/email'
    const headers = {
      Accept: 'application/json',
    }

    return this._client
      .get(path, headers)
      .then(async response => await response.json())
  }

  preferences(): Promise<any> {
    const path = 'api/account/preferences'
    const headers = {
      Accept: 'application/json',
    }

    return this._client
      .get(path, headers)
      .then(async response => await response.json())
  }

  kid(): Promise<any> {
    const path = 'api/account/kid'
    const headers = {
      Accept: 'application/json',
    }

    return this._client
      .get(path, headers)
      .then(async response => await response.json())
  }

  kidOn(): Promise<any> {
    const path = 'api/account/kid'
    const headers = {
      Accept: 'application/json',
    }

    const params = { v: true }

    return this._client
      .post(path, headers, null, params)
      .then(async response => await response.json())
  }

  kidOff() {
    const path = 'api/account/kid'
    const headers = {
      Accept: 'application/json',
    }

    const params = { v: false }

    return this._client
      .post(path, headers, null, params)
      .then(async response => await response.json())
  }
}

export { Account }
