import { ClienteType } from '../client.js'

export type TVType = {
  /*
   * TO BE IMPLEMENTED
   */
  /**
   * @description Get basic info about the best games being played for each speed and variant, but also computer games and bot games. See [lichess.org/tv](https://lichess.org/tv).
   *
   * @tags TV
   * @name TvChannels
   * @summary Get current TV games
   * @request GET:/api/tv/channels
   * @response `200` `ChallengeOpenJson` The list of games being played for each speed and variant.
   */
  //tvChannels():any
  /**
   * @description Stream positions and moves of the current [TV game](https://lichess.org/tv) in [ndjson](#section/Introduction/Streaming-with-ND-JSON). A summary of the game is sent as a first message, and when the featured game changes. Try it with `curl https://lichess.org/api/tv/feed`.
   *
   * @tags TV
   * @name TvFeed
   * @summary Stream current TV game
   * @request GET:/api/tv/feed
   * @response `200` `ChallengeOpenJson` The stream of the current TV game.
   */
  //tvFeed():any
  /**
   * @description Get a list of ongoing games for a given TV channel. Similar to [lichess.org/games](https://lichess.org/games). Available in PGN or [ndjson](#section/Introduction/Streaming-with-ND-JSON) format, depending on the request Accept header.
   *
   * @tags TV
   * @name TvChannelGames
   * @summary Get best ongoing games of a TV channel
   * @request GET:/api/tv/{channel}
   * @response `200` `GamePgn` The representation of the games.
   */
  //tvChannelGames():any
}

export type TVFunc = (client: ClienteType) => TVType

const TV: TVFunc = (client: ClienteType): TVType => {
  const _client = client
  return {}
}

export { TV }
