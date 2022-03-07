import { gql } from "apollo-server";

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
        users: [User]
    }

    type Mutation {
        newUser(user: NewUser!): Boolean
    }
`

export default typeDefs