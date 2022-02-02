import { ClienteType } from '../client.js'

export type TeamType = {
  /*
   * TO BE IMPLEMENTED
   */
  /**
   * @description Get all swiss tournaments of a team. Tournaments are sorted by reverse chronological order of start date (last starting first). Tournaments are streamed as [ndjson](#section/Introduction/Streaming-with-ND-JSON).
   *
   * @tags Teams, Swiss tournaments
   * @name ApiTeamSwiss
   * @summary Get team swiss tournaments
   * @request GET:/api/team/{teamId}/swiss
   * @response `200` `SwissTournament` The list of Swiss tournaments of a team.
   */
  //apiTeamSwiss():any
  /**
   * @description Infos about a team
   *
   * @tags Teams
   * @name TeamShow
   * @summary Get a single team
   * @request GET:/api/team/{teamId}
   * @response `200` `Team` The information about the team.
   */
  //teamShow():any
  /**
   * @description Paginator of the most popular teams.
   *
   * @tags Teams
   * @name TeamAll
   * @summary Get popular teams
   * @request GET:/api/team/all
   * @response `200` `{ currentPage?: number, maxPerPage?: number, currentPageResults?: (Team)[], nbResults?: number, previousPage?: number | null, nextPage?: number | null, nbPages?: number }` A paginated list of the most popular teams.
   */
  //teamAll():any
  /**
   * @description All the teams a player is a member of.
   *
   * @tags Teams
   * @name TeamOfUsername
   * @summary Teams of a player
   * @request GET:/api/team/of/{username}
   * @response `200` `(Team)[]` The list of teams the user is a member of.
   */
  //teamOfUsername():any
  /**
   * @description Paginator of team search results for a keyword.
   *
   * @tags Teams
   * @name TeamSearch
   * @summary Search teams
   * @request GET:/api/team/search
   * @response `200` `(Team)[]` The paginated list of teams.
   */
  //teamSearch():any
  /**
   * @description Get all Arena tournaments relevant to a team. Tournaments are sorted by reverse chronological order of start date (last starting first). Tournaments are streamed as [ndjson](#section/Introduction/Streaming-with-ND-JSON).
   *
   * @tags Teams, Arena tournaments
   * @name ApiTeamArena
   * @summary Get team Arena tournaments
   * @request GET:/api/team/{teamId}/arena
   * @response `200` `(ArenaTournament)[]` The list of Arena tournaments of a team.
   */
  //apiTeamArena():any
  /**
   * @description Join a team. If the team requires a password but the `password` field is incorrect, then the call fails with `403 Forbidden`. Similarly, if the team join policy requires a confirmation but the `message` parameter is not given, then the call fails with `403 Forbidden`.
   *
   * @tags Teams
   * @name TeamIdJoin
   * @summary Join a team
   * @request POST:/team/{teamId}/join
   * @secure
   * @response `200` `Ok` The request to join a team was successfully sent.
   */
  //teamIdJoin():any
  /**
   * @description Leave a team. - <https://lichess.org/team>
   *
   * @tags Teams
   * @name TeamIdQuit
   * @summary Leave a team
   * @request POST:/team/{teamId}/quit
   * @secure
   * @response `200` `Ok` The logged in user has successfully left the team.
   */
  //teamIdQuit():any
  /**
   * @description Kick a member out of one of your teams. - <https://lichess.org/team>
   *
   * @tags Teams
   * @name TeamIdKickUserId
   * @summary Kick a user from your team
   * @request POST:/team/{teamId}/kick/{userId}
   * @secure
   * @response `200` `Ok` The member has been kicked from the team.
   */
  //teamIdKickUserId():any
  /**
   * @description Send a private message to all members of a team. You must own the team.
   *
   * @tags Teams
   * @name TeamIdPmAll
   * @summary Message all members
   * @request POST:/team/{teamId}/pm-all
   * @secure
   * @response `200` `Ok` The message has successfully been sent to all team members.
   * @response `400` `Error` The sending of message to all team members has failed.
   */
  //teamIdPmAll():any
}

export type TeamFunc = (client: ClienteType) => TeamType

const Team: TeamFunc = (client: ClienteType): TeamType => {
  const _client = client
  return {}
}

export { Team }
