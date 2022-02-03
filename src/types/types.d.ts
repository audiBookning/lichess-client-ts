import { BodyInit, HeadersInit, Response } from 'node-fetch'

export declare function Lichess(token: string): {
  account: AccountType
  games: GamesType
  relations: RelationType
  users: UsersType
}

export declare type RelationType = {
  /**
   * @description Not in the Lichess API
   *
   * @tags Relations
   * @name followers
   * @summary Get my profile
   * @response `200` 'WARNING: Not implemented. listByTitle does not exist in the Lichess API'
   */
  followers: (username: string) => string
  /**
   * @description Users are streamed as [ndjson](#section/Introduction/Streaming-with-ND-JSON).
   *
   * @tags Relations
   * @name ApiUserFollowing
   * @summary Get users followed the logged in user
   * @request GET:/api/rel/following
   * @secure
   * @response `200` `UserExtended` The list of users followed by a user.
   */
  following: (username: string) => Promise<UserExtended>
}
export declare type RelationFunc = (client: ClienteType) => RelationType
declare const Relations: RelationFunc
export { Relations }
export { Client }
export { Account }

export declare type UsersType = {
  /**
   * @description Read data to generate the activity feed of a user.
   *
   * @tags Users
   * @name ApiUserActivity
   * @summary Get user activity
   * @request GET:/api/user/{username}/activity
   * @response `200` `void` The activity feed of the user.
   */
  activityByUsername: (username: string) => Promise<UserActivity>
  /**
   * @description Read public data of a user.
   *
   * @tags Users
   * @name ApiUser
   * @summary Get user public data
   * @request GET:/api/user/{username}
   * @response `200` `UserExtended` The information of the user.
   */
  get: (username: string) => Promise<UserExtended>
  /**
   * @description Members are sorted by reverse chronological order of joining the team (most recent first). OAuth only required if the list of members is private. Members are streamed as [ndjson](#section/Introduction/Streaming-with-ND-JSON).
   *
   * @tags Users, Teams
   * @name TeamIdUsers
   * @summary Get members of a team
   * @request GET:/api/team/{teamId}/users
   * @secure
   * @response `200` `UserExtended` The list of users in the team.
   */
  listByTeamId: (teamId: string) => Promise<UserExtended>
  /**
   * @description Get up to 300 users by their IDs. Users are returned in the same order as the IDs. The method is `POST` so a longer list of IDs can be sent in the request body.
   *
   * @tags Users
   * @name ApiUsers
   * @summary Get users by ID
   * @request POST:/api/users
   * @response `200` `(User)[]` The list of users.
   */
  listByUsernames: (usernames: string[]) => Promise<LichessUser[]>
  /**
   * @description Get basic info about currently streaming users. This API is very fast and cheap on lichess side. So you can call it quite often (like once every 5 seconds).
   *
   * @tags Users
   * @name StreamerLive
   * @summary Get live streamers
   * @request GET:/streamer/live
   * @response `200` `({ id?: string, name?: string, title?: string | null, online?: boolean | null, patron?: boolean | null })[]` The list of live streamers and their respective information.
   */
  liveStreams: () => Promise<LiveStream>
  /**
   * @description Read the `online`, `playing` and `streaming` flags of several users. This API is very fast and cheap on lichess side. So you can call it quite often (like once every 5 seconds). Use it to track players and know when they're connected on lichess and playing games.
   *
   * @tags Users
   * @name ApiUsersStatus
   * @summary Get real-time users status
   * @request GET:/api/users/status
   * @response `200` `({ id?: string, name?: string, title?: string | null, online?: boolean | null, playing?: boolean | null, streaming?: boolean | null, patron?: boolean | null })[]` The list of users and their respective statuses.
   */
  statusesByUsernames: (usernames: string[]) => Promise<UserStatus>
  /**
   * @description Not in the Lichess API
   *
   * @tags User
   * @name listByTitle
   * @summary Get my profile
   * @response `200` 'WARNING: Not implemented. listByTitle does not exist in the Lichess API'
   */
  listByTitle: () => string
}
export declare type UserFunc = (client: ClienteType) => UsersType
export declare const Users: UserFunc

declare function parse2(stream: Promise<Response>): Promise<string>
declare const readStream: (
  processLine: (j: any) => any
) => (response: Response) => Promise<string>

export declare type GamesType = {
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
}
export declare type GameFunc = (client: ClienteType) => GamesType
export declare const Games: GameFunc

export declare type ClienteType = {
  get: (path: string, headers?: HeadersInit, params?: any) => Promise<Response>
  post: (
    path: string,
    headers: HeadersInit,
    body: BodyInit | null,
    params?: any
  ) => Promise<Response>
}
export declare type ClienteFunc = (token?: string | null) => ClienteType
declare const Client: ClienteFunc

