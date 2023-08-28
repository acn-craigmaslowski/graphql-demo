import {PostData} from "@graphql-demo/data-persistence";
import {Resolvers} from "@graphql-demo/graphql-schema";

const resolvers: Resolvers = {
  Mutation: {
    createPost: async (
      _parent,
      mutationVariables,
      {getCurrentUser, prisma}
    ) => {
      const currentUser = await getCurrentUser();
      const postData = new PostData(prisma, currentUser);
      const result = await postData.create(mutationVariables.input);
      return result;
    },
    updatePost: async (
      _parent,
      mutationVariables,
      {getCurrentUser, prisma}
    ) => {
      const currentUser = await getCurrentUser();
      const postData = new PostData(prisma, currentUser);
      const result = await postData.update(mutationVariables.input);
      return result;
    },
    deletePost: async (
      _parent,
      mutationVariables,
      {getCurrentUser, prisma}
    ) => {
      const currentUser = await getCurrentUser();
      const postData = new PostData(prisma, currentUser);
      const result = await postData.delete(mutationVariables.input);
      return result;
    },
  },
};

export default resolvers;
