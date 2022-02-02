import { ClienteType } from '../client.js'

export type ArenaTournamentType = {
  /*
   * TO BE IMPLEMENTED
   */
  // TODO: See API
}

export type ArenaTournamentFunc = (client: ClienteType) => ArenaTournamentType

const ArenaTournament: ArenaTournamentFunc = (
  client: ClienteType
): ArenaTournamentType => {
  const _client = client
  return {}
}

export { ArenaTournament }
