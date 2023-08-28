import {Comment as GqlComment} from "@graphql-demo/graphql-schema";
import {Comment as DbComment} from "@prisma/client";

export function getGqlCommentFromDbComment(comment: DbComment): GqlComment {
  return {
    ...comment,
    createdDate: comment.createdDate
      ? `${comment.createdDate.getTime()}`
      : undefined,
    lastModifiedDate: comment.createdDate
      ? `${comment.createdDate.getTime()}`
      : undefined,
  };
}
