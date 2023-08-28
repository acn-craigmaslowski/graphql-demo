import {mergeResolvers} from "@graphql-tools/merge";
import {Resolvers} from "@graphql-demo/graphql-schema";

import comments from "./comments";
import reactions from "./reactions";
import root from "./root";
import posts from "./posts";
import users from "./users";

export const resolvers: Resolvers = mergeResolvers([
  comments,
  posts,
  reactions,
  root,
  users,
]);

export default resolvers;
