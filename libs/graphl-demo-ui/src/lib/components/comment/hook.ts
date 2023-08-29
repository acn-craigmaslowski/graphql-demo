import {CommentWithEdgesFragment} from "@graphql-demo/graphql-schema";
import {useGetCurrentUsersReaction} from "../../hooks";

export type UseCommentProps = Parameters<typeof useComment>[0];
export type UseCommentReturn = ReturnType<typeof useComment>;

export function useComment({comment}: {comment: CommentWithEdgesFragment}) {
  const currentUsersReaction = useGetCurrentUsersReaction({
    reactions: comment.reactions || [],
  });

  return {currentUsersReaction};
}
