import {Resolvers} from "@graphql-demo/graphql-schema";
import {PostData} from "@graphql-demo/data-persistence";

const resolvers: Resolvers = {
  Post: {
    comments: async (parent, _variables, {getCurrentUser, prisma}) => {
      const postData = new PostData(prisma, await getCurrentUser());
      return postData.readComments(parent);
    },
    reactions: async (parent, _variables, {getCurrentUser, prisma}) => {
      const postData = new PostData(prisma, await getCurrentUser());
      return await postData.readReactions(parent);
    },
    user: async (parent, _variables, {getCurrentUser, prisma}) => {
      const postData = new PostData(prisma, await getCurrentUser());
      return await postData.readUser(parent);
    },
  },
};

export default resolvers;
