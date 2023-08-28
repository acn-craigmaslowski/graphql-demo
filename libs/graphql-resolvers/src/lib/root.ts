import {Resolvers} from "@graphql-demo/graphql-schema";

export const resolvers: Resolvers = {
  Mutation: {
    noop: () => true,
  },
  Query: {
    heartbeat: () => true,
  },
};

export default resolvers;
