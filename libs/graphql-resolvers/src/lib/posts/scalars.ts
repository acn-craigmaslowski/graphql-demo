import {Resolvers} from "@graphql-demo/graphql-schema";
import {CommentData, ReactionData} from "@graphql-demo/data-persistence";

const resolvers: Resolvers = {
  Post: {
    commentCount: async (parent, _variables, {getCurrentUser, prisma}) => {
      const commentData = new CommentData(prisma, await getCurrentUser());
      return commentData.countComments(parent);
    },
    reactionCount: async (parent, _variables, {getCurrentUser, prisma}) => {
      const reactionData = new ReactionData(prisma, await getCurrentUser());
      return await reactionData.countPostReactions(parent);
    },
  },
};

export default resolvers;
