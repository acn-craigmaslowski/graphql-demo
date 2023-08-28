import {PostData} from "@graphql-demo/data-persistence";
import {Resolvers} from "@graphql-demo/graphql-schema";

const resolvers: Resolvers = {
  Query: {
    posts: async (_parent, queryVariables, {getCurrentUser, prisma}) => {
      const currentUser = await getCurrentUser();
      const postData = new PostData(prisma, currentUser);

      if (queryVariables.input.postId) {
        const result = await postData.readOne(queryVariables.input);
        return [result];
      }

      const result = await postData.readMany(queryVariables.input);
      return result;
    },
  },
};

export default resolvers;
