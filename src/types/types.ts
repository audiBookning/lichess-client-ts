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
