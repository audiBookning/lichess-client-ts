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
  /**
   * @description Public informations about the logged in user.
   *
   * @tags Account
   * @name AccountMe
   * @summary Get my profile
   * @request GET:/api/account
   * @secure
   * @response `200` `UserExtended` The public informations about the logged in user.
   */
  account: () => Promise<UserExtended>
  /**
   * @description Read the email address of the logged in user.
   *
   * @tags Account
   * @name AccountEmail
   * @summary Get my email address
   * @request GET:/api/account/email
   * @secure
   * @response `200` `{ email?: string }` The email address of the logged in user.
   */
  email: () => Promise<Email>
  /**
   * @description Read the preferences of the logged in user. - <https://lichess.org/account/preferences/game-display> - <https://github.com/ornicar/lila/blob/master/modules/pref/src/main/Pref.scala>
   *
   * @tags Account
   * @name Account
   * @summary Get my preferences
   * @request GET:/api/account/preferences
   * @secure
   * @response `200` `{ prefs?: UserPreferences, language?: string }` The preferences of the logged in user.
   */
  preferences: () => Promise<MyPreferences>
  /**
   * @description Read the kid mode status of the logged in user. - <https://lichess.org/account/kid>
   *
   * @tags Account
   * @name AccountKid
   * @summary Get my kid mode status
   * @request GET:/api/account/kid
   * @secure
   * @response `200` `{ kid?: boolean }` The kid mode status of the logged in user.
   */
  kid(): Promise<KidOkGet>
  /**
   * @description Set the kid mode status of the logged in user. - <https://lichess.org/account/kid>
   *
   * @tags Account
   * @name AccountKidPost
   * @summary Set my kid mode status
   * @request POST:/api/account/kid
   * @secure
   * @response `200` `Ok` The kid mode status was set successfully for the logged in user.
   */
  kidOn: () => Promise<KidOkPost>
  /**
   * @description Set the kid mode status of the logged in user. - <https://lichess.org/account/kid>
   *
   * @tags Account
   * @name AccountKidPost
   * @summary Set my kid mode status
   * @request POST:/api/account/kid
   * @secure
   * @response `200` `Ok` The kid mode status was set successfully for the logged in user.
   */
  kidOff(): Promise<KidOkPost>
  /*
   * TO BE IMPLEMENTED
   */
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
        return (await response.json()) as Promise<unknown> as Promise<UserExtended>
      })
    },

    email: () => {
      const path = 'api/account/email'
      const headers = {
        Accept: 'application/json',
      }
      return _client.get(path, headers).then(async (response: Response) => {
        return (await response.json()) as Promise<unknown> as Promise<Email>
      })
    },
    preferences: () => {
      const path = 'api/account/preferences'
      const headers = {
        Accept: 'application/json',
      }
      return _client.get(path, headers).then(async (response: Response) => {
        return (await response.json()) as Promise<unknown> as Promise<MyPreferences>
      })
    },
    kid(): Promise<any> {
      const path = 'api/account/kid'
      const headers = {
        Accept: 'application/json',
      }
      return _client.get(path, headers).then(async (response: Response) => {
        return (await response.json()) as Promise<unknown> as Promise<KidOkGet>
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
          return (await response.json()) as Promise<unknown> as Promise<KidOkPost>
        })
    },
    kidOff() {
      const path = 'api/account/kid'
      const headers = {
        Accept: 'application/json',
      }
      const params = { v: false }
      return _client.post(path, headers, null, params).then(async response => {
        return (await response.json()) as Promise<unknown> as Promise<KidOkPost>
      })
    },
  }
}

export { Account }
