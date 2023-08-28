import {Resolvers} from "@graphql-demo/graphql-schema";
import {ReactionData} from "@graphql-demo/data-persistence";

const resolvers: Resolvers = {
  Comment: {
    reactionCount: async (parent, _variables, {getCurrentUser, prisma}) => {
      const postData = new ReactionData(prisma, await getCurrentUser());
      return await postData.countCommentReactions(parent);
    },
  },
};

export default resolvers;
