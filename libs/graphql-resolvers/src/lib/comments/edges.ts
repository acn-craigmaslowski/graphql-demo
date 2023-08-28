import {Resolvers} from "@graphql-demo/graphql-schema";
import {CommentData} from "@graphql-demo/data-persistence";

const resolvers: Resolvers = {
  Comment: {
    post: async (parent, _variables, {getCurrentUser, prisma}) => {
      const commentData = new CommentData(prisma, await getCurrentUser());
      return commentData.readPost(parent);
    },
    reactions: async (parent, _variables, {getCurrentUser, prisma}) => {
      const commentData = new CommentData(prisma, await getCurrentUser());
      return await commentData.readReactions(parent);
    },
    user: async (parent, _variables, {getCurrentUser, prisma}) => {
      const commentData = new CommentData(prisma, await getCurrentUser());
      return await commentData.readUser(parent);
    },
  },
};

export default resolvers;
