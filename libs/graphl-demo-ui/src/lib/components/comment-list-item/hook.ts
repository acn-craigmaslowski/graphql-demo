import {CommentWithEdgesFragment} from "@graphql-demo/graphql-schema";
import {useGetCurrentUsersReaction} from "../../hooks";

export type UseCommentListItemProps = Parameters<typeof useCommentListItem>[0];
export type UseCommentListItemReturn = ReturnType<typeof useCommentListItem>;

export function useCommentListItem({
  comment,
}: {
  comment: CommentWithEdgesFragment;
}) {
  const currentUsersReaction = useGetCurrentUsersReaction({
    reactions: comment.reactions || [],
  });

  return {currentUsersReaction};
}
