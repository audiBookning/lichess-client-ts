import {
  LichessUser,
  UserActivity,
  UserExtended,
  UserStatus,
} from '../types/types.js'
import { ClienteType } from './client.js'
import { parse2 } from './ndjson-parser.js'

export type UsersType = {
  // TODO: create types for activityByUsername from src\types\user-activity.json
  // REF: https://gist.github.com/ornicar/0ee2d2427cb74ed1a35e86f5ba09fabc
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
  liveStreams: () => Promise<UserStatus>
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
  /*
   * TO BE IMPLEMENTED
   */
  /**
   * @description Get the top 10 players for each speed and variant. See <https://lichess.org/player>.
   *
   * @tags Users
   * @name Player
   * @summary Get all top 10
   * @request GET:/player
   * @response `200` `Top10S` The list of variants with their respective top players.
   */
  //allTopTen(): any
  /**
   * @description Get the leaderboard for a single speed or variant (a.k.a. `perfType`). There is no leaderboard for correspondence or puzzles. See <https://lichess.org/player/top/200/bullet>.
   *
   * @tags Users
   * @name PlayerTopNbPerfType
   * @summary Get one leaderboard
   * @request GET:/player/top/{nb}/{perfType}
   * @response `200` `Leaderboard` The list of top players for the variant.
   */
  /* leaderboard(
    nb: number,
    perfType:
      | 'ultraBullet'
      | 'bullet'
      | 'blitz'
      | 'rapid'
      | 'classical'
      | 'chess960'
      | 'crazyhouse'
      | 'antichess'
      | 'atomic'
      | 'horde'
      | 'kingOfTheHill'
      | 'racingKings'
      | 'threeCheck'
  ): any */
  /**
   * @description Read rating history of a user, for all perf types. There is at most one entry per day. Format of an entry is `[year, month, day, rating]`. `month` starts at zero (January).
   *
   * @tags Users
   * @name ApiUserRatingHistory
   * @summary Get rating history of a user
   * @request GET:/api/user/{username}/rating-history
   * @response `200` `RatingHistory` The rating history of the user.
   */
  //apiUserRatingHistory():any
  /**
   * @description Read performance statistics of a user, for a single performance. Similar to the [performance pages on the website](https://lichess.org/@/thibault/perf/bullet).
   *
   * @tags Users
   * @name ApiUserPerf
   * @summary Get performance statistics of a user
   * @request GET:/api/user/{username}/perf/{perf}
   * @response `200` `PerfStat` The performance statistics of the user
   */
  //apiUserPerf(): any
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
  //teamIdUsers(): any
  /**
   * @description Get total number of games, and current score, of any two users. If the `matchup` flag is provided, and the users are currently playing, also gets the current match game number and scores.
   *
   * @tags Users
   * @name ApiCrosstable
   * @summary Get crosstable
   * @request GET:/api/crosstable/{user1}/{user2}
   * @response `200` `Crosstable` The crosstable of the two users.
   */
  //apiCrosstable():any
}

export type UserFunc = (client: ClienteType) => UsersType

const Users: UserFunc = (client: ClienteType): UsersType => {
  const _client = client

  return {
    listByTitle: () => {
      return 'WARNING: Not implemented. listByTitle does not exist in the Lichess API'
    },
    activityByUsername: (username: string) => {
      const path = `api/user/${username}/activity`
      const headers = {
        Accept: 'application/json',
      }
      return _client.get(path, headers).then(async response => {
        return (await response.json()) as Promise<UserActivity>
      })
    },
    get: (username: string) => {
      console.log('************** Lichess Users GET')
      const path = `api/user/${username}`
      const headers = {
        Accept: 'application/json',
      }
      return _client.get(path, headers).then(async response => {
        return (await response.json()) as Promise<UserExtended>
      })
    },
    listByTeamId: (teamId: string) => {
      const path = `team/${teamId}/users`
      const headers = {
        Accept: 'application/x-ndjson',
      }
      const client = _client.get(path, headers)
      return parse2(client) as Promise<UserExtended>
    },
    listByUsernames: (usernames: string[]) => {
      const path = 'api/users'
      const headers = {
        Accept: 'application/json',
      }
      const usernameString = usernames.join(',')
      return _client
        .post(path, headers, usernameString)
        .then(async response => {
          return (await response.json()) as Promise<LichessUser[]>
        })
    },
    liveStreams: () => {
      const path = 'streamer/live'
      const headers = {
        Accept: 'application/json',
      }
      return _client.get(path, headers).then(async response => {
        return (await response.json()) as Promise<UserStatus>
      })
    },
    statusesByUsernames: (usernames: string[]) => {
      const path = `api/users/status`
      const usernameString = usernames.join(',')
      const headers = {
        Accept: 'application/json',
      }
      return _client
        .get(path, headers, { ids: usernameString })
        .then(async response => {
          return (await response.json()) as Promise<UserStatus>
        })
    },
  }
}

export { Users }
