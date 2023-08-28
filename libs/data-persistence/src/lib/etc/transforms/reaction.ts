import {
  Reaction as GqlReaction,
  ReactionType as GqlReactionType,
} from "@graphql-demo/graphql-schema";
import {Reaction as DbReaction} from "@prisma/client";
import enumFromStringValue from "../enumFromStringValue";

export function getGqlReactionFromDbReaction(
  reaction: DbReaction
): GqlReaction {
  return {
    ...reaction,
    createdDate: reaction.createdDate
      ? `${reaction.createdDate.getTime()}`
      : undefined,
    lastModifiedDate: reaction.lastModifiedDate
      ? `${reaction.lastModifiedDate.getTime()}`
      : undefined,
    reaction:
      enumFromStringValue(GqlReactionType, reaction.reaction) ||
      GqlReactionType.Like,
  };
}
