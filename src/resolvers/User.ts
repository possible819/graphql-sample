import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { dummyUsers } from '../dummy-data'
import { User } from '../entities/User'

let users = [...dummyUsers]

@Resolver()
export class UserResolver {
  @Query((returns) => User)
  user(@Arg('name') name: string) {
    const foundUser = users.find((user) => user.name === name) || null
    if (!foundUser) throw new Error('No user found')

    return foundUser
  }

  @Query((returns) => [User])
  users() {
    return users
  }
}
