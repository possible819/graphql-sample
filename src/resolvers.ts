interface User {
  id: number
  name: string
  age: number
  companyId: number
}

interface Company {
  id: number
  name: string
}

let dummyUsers = Array.from({ length: 20 }, (_, idx) => {
  return {
    id: idx + 1,
    name: `Sample User ${idx + 1}`,
    age: Math.floor(Math.random() * 20),
    companyId: (idx % 3) + 1,
  }
}) as User[]

let dummyCompanies = Array.from({ length: 3 }, (_, idx) => {
  return {
    id: idx + 1,
    name: `Sample Company ${idx + 1}`,
  }
}) as Company[]

const resolvers = {
  Query: {
    user: (_: unknown, { name }: { name: string }) => {
      return dummyUsers.find((user) => user.name === name)
    },

    users: () => {
      return dummyUsers
    },
  },

  Mutation: {
    addUser: (_: unknown, { user }: { user: User }) => {
      const newUser = {
        ...user,
        id: dummyUsers[dummyUsers.length - 1].id + 1,
      }
      dummyUsers.push(newUser)
      return newUser
    },
    deleteUser: (_: unknown, { id }: { id: number }) => {
      dummyUsers = dummyUsers.filter((user) => user.id !== id)
    },
  },

  User: {
    company: (parent: User) => {
      return dummyCompanies.find((company) => company.id === parent.companyId)
    },
  },
}

export default resolvers
