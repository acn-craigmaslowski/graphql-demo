import {ApolloServer} from "@apollo/server";
import {ApolloServerPluginDrainHttpServer} from "@apollo/server/plugin/drainHttpServer";
import * as http from "http";

import {GraphQLDemoContext, typeDefs} from "@graphql-demo/graphql-schema";

import resolvers from "@graphql-demo/graphql-resolvers";

/**
 * Properties object to be passed to the `getApolloServer` function
 */
export interface GetApolloServerProps {
  /**
   * The `http.Server` instance the Apollo Server will be attached to.
   */
  httpServer: http.Server;
}

/**
 * A function that returns a `new ApolloServer()` instance configured for the
 * schema
 *
 * @param param0 Properties object
 * @returns A `new ApolloServer()` instance configured for PAT's schema
 */
export function getApolloServer({httpServer}: GetApolloServerProps) {
  return new ApolloServer<GraphQLDemoContext>({
    plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
    resolvers,
    typeDefs,
  });
}
