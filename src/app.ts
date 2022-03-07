import { ApolloServer } from 'apollo-server'
import typeDefs from './typeDefs'
import resolvers from './resolvers'

const server = new ApolloServer({ typeDefs, resolvers })

server.listen(8080).then(() => {
  console.log('Apollo Server is running on 8080')
})
