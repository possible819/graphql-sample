import users, { User } from './dataset'

const resolvers = {
  Query: {
    users: () => users,
  },
  Mutation: {
    newUser: (_: unknown, { user }: { user: User }) => {
      users.push(user)
    },
  },
}

export default resolvers
