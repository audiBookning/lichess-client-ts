import { ClienteType } from '../client.js'

export type SimulType = {
  /*
   * TO BE IMPLEMENTED
   */
  // TODO: See API
}

export type SimulFunc = (client: ClienteType) => SimulType

const Simul: SimulFunc = (client: ClienteType): SimulType => {
  const _client = client
  return {}
}

export { Simul }
