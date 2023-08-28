import {CommentData} from "@graphql-demo/data-persistence";
import {Resolvers} from "@graphql-demo/graphql-schema";

const resolvers: Resolvers = {
  Mutation: {
    createComment: async (
      _parent,
      mutationVariables,
      {getCurrentUser, prisma}
    ) => {
      const currentUser = await getCurrentUser();
      const commentData = new CommentData(prisma, currentUser);
      const result = await commentData.create(mutationVariables.input);
      return result;
    },
    updateComment: async (
      _parent,
      mutationVariables,
      {getCurrentUser, prisma}
    ) => {
      const currentUser = await getCurrentUser();
      const commentData = new CommentData(prisma, currentUser);
      const result = await commentData.update(mutationVariables.input);
      return result;
    },
    deleteComment: async (
      _parent,
      mutationVariables,
      {getCurrentUser, prisma}
    ) => {
      const currentUser = await getCurrentUser();
      const commentData = new CommentData(prisma, currentUser);
      const result = await commentData.delete(mutationVariables.input);
      return result;
    },
  },
};

export default resolvers;
