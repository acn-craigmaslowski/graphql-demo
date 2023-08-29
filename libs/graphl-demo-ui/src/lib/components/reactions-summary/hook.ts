import {
  ReactionType,
  ReactionWithUserEdgeFragment,
} from "@graphql-demo/graphql-schema";
import {sortByLastModifiedDate} from "../../etc";
import {useGetCurrentUsersReaction} from "../../hooks";

export type UseReactionsSummaryProps = Parameters<
  typeof useReactionsSummary
>[0];
export type UseReactionsSummaryReturn = ReturnType<typeof useReactionsSummary>;

function useMessage({
  reactions,
  showCountOnlyInMessage = false,
}: UseReactionsSummaryProps): string {
  const currentUserReaction = useGetCurrentUsersReaction({reactions});

  if (showCountOnlyInMessage) {
    return reactions.length ? `${reactions.length}` : "";
  }

  const sortedReactions = [...reactions].sort(sortByLastModifiedDate);
  let message = "";
  if (currentUserReaction) {
    message =
      sortedReactions.length === 1
        ? `You ${currentUserReaction.reaction} this`
        : `You and ${sortedReactions.length - 1} others`;
  } else {
    message = sortedReactions.length
      ? `${reactions[sortedReactions.length - 1].user?.name || ""} ${
          sortedReactions.length - 1 > 0
            ? ` and ${sortedReactions.length - 1} others`
            : ""
        }`
      : "0 Reactions";
  }
  return message;
}

export function useReactionsSummary(props: {
  showCountOnlyInMessage?: boolean;
  reactions: ReactionWithUserEdgeFragment[];
}) {
  const {reactions} = props;
  const message = useMessage(props);
  const haveAngry = !!reactions.find(r => r.reaction === ReactionType.Angry);
  const haveLike = !!reactions.find(r => r.reaction === ReactionType.Like);
  const haveLove = !!reactions.find(r => r.reaction === ReactionType.Love);
  const haveSad = !!reactions.find(r => r.reaction === ReactionType.Sad);
  const haveWow = !!reactions.find(r => r.reaction === ReactionType.Wow);

  return {
    haveAngry,
    haveLike,
    haveLove,
    haveSad,
    haveWow,
    message,
  };
}
