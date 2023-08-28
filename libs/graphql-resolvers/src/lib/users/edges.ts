import {Resolvers} from "@graphql-demo/graphql-schema";
import {UserData} from "@graphql-demo/data-persistence";

const resolvers: Resolvers = {
  User: {
    comments: async (parent, _variables, {getCurrentUser, prisma}) => {
      const userData = new UserData(prisma, await getCurrentUser());
      return await userData.readComments(parent);
    },
    posts: async (parent, _variables, {getCurrentUser, prisma}) => {
      const userData = new UserData(prisma, await getCurrentUser());
      return userData.readPosts(parent);
    },
    reactions: async (parent, _variables, {getCurrentUser, prisma}) => {
      const userData = new UserData(prisma, await getCurrentUser());
      return await userData.readReactions(parent);
    },
  },
};

export default resolvers;