export declare type AccountType = {
  /**
   * @description Public informations about the logged in user.
   *
   * @tags Account
   * @name AccountMe
   * @summary Get my profile
   * @request GET:/api/account
   * @secure
   * @response `200` `UserExtended` The public informations about the logged in user.
   */
  account: () => Promise<UserExtended>
  /**
   * @description Read the email address of the logged in user.
   *
   * @tags Account
   * @name AccountEmail
   * @summary Get my email address
   * @request GET:/api/account/email
   * @secure
   * @response `200` `{ email?: string }` The email address of the logged in user.
   */
  email: () => Promise<Email>
  /**
   * @description Read the preferences of the logged in user. - <https://lichess.org/account/preferences/game-display> - <https://github.com/ornicar/lila/blob/master/modules/pref/src/main/Pref.scala>
   *
   * @tags Account
   * @name Account
   * @summary Get my preferences
   * @request GET:/api/account/preferences
   * @secure
   * @response `200` `{ prefs?: UserPreferences, language?: string }` The preferences of the logged in user.
   */
  preferences: () => Promise<MyPreferences>
  /**
   * @description Read the kid mode status of the logged in user. - <https://lichess.org/account/kid>
   *
   * @tags Account
   * @name AccountKid
   * @summary Get my kid mode status
   * @request GET:/api/account/kid
   * @secure
   * @response `200` `{ kid?: boolean }` The kid mode status of the logged in user.
   */
  kid(): Promise<KidOkGet>
  /**
   * @description Set the kid mode status of the logged in user. - <https://lichess.org/account/kid>
   *
   * @tags Account
   * @name AccountKidPost
   * @summary Set my kid mode status
   * @request POST:/api/account/kid
   * @secure
   * @response `200` `Ok` The kid mode status was set successfully for the logged in user.
   */
  kidOn: () => Promise<KidOkPost>
  /**
   * @description Set the kid mode status of the logged in user. - <https://lichess.org/account/kid>
   *
   * @tags Account
   * @name AccountKidPost
   * @summary Set my kid mode status
   * @request POST:/api/account/kid
   * @secure
   * @response `200` `Ok` The kid mode status was set successfully for the logged in user.
   */
  kidOff(): Promise<KidOkPost>
}
export declare type AccountFunc = (client: ClienteType) => AccountType
declare const Account: (client: ClienteType) => AccountType

// TODO: implement the type
/**
 * @example
 *
 */
export type UserActivity = any

// TODO: implement the type
/**
 * @example
 * {
        Bot: {
            user: {
            id: 'leelachess',
            name: 'LeelaChess',
            title: 'BOT',
            },
            rating: 2660,
            gameId: 'Zznv9MIl',
        },
        Blitz: {
            user: {
            id: 'lekkerkortook',
            name: 'LekkerKortOok',
            },
            rating: 2603,
            gameId: 'hTJ4v7Mp',
        },
        'Racing Kings': {
            user: {
            id: 'chesslo21',
            name: 'chesslo21',
            },
            rating: 2123,
            gameId: 'lgCDl5Of',
        },
        UltraBullet: {
            user: {
            id: 'farmville',
            name: 'Farmville',
            },
            rating: 2338,
            gameId: 'NEY6OQ32',
        },
        Bullet: {
            user: {
            id: 'nurmibrah',
            name: 'nurmiBrah',
            },
            rating: 2499,
            gameId: '5LgyE516',
        },
        Classical: {
            user: {
            id: 'holden_m_j_thomas',
            name: 'Holden_M_J_Thomas',
            },
            rating: 1806,
            gameId: 'k3oLby6N',
        },
        'Three-check': {
            user: {
            id: 'pepellou',
            name: 'pepellou',
            patron: true,
            },
            rating: 1978,
            gameId: 'Og5RCvmu',
        },
        Antichess: {
            user: {
            id: 'maria-bakkar',
            name: 'maria-bakkar',
            },
            rating: 2103,
            gameId: 'toCr41yx',
        },
        Computer: {
            user: {
            id: 'oh_my_goat_im_so_bat',
            name: 'oh_my_goat_Im_so_bat',
            },
            rating: 2314,
            gameId: 'TkI4qZxu',
        },
        Horde: {
            user: {
            id: 'habitualchess',
            name: 'HabitualChess',
            },
            rating: 1803,
            gameId: 'oMofN63H',
        },
        Rapid: {
            user: {
            id: 'denpayd',
            name: 'DenpaYD',
            },
            rating: 2289,
            gameId: 'IcWOl8ee',
        },
        Atomic: {
            user: {
            id: 'meetyourdemise',
            name: 'MeetYourDemise',
            },
            rating: 2210,
            gameId: 'tvMxtCMN',
        },
        Crazyhouse: {
            user: {
            id: 'mathace',
            name: 'mathace',
            },
            rating: 2397,
            gameId: 'i3gTZlUb',
        },
        Chess960: {
            user: {
            id: 'voja_7',
            name: 'voja_7',
            },
            rating: 1782,
            gameId: 'lrXLcedu',
        },
        'King of the Hill': {
            user: {
            id: 'nadime',
            name: 'Nadime',
            },
            rating: 1500,
            gameId: 'DsQn8aEV',
        },
        'Top Rated': {
            user: {
            id: 'lekkerkortook',
            name: 'LekkerKortOok',
            },
            rating: 2603,
            gameId: 'hTJ4v7Mp',
        },
    }
 */
