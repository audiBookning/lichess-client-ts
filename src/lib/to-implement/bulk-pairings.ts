import { ClienteType } from '../client.js'

export type BulkPairingType = {
  /*
   * TO BE IMPLEMENTED
   */
  // TODO: See API
}

export type BulkPairingFunc = (client: ClienteType) => BulkPairingType

const BulkPairing: BulkPairingFunc = (client: ClienteType): BulkPairingType => {
  const _client = client
  return {}
}

export { BulkPairing }
