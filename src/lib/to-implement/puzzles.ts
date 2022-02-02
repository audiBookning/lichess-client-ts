import { ClienteType } from '../client.js'

export type PuzzleType = {
  /*
   * TO BE IMPLEMENTED
   */
  /**
   * @description Get the daily Lichess puzzle in JSON format. Alternatively, you can [post it in your slack workspace](https://lichess.org/daily-puzzle-slack).
   *
   * @tags Puzzles
   * @name ApiPuzzleDaily
   * @summary Get the daily puzzle
   * @request GET:/api/puzzle/daily
   * @response `200` `PuzzleJson` The daily puzzle.
   */
  //apiPuzzleDaily():any
  /**
   * @description Download your puzzle activity in [ndjson](#section/Introduction/Streaming-with-ND-JSON) format. Puzzle activity is sorted by reverse chronological order (most recent first) We recommend streaming the response, for it can be very long.
   *
   * @tags Puzzles
   * @name ApiPuzzleActivity
   * @summary Get your puzzle activity
   * @request GET:/api/puzzle/activity
   * @secure
   * @response `200` `PuzzleRoundJson` The puzzle activity of the logged in user.
   */
  //apiPuzzleActivity():any
  /**
   * @description Download your [puzzle dashboard](https://lichess.org/training/dashboard/30/dashboard) as JSON. Also includes all puzzle themes played, with aggregated results. Allows re-creating the [improvement/strengths](https://lichess.org/training/dashboard/30/improvementAreas) interfaces.
   *
   * @tags Puzzles
   * @name ApiPuzzleDashboard
   * @summary Get your puzzle dashboard
   * @request GET:/api/puzzle/dashboard/{days}
   * @secure
   * @response `200` `PuzzleDashboardJson` The puzzle dashboard of the logged in user.
   */
  //apiPuzzleDashboard():any
  /**
   * @description Download the [storm dashboard](https://lichess.org/storm/dashboard/mrbasso) of any player as JSON. Contains the aggregated highscores, and the history of storm runs aggregated by days. Use `?days=0` if you only care about the highscores.
   *
   * @tags Puzzles
   * @name ApiStormDashboard
   * @summary Get the storm dashboard of a player
   * @request GET:/api/storm/dashboard/{username}
   * @response `200` `StormDashboardJson` The storm dashboard of a player.
   */
  //apiStormDashboard():any
}

export type PuzzleFunc = (client: ClienteType) => PuzzleType

const Puzzle: PuzzleFunc = (client: ClienteType): PuzzleType => {
  const _client = client
  return {}
}

export { Puzzle }
