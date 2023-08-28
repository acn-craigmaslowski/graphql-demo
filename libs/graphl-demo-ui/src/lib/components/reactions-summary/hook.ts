import {
  ReactionType,
  ReactionWithUserEdgeFragment,
} from "@graphql-demo/graphql-schema";

export type UseReactionsSummaryProps = Parameters<
  typeof useReactionsSummary
>[0];
export type UseReactionsSummaryReturn = ReturnType<typeof useReactionsSummary>;

export function useReactionsSummary({
  reactions,
}: {
  reactions: ReactionWithUserEdgeFragment[];
}) {
  const haveAngry = !!reactions.find(r => r.reaction === ReactionType.Angry);
  const haveLike = !!reactions.find(r => r.reaction === ReactionType.Like);
  const haveLove = !!reactions.find(r => r.reaction === ReactionType.Love);
  const haveSad = !!reactions.find(r => r.reaction === ReactionType.Sad);
  const haveWow = !!reactions.find(r => r.reaction === ReactionType.Wow);

  const message = reactions.length
    ? `${reactions[0].user?.name || ""} ${
        reactions.length - 1 > 0 ? ` and ${reactions.length - 1} others` : ""
      }`
    : "0 Reactions";

  return {
    haveAngry,
    haveLike,
    haveLove,
    haveSad,
    haveWow,
    message,
  };
}
