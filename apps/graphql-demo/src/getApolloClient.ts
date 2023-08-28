import {ApolloClient, InMemoryCache} from "@apollo/client";

/**
 * A function to get a `new ApolloClient()` instance configured for PAT's
 * graphql server
 *
 * @returns A `new ApolloClient()` instance configured for PAT's graphql server
 */
export function getApolloClient() {
  const cache = new InMemoryCache({
    typePolicies: {
      Comment: {keyFields: ["id"]},
      Post: {keyFields: ["id"]},
      Reaction: {keyFields: ["id"]},
      User: {keyFields: ["id"]},
    },
  });

  const client = new ApolloClient({
    cache,
    uri: `http://localhost:4000/graphql`,
  });

  return client;
}