export type CurrentTvGames = any

// TODO: implement the type
/**
 * @example
 * {
        nowPlaying: [
            {
            fullId: 'knbD9FPUqhra',
            gameId: 'knbD9FPU',
            fen: 'rnbqkbnr/pp3pp1/8/3p3p/1PpPp3/P1P1P3/5PPP/RNBQKBNR',
            color: 'white',
            lastMove: 'c5c4',
            variant: {
                key: 'standard',
                name: 'Standard',
            },
            speed: 'correspondence',
            perf: 'correspondence',
            rated: true,
            opponent: {
                id: 'thibot',
                username: 'BOT thibot',
                rating: 1500,
            },
            isMyTurn: true,
            },
        ],
    }
 */
export type OngoingGames = any

// TODO: implement the type
/**
 * @example {"id":"VU0nyvsW","url":"https://lichess.org/VU0nyvsW",
 * "urlWhite":"https://lichess.org/VU0nyvsW?color=white",
 * "urlBlack":"https://lichess.org/VU0nyvsW?color=black",
 * "color":"random","direction":"out",
 * "timeControl": {"increment":2,"limit":300,"show":"5+2","type":"clock"},
 * "variant":{"key":"standard","name":"Standard","short":"Std"},
 * "challenger":{"id":"thibot","name":"thibot","online":true,
 * "provisional":false,"rating":1940,"title":"BOT"},
 * "destUser":{"id":"leelachess","name":"LeelaChess",
 * "online":true,"provisional":true,"rating":2670,"title":"BOT"},
 * "perf":{"icon":";","name":"Correspondence"},"rated":true,
 * "speed":"blitz","status":"created"}
 */
export type ChallengeOpenJson = any

export type GamePgn = string

export type LiveStream = {
  id?: string
  name?: string
  title?: string | null
  online?: boolean | null
  patron?: boolean | null
}

export type UserStatus = {
  id?: string
  name?: string
  title?: string | null
  online?: boolean | null
  playing?: boolean | null
  streaming?: boolean | null
  patron?: boolean | null
}

export type KidOkGet = { kid?: boolean }

export type KidOkPost = {
  ok?: boolean
}

export type MyPreferences = { prefs?: UserPreferences; language?: string }

export type UserPreferences = {
  /** @example true */
  dark?: boolean

  /** @example false */
  transp?: boolean

  /** @format uri */
  bgImg?: string

  /** @example false */
  is3d?: boolean
  theme?:
    | 'blue'
    | 'blue2'
    | 'blue3'
    | 'blue-marble'
    | 'canvas'
    | 'wood'
    | 'wood2'
    | 'wood3'
    | 'wood4'
    | 'maple'
    | 'maple2'
    | 'brown'
    | 'leather'
    | 'green'
    | 'marble'
    | 'green-plastic'
    | 'grey'
    | 'metal'
    | 'olive'
    | 'newspaper'
    | 'purple'
    | 'purple-diag'
    | 'pink'
    | 'ic'
  pieceSet?:
    | 'cburnett'
    | 'merida'
    | 'alpha'
    | 'pirouetti'
    | 'chessnut'
    | 'chess7'
    | 'reillycraig'
    | 'companion'
    | 'riohacha'
    | 'kosal'
    | 'leipzig'
    | 'fantasy'
    | 'spatial'
    | 'california'
    | 'pixel'
    | 'maestro'
    | 'fresca'
    | 'cardinal'
    | 'gioco'
    | 'tatiana'
    | 'staunty'
    | 'governor'
    | 'dubrovny'
    | 'icpieces'
    | 'shapes'
    | 'letter'
  theme3d?:
    | 'Black-White-Aluminium'
    | 'Brushed-Aluminium'
    | 'China-Blue'
    | 'China-Green'
    | 'China-Grey'
    | 'China-Scarlet'
    | 'Classic-Blue'
    | 'Gold-Silver'
    | 'Light-Wood'
    | 'Power-Coated'
    | 'Rosewood'
    | 'Marble'
    | 'Wax'
    | 'Jade'
    | 'Woodi'
  pieceSet3d?:
    | 'Basic'
    | 'Wood'
    | 'Metal'
    | 'RedVBlue'
    | 'ModernJade'
    | 'ModernWood'
    | 'Glass'
    | 'Trimmed'
    | 'Experimental'
    | 'Staunton'
    | 'CubesAndPi'
  soundSet?:
    | 'silent'
    | 'standard'
    | 'piano'
    | 'nes'
    | 'sfx'
    | 'futuristic'
    | 'robot'
    | 'music'
    | 'speech'

  /** @example 0 */
  blindfold?: number

  /** @example 2 */
  autoQueen?: number

  /** @example 2 */
  autoThreefold?: number

  /** @example 3 */
  takeback?: number

  /** @example 3 */
  moretime?: number

  /** @example 1 */
  clockTenths?: number

  /** @example true */
  clockBar?: boolean

  /** @example true */
  clockSound?: boolean

  /** @example true */
  premove?: boolean

  /** @example 2 */
  animation?: number

  /** @example true */
  captured?: boolean

  /** @example true */
  follow?: boolean

  /** @example true */
  highlight?: boolean

  /** @example true */
  destination?: boolean

  /** @example 2 */
  coords?: number

  /** @example 2 */
  replay?: number

  /** @example 4 */
  challenge?: number

  /** @example 3 */
  message?: number

  /** @example 2 */
  coordColor?: number

  /** @example 4 */
  submitMove?: number

  /** @example 1 */
  confirmResign?: number

  /** @example 1 */
  insightShare?: number

  /** @example 0 */
  keyboardMove?: number

  /** @example 0 */
  zen?: number

  /** @example 2 */
  moveEvent?: number

  /** @example 1 */
  rookCastle?: number
}

