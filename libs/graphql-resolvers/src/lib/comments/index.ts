import {mergeResolvers} from "@graphql-tools/merge";
import {Resolvers} from "@graphql-demo/graphql-schema";

import mutation from "./mutation";
import query from "./query";
import edges from "./edges";

export const resolvers: Resolvers = mergeResolvers([mutation, query, edges]);

export default resolvers;
