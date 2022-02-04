import { UserExtended } from '../types/types.js'
import { ClienteType } from './client.js'
import { parse2 } from './ndjson-parser.js'

export type RelationType = {
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
  /*
   * TO BE IMPLEMENTED
   */
  /**
   * @description Follow a player, adding them to your list of Lichess friends.
   *
   * @tags Relations
   * @name FollowUser
   * @summary Follow a player
   * @request POST:/api/rel/follow/{username}
   * @secure
   * @response `200` `Ok` The player was successfully added.
   */
  //followUser(): any
  /**
   * @description Unfollow a player, removing them from your list of Lichess friends.
   *
   * @tags Relations
   * @name UnfollowUser
   * @summary Unfollow a player
   * @request POST:/api/rel/unfollow/{username}
   * @secure
   * @response `200` `Ok` The player was successfully removed.
   */
  //unfollowUser():any
}

export type RelationFunc = (client: ClienteType) => RelationType

const Relations: RelationFunc = (client: ClienteType): RelationType => {
  const _client = client
  return {
    followers: (username: string) => {
      return 'WARNING: Not in the Lichess API. Not implemented'
    },
    following: (username: string) => {
      const path = `api/user/${username}/following`
      const headers = {
        Accept: 'application/x-ndjson',
      }
      const client = _client.get(path, headers)
      return parse2(client) as Promise<unknown> as Promise<UserExtended>
    },
  }
}

export { Relations }
