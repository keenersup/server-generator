import { ApolloServer, gql } from 'apollo-server'
import { mergeResolvers, mergeTypes, fileLoader } from 'merge-graphql-schemas'
import path from "path";

import { IN_PROD } from "./config";

(() => {
  const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './typeDefs')))
  const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')))

  const server = new ApolloServer({
    cors: {
      // origin: `${REACT_CLIENT_ADDRESS}:${REACT_CLIENT_PORT}`,
      credentials: true,
    },
    typeDefs,
    resolvers,
    // schemaDirectives,
    playground: IN_PROD ? false : {
      settings: {
        'request.credentials': 'include',
      }
    },
    context: async ({ req }) => {
      // const user = await addUser(req) || ''
      return {
        req,
        // models,
        // user,
      }
    }
  })

// const server = new ApolloServer({ typeDefs, resolvers });


// The `listen` method launches a web server.
  server.listen({ port: process.env.SERVER_PORT }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  })
})()
