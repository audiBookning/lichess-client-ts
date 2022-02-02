import { ClienteType } from '../client.js'

export type MessagingType = {
  /*
   * TO BE IMPLEMENTED
   */
  // TODO: See API
}

export type MessagingFunc = (client: ClienteType) => MessagingType

const Messaging: MessagingFunc = (client: ClienteType): MessagingType => {
  const _client = client
  return {}
}

export { Messaging }
