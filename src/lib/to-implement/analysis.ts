import { ClienteType } from '../client.js'

export type AnalysisType = {
  /*
   * TO BE IMPLEMENTED
   */
  // TODO: See API
}

export type AnalysisFunc = (client: ClienteType) => AnalysisType

const Analysis: AnalysisFunc = (client: ClienteType): AnalysisType => {
  const _client = client
  return {}
}

export { Analysis }
