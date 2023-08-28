import {Post as GqlPost} from "@graphql-demo/graphql-schema";
import {Post as DbPost} from "@prisma/client";

export function getGqlPostFromDbPost(post: DbPost): GqlPost {
  return {
    ...post,
    createdDate: post.createdDate ? `${post.createdDate.getTime()}` : undefined,
    lastModifiedDate: post.lastModifiedDate
      ? `${post.lastModifiedDate.getTime()}`
      : undefined,
  };
}