export type Email = { email?: string }

export type UserExtended = LichessUser & {
  url?: string
  playing?: string
  completionRate?: number
  count?: Count
  streaming?: boolean
  followable?: boolean
  following?: boolean
  blocking?: boolean
  followsYou?: boolean
}

export type Count = {
  /** @example 9265 */
  all?: number

  /** @example 7157 */
  rated?: number

  /** @example 531 */
  ai?: number

  /** @example 340 */
  draw?: number

  /** @example 331 */
  drawH?: number

  /** @example 4480 */
  loss?: number

  /** @example 4207 */
  lossH?: number

  /** @example 4440 */
  win?: number

  /** @example 4378 */
  winH?: number

  /** @example 71 */
  bookmark?: number

  /** @example 6 */
  playing?: number

  /** @example 66 */
  import?: number

  /** @example 0 */
  me?: number
}

export type Perf = {
  /** @example 2945 */
  games?: number

  /** @example 1609 */
  rating?: number

  /** @example 60 */
  rd?: number

  /** @example -22 */
  prog?: number
  prov?: boolean
}
export type StormPerf = {
  /** @example 44 */
  runs?: number

  /** @example 61 */
  score?: number
}

export type Perfs = {
  chess960?: Perf
  atomic?: Perf
  racingKings?: Perf
  ultraBullet?: Perf
  blitz?: Perf
  kingOfTheHill?: Perf
  bullet?: Perf
  correspondence?: Perf
  horde?: Perf
  puzzle?: Perf
  classical?: Perf
  rapid?: Perf
  storm?: StormPerf
}

export type Profile = {
  /** @example EC */
  country?: string
  location?: string

  /** @example Free bugs! */
  bio?: string

  /** @example Thibault */
  firstName?: string

  /** @example Duplessis */
  lastName?: string

  /** @example 1500 */
  fideRating?: number

  /** @example 1500 */
  uscfRating?: number

  /** @example 1500 */
  ecfRating?: number

  /**
   * @example github.com/ornicar
   * twitter.com/ornicar
   */
  links?: string
}

export type PlayTime = {
  /** @example 3296897 */
  total?: number

  /** @example 12134 */
  tv?: number
}

export type LichessUser = {
  /** @example georges */
  id?: string

  /** @example Georges */
  username?: string

  /** @example true */
  online?: boolean
  perfs?: Perfs

  /** @example 1290415680000 */
  createdAt?: number

  /** @example false */
  disabled?: boolean

  /** @example false */
  tosViolation?: boolean
  profile?: Profile

  /** @example 1522636452014 */
  seenAt?: number

  /** @example true */
  patron?: boolean

  /** @example true */
  verified?: boolean
  playTime?: PlayTime
  title?: Title
}

export enum Title {
  GM = 'GM',
  WGM = 'WGM',
  IM = 'IM',
  WIM = 'WIM',
  FM = 'FM',
  WFM = 'WFM',
  NM = 'NM',
  CM = 'CM',
  WCM = 'WCM',
  WNM = 'WNM',
  LM = 'LM',
  BOT = 'BOT',
}
