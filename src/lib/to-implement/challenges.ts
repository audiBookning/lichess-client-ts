import { ClienteType } from '../client.js'

export type ChallengesType = {
  /*
   * TO BE IMPLEMENTED
   */
  // TODO: See API
}

export type ChallengesFunc = (client: ClienteType) => ChallengesType

const Challenges: ChallengesFunc = (client: ClienteType): ChallengesType => {
  const _client = client
  return {}
}

export { Challenges }
