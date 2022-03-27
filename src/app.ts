import { ApolloServer } from 'apollo-server'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { UserResolver } from './resolvers/User'

buildSchema({
  resolvers: [UserResolver],
}).then((schema) => {
  const server = new ApolloServer({ schema })

  server.listen(8080).then(() => {
    console.log('Apollo Server is running on 8080')
  })
})
