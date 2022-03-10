import { gql } from 'apollo-server'

const typeDefs = gql`
  type Company {
    id: Int
    name: String
  }

  type User {
    id: Int
    name: String
    age: Int
    company: Company
  }

  input NewUser {
    name: String!
    age: Int!
  }

  type Query {
    user(name: String!): User
    users: [User]
    company: Company
  }

  type Mutation {
    addUser(user: NewUser!): User
    deleteUser(id: Int!): Boolean
  }
`

export default typeDefs
