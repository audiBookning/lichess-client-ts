import { Response } from 'node-fetch'
import type { ClienteType } from './client.js'

export type AccountType = {
  account: () => Promise<unknown>
  email: () => Promise<unknown>
  preferences: () => Promise<unknown>
  kid(): Promise<any>
  kidOn: () => Promise<unknown>
  kidOff(): Promise<unknown>
}

export type AccountFunc = (client: ClienteType) => AccountType

const Account = (client: ClienteType): AccountType => {
  const _client = client

  return {
    account: () => {
      const path = 'api/account'
      const headers = {
        Accept: 'application/json',
      }
      return _client
        .get(path, headers)
        .then(async (response: Response) => await response.json())
    },

    email: () => {
      const path = 'api/account/email'
      const headers = {
        Accept: 'application/json',
      }
      return _client
        .get(path, headers)
        .then(async (response: Response) => await response.json())
    },
    preferences: () => {
      const path = 'api/account/preferences'
      const headers = {
        Accept: 'application/json',
      }
      return _client
        .get(path, headers)
        .then(async (response: Response) => await response.json())
    },
    kid(): Promise<any> {
      const path = 'api/account/kid'
      const headers = {
        Accept: 'application/json',
      }
      return _client
        .get(path, headers)
        .then(async (response: Response) => await response.json())
    },
    kidOn: () => {
      const path = 'api/account/kid'
      const headers = {
        Accept: 'application/json',
      }
      const params = { v: true }

      return _client
        .post(path, headers, null, params)
        .then(async (response: Response) => await response.json())
    },
    kidOff() {
      const path = 'api/account/kid'
      const headers = {
        Accept: 'application/json',
      }
      const params = { v: false }
      return _client
        .post(path, headers, null, params)
        .then(async response => await response.json())
    },
  }
}

export { Account }
