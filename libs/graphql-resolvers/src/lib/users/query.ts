import {UserData} from "@graphql-demo/data-persistence";
import {Resolvers} from "@graphql-demo/graphql-schema";

const resolvers: Resolvers = {
  Query: {
    currentUser: async (_parent, queryVariables, {getCurrentUser}) => {
      return await getCurrentUser();
    },
    users: async (_parent, queryVariables, {getCurrentUser, prisma}) => {
      const currentUser = await getCurrentUser();
      const reactionData = new UserData(prisma, currentUser);
      const result = await reactionData.readOne(queryVariables.input);
      return result;
    },
  },
};

export default resolvers;
