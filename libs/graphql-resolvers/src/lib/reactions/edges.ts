import {Resolvers} from "@graphql-demo/graphql-schema";
import {ReactionData} from "@graphql-demo/data-persistence";

const resolvers: Resolvers = {
  Reaction: {
    comment: async (parent, _variables, {getCurrentUser, prisma}) => {
      const reactionData = new ReactionData(prisma, await getCurrentUser());
      const result = await reactionData.readComment(parent);
      return result;
    },
    post: async (parent, _variables, {getCurrentUser, prisma}) => {
      const reactionData = new ReactionData(prisma, await getCurrentUser());
      return reactionData.readPost(parent);
    },
    user: async (parent, _variables, {getCurrentUser, prisma}) => {
      const reactionData = new ReactionData(prisma, await getCurrentUser());
      return await reactionData.readUser(parent);
    },
  },
};

export default resolvers;
