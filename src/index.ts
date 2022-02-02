import 'dotenv/config'
import { Account } from './lib/account.js'
import { Client } from './lib/client.js'
import { Games } from './lib/games.js'
import { Relations } from './lib/to-implement/relations.js'
import { Users } from './lib/users.js'

function Lichess(token: string) {
  const client = Client(token)
  return {
    account: Account(client),
    games: Games(client),
    relations: Relations(client),
    users: Users(client),
  }
}

export { Lichess }
