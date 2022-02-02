import { ClienteType } from '../client.js'

export type SwissTournamentType = {
  /*
   * TO BE IMPLEMENTED
   */
  // TODO: See API
}

export type SwissTournamentFunc = (client: ClienteType) => SwissTournamentType

const SwissTournament: SwissTournamentFunc = (
  client: ClienteType
): SwissTournamentType => {
  const _client = client
  return {}
}

export { SwissTournament }
