import { ClienteType } from '../client.js'

export type OpeningExplorerType = {
  /*
   * TO BE IMPLEMENTED
   */
  // TODO: See API
}

export type OpeningExplorerFunc = (client: ClienteType) => OpeningExplorerType

const OpeningExplorer: OpeningExplorerFunc = (
  client: ClienteType
): OpeningExplorerType => {
  const _client = client
  return {}
}

export { OpeningExplorer }
