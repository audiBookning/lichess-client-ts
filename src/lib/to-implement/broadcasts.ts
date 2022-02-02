import { ClienteType } from '../client.js'

export type BroadcastsType = {
  /*
   * TO BE IMPLEMENTED
   */
  // TODO: See API
}

export type BroadcastsFunc = (client: ClienteType) => BroadcastsType

const Broadcast: BroadcastsFunc = (client: ClienteType): BroadcastsType => {
  const _client = client
  return {}
}

export { Broadcast }
