import { ClienteType } from '../client.js'

export type BoardType = {
  /*
   * TO BE IMPLEMENTED
   */
  /**
   * @description Stream the events reaching a lichess user in real time as [ndjson](#section/Introduction/Streaming-with-ND-JSON). Each line is a JSON object containing a `type` field. Possible values are: - `gameStart` Start of a game - `gameFinish` Completion of a game - `challenge` A player sends you a challenge - `challengeCanceled` A player cancels their challenge to you - `challengeDeclined` The opponent declines your challenge When the stream opens, all current challenges and games are sent.
   *
   * @tags Board, Bot
   * @name ApiStreamEvent
   * @summary Stream incoming events
   * @request GET:/api/stream/event
   * @secure
   * @response `200` `(GameStartEvent | GameFinishEvent | ChallengeEvent | ChallengeCanceledEvent | ChallengeDeclinedEvent)` The stream of events reaching the logged in user.
   */
  //apiStreamEvent():any
  /**
   * @description Create a public seek, to start a game with a random player. ### Real-time seek Specify the `time` and `increment` clock values.  The response is streamed but doesn't contain any information. **Keep the connection open to keep the seek active**. If the client closes the connection, the seek is canceled. This way, if the client terminates, the user won't be paired in a game they wouldn't play. When the seek is accepted, or expires, the server closes the connection. **Make sure to also have an [Event stream](#operation/apiStreamEvent) open**, to be notified when a game starts. We recommend opening the [Event stream](#operation/apiStreamEvent) first, then the seek stream. This way, you won't miss the game event if the seek is accepted immediately. ### Correspondence seek Specify the `days` per turn value.  The response is not streamed, it immediately completes with the seek ID. The seek remains active on the server until it is joined by someone.
   *
   * @tags Board
   * @name ApiBoardSeek
   * @summary Create a seek
   * @request POST:/api/board/seek
   * @secure
   * @response `200` `void` The seek was successfully created.
   * @response `400` `Error` The creation of the seek failed.
   */
  //apiBoardSeek():any
  /**
   * @description Stream the state of a game being played with the Board API, as [ndjson](#section/Introduction/Streaming-with-ND-JSON). Use this endpoint to get updates about the game in real-time, with a single request. Each line is a JSON object containing a `type` field. Possible values are: - `gameFull` Full game data. All values are immutable, except for the `state` field. - `gameState` Current state of the game. Immutable values not included. Sent when a move is played, a draw is offered, or when the game ends. - `chatLine` Chat message sent by a user in the `room` "player" or "spectator". The first line is always of type `gameFull`.
   *
   * @tags Board
   * @name BoardGameStream
   * @summary Stream Board game state
   * @request GET:/api/board/game/stream/{gameId}
   * @secure
   * @response `200` `(GameFullEvent | GameStateEvent | ChatLineEvent)` The stream of the game.
   * @response `404` `NotFound` The game was not found.
   */
  //boardGameStream()
  /**
   * @description Make a move in a game being played with the Board API. The move can also contain a draw offer/agreement.
   *
   * @tags Board
   * @name BoardGameMove
   * @summary Make a Board move
   * @request POST:/api/board/game/{gameId}/move/{move}
   * @secure
   * @response `200` `Ok` The move was successfully made.
   * @response `400` `Error` The move failed.
   */
  //boardGameMove():any
  /**
   * @description Post a message to the player or spectator chat, in a game being played with the Board API.
   *
   * @tags Board
   * @name BoardGameChatPost
   * @summary Write in the chat
   * @request POST:/api/board/game/{gameId}/chat
   * @secure
   * @response `200` `Ok` The message was successfully posted in the chat.
   * @response `400` `Error` The posting of the message in the chat failed.
   */
  //boardGameChatPost():any
  /**
   * @description Get the messages posted in the game chat
   *
   * @tags Board
   * @name BoardGameChatGet
   * @summary Fetch the game chat
   * @request GET:/api/board/game/{gameId}/chat
   * @secure
   * @response `200` `GameChat` The messages posted in the chat.
   */
  //boardGameChatGet():any
  /**
   * @description Abort a game being played with the Board API.
   *
   * @tags Board
   * @name BoardGameAbort
   * @summary Abort a game
   * @request POST:/api/board/game/{gameId}/abort
   * @secure
   * @response `200` `Ok` The game successfully aborted.
   * @response `400` `Error` The abortion of the game failed.
   */
  //boardGameAbort():any
  /**
   * @description Resign a game being played with the Board API.
   *
   * @tags Board
   * @name BoardGameResign
   * @summary Resign a game
   * @request POST:/api/board/game/{gameId}/resign
   * @secure
   * @response `200` `Ok` The game was successfully resigned.
   * @response `400` `Error` The resigning from the game failed.
   */
  //boardGameResign():any
  /**
   * @description Create/accept/decline draw offers. - `yes`: Offer a draw, or accept the opponent's draw offer. - `no`: Decline a draw offer from the opponent.
   *
   * @tags Board
   * @name BoardGameDraw
   * @summary Handle draw offers
   * @request POST:/api/board/game/{gameId}/draw/{accept}
   * @secure
   * @response `200` `Ok` The draw offer was successfully sent.
   * @response `400` `Error` The draw offering failed.
   */
  //boardGameDraw():any
  /**
   * @description Create/accept/decline takebacks. - `yes`: Propose a takeback, or accept the opponent's takeback offer. - `no`: Decline a takeback offer from the opponent.
   *
   * @tags Board
   * @name BoardGameTakeback
   * @summary Handle takeback offers
   * @request POST:/api/board/game/{gameId}/takeback/{accept}
   * @secure
   * @response `200` `Ok` The takeback offer was successfully sent.
   * @response `400` `Error` The takeback offering failed.
   */
  //boardGameTakeback():any
  /**
   * @description Claim victory when the opponent has left the game for a while.
   *
   * @tags Board
   * @name BoardGameClaimVictory
   * @summary Claim victory of a game
   * @request POST:/api/board/game/{gameId}/claim-victory
   * @secure
   * @response `200` `Ok` The victory was successfully claimed.
   * @response `400` `Error` The victory claim has failed.
   */
  //boardGameClaimVictory():any
}

export type BoardFunc = (client: ClienteType) => BoardType

const Board: BoardFunc = (client: ClienteType): BoardType => {
  const _client = client
  return {}
}

export { Board }
