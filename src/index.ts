import { Account } from './lib/account'
import { Client } from './lib/client'
import { Games } from './lib/games'
import { Relations } from './lib/relations'
import { Users } from './lib/users'

class Lichess {
  _account: Account
  _games: Games
  _relations: Relations
  _users: Users

  constructor(token: string) {
    const client = new Client(token)
    this._account = new Account(client)
    this._games = new Games(client)
    this._relations = new Relations(client)
    this._users = new Users(client)
  }

  get account() {
    return this._account
  }

  get games() {
    return this._games
  }

  get relations() {
    return this._relations
  }

  get users() {
    return this._users
  }
}

export { Lichess }
