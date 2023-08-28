import {CommentData} from "@graphql-demo/data-persistence";
import {Resolvers} from "@graphql-demo/graphql-schema";

const resolvers: Resolvers = {
  Query: {
    comments: async (_parent, queryVariables, {getCurrentUser, prisma}) => {
      const currentUser = await getCurrentUser();
      const commentData = new CommentData(prisma, currentUser);

      if (queryVariables.input.commentId) {
        const result = await commentData.readOne(queryVariables.input);
        return [result];
      }

      const result = await commentData.readMany(queryVariables.input);
      return result;
    },
  },
};

export default resolvers;
