import { ClienteType } from '../client.js'

export type TablebaseType = {
  /*
   * TO BE IMPLEMENTED
   */
  // TODO: See API
}

export type TablebaseFunc = (client: ClienteType) => TablebaseType

const Tablebase: TablebaseFunc = (client: ClienteType): TablebaseType => {
  const _client = client
  return {}
}

export { Tablebase }
