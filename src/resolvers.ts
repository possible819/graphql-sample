import { dummyUsers, User, dummyCompanies } from './dummy-data'

let users = [...dummyUsers]
let companies = [...dummyCompanies]

const resolvers = {
  Query: {
    user: (_: unknown, { name }: { name: string }) => {
      return users.find((user) => user.name === name)
    },

    users: () => {
      return users
    },
  },

  Mutation: {
    addUser: (_: unknown, { user }: { user: User }) => {
      const newUser = {
        ...user,
        id: users[users.length - 1].id + 1,
      }
      users.push(newUser)
      return newUser
    },
    deleteUser: (_: unknown, { id }: { id: number }) => {
      users = users.filter((user) => user.id !== id)
    },
  },

  User: {
    company: (parent: User) => {
      return companies.find((company) => company.id === parent.companyId)
    },
  },
}

export default resolvers
