import { ClienteType } from '../client.js'

export type BotType = {
  /*
   * TO BE IMPLEMENTED
   */
  // TODO: See API
}

export type BotFunc = (client: ClienteType) => BotType

const Bot: BotFunc = (client: ClienteType): BotType => {
  const _client = client
  return {}
}

export { Bot }
