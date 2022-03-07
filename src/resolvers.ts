interface User {
  id: number
  name: string
  age: number
}

let dummyUsers = Array.from({ length: 20 }, (_, idx) => {
  return {
    id: idx + 1,
    name: `Sample User ${idx + 1}`,
    age: Math.floor(Math.random() * 20),
  }
})

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
}

export default resolvers
