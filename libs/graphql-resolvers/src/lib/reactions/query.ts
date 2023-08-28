import {ReactionData} from "@graphql-demo/data-persistence";
import {Resolvers} from "@graphql-demo/graphql-schema";

const resolvers: Resolvers = {
  Query: {
    reactions: async (_parent, queryVariables, {getCurrentUser, prisma}) => {
      const currentUser = await getCurrentUser();
      const reactionData = new ReactionData(prisma, currentUser);
      return await reactionData.readMany(queryVariables.input);
    },
  },
};

export default resolvers;
