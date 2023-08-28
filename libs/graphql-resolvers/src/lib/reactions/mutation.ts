import {ReactionData} from "@graphql-demo/data-persistence";
import {Resolvers} from "@graphql-demo/graphql-schema";

const resolvers: Resolvers = {
  Mutation: {
    createReaction: async (
      _parent,
      mutationVariables,
      {getCurrentUser, prisma}
    ) => {
      const currentUser = await getCurrentUser();
      const reactionData = new ReactionData(prisma, currentUser);
      const result = await reactionData.create(mutationVariables.input);
      return result;
    },
    updateReaction: async (
      _parent,
      mutationVariables,
      {getCurrentUser, prisma}
    ) => {
      const currentUser = await getCurrentUser();
      const reactionData = new ReactionData(prisma, currentUser);
      const result = await reactionData.update(mutationVariables.input);
      return result;
    },
    deleteReaction: async (
      _parent,
      mutationVariables,
      {getCurrentUser, prisma}
    ) => {
      const currentUser = await getCurrentUser();
      const reactionData = new ReactionData(prisma, currentUser);
      const result = await reactionData.delete(mutationVariables.input);
      return result;
    },
  },
};

export default resolvers;
