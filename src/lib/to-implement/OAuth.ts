import { ClienteType } from '../client.js'

export type OAuthType = {
  /*
   * TO BE IMPLEMENTED
   */
  // TODO: See API
}

export type OAuthFunc = (client: ClienteType) => OAuthType

const OAuth: OAuthFunc = (client: ClienteType): OAuthType => {
  const _client = client
  return {}
}

export { OAuth }
