import { gql } from 'apollo-server'

const typeDefs = gql`
  type User {
    id: Int
    name: String
    age: Int
  }

  input NewUser {
    name: String!
    age: Int!
  }

  type Query {
    user(name: String!): User
    users: [User]
  }

  type Mutation {
    addUser(user: NewUser!): User
    deleteUser(id: Int!): Boolean
  }
`

export default typeDefs
