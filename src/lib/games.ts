import { CurrentTvGames, GamePgn, OngoingGames } from '../types/types.js'
import { ClienteType } from './client.js'
import { parse2 } from './ndjson-parser.js'

export type GamesType = {
  /**
   * @description Get the ongoing games of the current user. Real-time and correspondence games are included. The most urgent games are listed first.
   *
   * @tags Games
   * @name ApiAccountPlaying
   * @summary Get my ongoing games
   * @request GET:/api/account/playing
   * @secure
   * @response `200` `ChallengeOpenJson` The ongoing games of the logged in user.
   */
  current: (params: any) => Promise<OngoingGames>
  /**
   * @description Get basic info about the best games being played for each speed and variant, but also computer games and bot games. See [lichess.org/tv](https://lichess.org/tv).
   *
   * @tags TV
   * @name TvChannels
   * @summary Get current TV games
   * @request GET:/api/tv/channels
   * @response `200` `ChallengeOpenJson` The list of games being played for each speed and variant.
   */
  currentTv: () => Promise<CurrentTvGames>
  /**
   * @description Download one game in either PGN or JSON format. Ongoing games have their last 3 moves omitted, after move 5.
   *
   * @tags Games
   * @name GamePgn
   * @summary Export one game
   * @request GET:/game/export/{gameId}
   * @response `200` `GamePgn` The game representation.
   */
  get: (gameId: string, params?: any) => Promise<GamePgn>
  /**
   * @description Download games by IDs in PGN or [ndjson](#section/Introduction/Streaming-with-ND-JSON) format, depending on the request Accept header. Games are sorted by reverse chronological order (most recent first) The method is `POST` so a longer list of IDs can be sent in the request body. 300 IDs can be submitted. Ongoing games have their last 3 moves omitted, after move 5.
   *
   * @tags Games
   * @name GamesExportIds
   * @summary Export games by IDs
   * @request POST:/games/export/_ids
   * @response `200` `GamePgn` The representation of the games.
   */
  listByIds: (ids: string[], options?: any) => Promise<GamePgn>
  /**
   * @description Download all games of any user in PGN or [ndjson](#section/Introduction/Streaming-with-ND-JSON) format. Games are sorted by reverse chronological order (most recent first) We recommend streaming the response, for it can be very long. <https://lichess.org/@/german11> for instance has more than 500,000 games. The game stream is throttled, depending on who is making the request: - Anonymous request: 20 games per second - [OAuth2 authenticated](#section/Authentication) request: 30 games per second - Authenticated, downloading your own games: 60 games per second
   *
   * @tags Games
   * @name ApiGamesUser
   * @summary Export games of a user
   * @request GET:/api/games/user/{username}
   * @secure
   * @response `200` `GamePgn` The games of the user.
   */
  listByUser: (username: string, params?: any) => Promise<GamePgn>
  /*
   * TO BE IMPLEMENTED
   */
  /**
   * @description Download the ongoing game, or the last game played, of a user. Available in either PGN or JSON format. If the game is ongoing, the 3 last moves are omitted.
   *
   * @tags Games
   * @name ApiUserCurrentGame
   * @summary Export ongoing game of a user
   * @request GET:/api/user/{username}/current-game
   * @response `200` `GamePgn` The ongoing (or last) game of a user.
   */
  //apiUserCurrentGame():any
  /**
   * @description Stream the games played between a list of users, in real time. Only games where **both players** are part of the list are included. By default, games are only sent to the stream when they start. To also get all ongoing games at the beginning of the stream, use the `withCurrentGames` flag. Maximum number of users: 300. Games are streamed as [ndjson](#section/Introduction/Streaming-with-ND-JSON). The method is `POST` so a longer list of IDs can be sent in the request body.
   *
   * @tags Games
   * @name GamesByUsers
   * @summary Stream games of users
   * @request POST:/api/stream/games-by-users
   * @response `200` `ChallengeOpenJson` The stream of the games played between the users.
   */
  //gamesByUsers():any
  /**
   * @description Stream positions and moves of any ongoing game, in [ndjson](#section/Introduction/Streaming-with-ND-JSON). A description of the game is sent as a first message. Then a message is sent each time a move is played. Finally a description of the game is sent when it finishes, and the stream is closed. After move 5, the stream intentionally remains 3 moves behind the game status, as to prevent cheat bots from using this API. No more than 8 game streams can be opened at the same time from the same IP address.
   *
   * @tags Games
   * @name StreamGame
   * @summary Stream moves of a game
   * @request GET:/api/stream/game/{id}
   * @response `200` `MoveStream` The stream of the game moves.
   */
  //streamGame():any
  /**
   * @description Import a game from PGN. See <https://lichess.org/paste>. Rate limiting: 200 games per hour for OAuth requests, 100 games per hour for anonymous requests. To broadcast ongoing games, consider [pushing to a broadcast instead](#operation/broadcastPush).
   *
   * @tags Games
   * @name GameImport
   * @summary Import one game
   * @request POST:/api/import
   * @secure
   * @response `200` `ChallengeOpenJson` The game was successfully imported.
   */
  //gameImport():any
}
export type GameFunc = (client: ClienteType) => GamesType

const Games: GameFunc = (client: ClienteType): GamesType => {
  const _client = client
  return {
    current: (params: any) => {
      const path = 'api/account/playing'
      return _client.get(
        path,
        {},
        params
      ) as Promise<unknown> as Promise<OngoingGames>
    },
    currentTv: () => {
      const path = 'tv/channels'
      return _client.get(path) as Promise<unknown> as Promise<CurrentTvGames>
    },
    get: (gameId: string, params = {}) => {
      const path = `game/export/${gameId}`
      const headers = {
        Accept: 'application/json',
      }
      return _client.get(path, headers, params).then(async response => {
        return (await response.json()) as Promise<unknown> as Promise<GamePgn>
      })
    },
    listByIds: (ids: string[], options = {}) => {
      const idString = ids.join(',')
      const path = 'games/export/_ids'
      const headers = {
        Accept: 'application/x-ndjson',
      }
      const client = _client.post(path, headers, idString, options)
      return parse2(client) as Promise<unknown> as Promise<GamePgn>
    },
    listByUser: (username: string, params = {}) => {
      const path = `api/games/user/${username}`
      const headers = {
        Accept: 'application/x-ndjson',
      }
      const client = _client.get(path, headers, params)
      return parse2(client) as Promise<unknown> as Promise<GamePgn>
    },
  }
}

export { Games }
