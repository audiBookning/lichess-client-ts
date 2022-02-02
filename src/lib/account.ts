import { Response } from 'node-fetch'
import {
  Email,
  KidOkGet,
  KidOkPost,
  MyPreferences,
  UserExtended,
} from '../types/types.js'
import type { ClienteType } from './client.js'

export type AccountType = {
  account: () => Promise<UserExtended>
  email: () => Promise<Email>
  preferences: () => Promise<MyPreferences>
  kid(): Promise<KidOkGet>
  kidOn: () => Promise<KidOkPost>
  kidOff(): Promise<KidOkPost>
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
      return _client.get(path, headers).then(async (response: Response) => {
        return (await response.json()) as Promise<UserExtended>
      })
    },

    email: () => {
      const path = 'api/account/email'
      const headers = {
        Accept: 'application/json',
      }
      return _client.get(path, headers).then(async (response: Response) => {
        return (await response.json()) as Promise<Email>
      })
    },
    preferences: () => {
      const path = 'api/account/preferences'
      const headers = {
        Accept: 'application/json',
      }
      return _client.get(path, headers).then(async (response: Response) => {
        return (await response.json()) as Promise<MyPreferences>
      })
    },
    kid(): Promise<any> {
      const path = 'api/account/kid'
      const headers = {
        Accept: 'application/json',
      }
      return _client.get(path, headers).then(async (response: Response) => {
        return (await response.json()) as Promise<KidOkGet>
      })
    },
    kidOn: () => {
      const path = 'api/account/kid'
      const headers = {
        Accept: 'application/json',
      }
      const params = { v: true }

      return _client
        .post(path, headers, null, params)
        .then(async (response: Response) => {
          return (await response.json()) as Promise<KidOkPost>
        })
    },
    kidOff() {
      const path = 'api/account/kid'
      const headers = {
        Accept: 'application/json',
      }
      const params = { v: false }
      return _client.post(path, headers, null, params).then(async response => {
        return (await response.json()) as Promise<KidOkPost>
      })
    },
  }
}

export { Account }
