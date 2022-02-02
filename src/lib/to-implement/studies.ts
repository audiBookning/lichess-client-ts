import { ClienteType } from '../client.js'

export type StudiesType = {
  /*
   * TO BE IMPLEMENTED
   */
  // TODO: See API
}

export type StudiesFunc = (client: ClienteType) => StudiesType

const Studies: StudiesFunc = (client: ClienteType): StudiesType => {
  const _client = client
  return {}
}

export { Studies }
