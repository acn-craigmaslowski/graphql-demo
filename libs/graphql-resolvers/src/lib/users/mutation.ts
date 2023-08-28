import {UserData} from "@graphql-demo/data-persistence";
import {Resolvers} from "@graphql-demo/graphql-schema";

const resolvers: Resolvers = {
  Mutation: {
    createUser: async (
      _parent,
      mutationVariables,
      {getCurrentUser, prisma}
    ) => {
      const currentUser = await getCurrentUser();
      const userData = new UserData(prisma, currentUser);
      const result = await userData.create(mutationVariables.input);
      return result;
    },
    updateUser: async (
      _parent,
      mutationVariables,
      {getCurrentUser, prisma}
    ) => {
      const currentUser = await getCurrentUser();
      const userData = new UserData(prisma, currentUser);
      const result = await userData.update(mutationVariables.input);
      return result;
    },
    deleteUser: async (
      _parent,
      mutationVariables,
      {getCurrentUser, prisma}
    ) => {
      const currentUser = await getCurrentUser();
      const userData = new UserData(prisma, currentUser);
      const result = await userData.delete(mutationVariables.input);
      return result;
    },
  },
};

export default resolvers;
