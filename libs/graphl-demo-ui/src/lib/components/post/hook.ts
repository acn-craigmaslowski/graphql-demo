import {useDisclosure} from "@chakra-ui/react";
import {PostWithConditionalEdgesFragment} from "@graphql-demo/graphql-schema";
import {useGetCurrentUsersReaction} from "../../hooks";

export type UsePostProps = Parameters<typeof usePost>[0];
export type UsePostReturn = ReturnType<typeof usePost>;

export function usePost({
  isCommentSectionExpandedByDefault,
  post,
}: {
  isCommentSectionExpandedByDefault?: boolean;
  post: PostWithConditionalEdgesFragment;
}) {
  const commentListDisclosure = useDisclosure({
    defaultIsOpen: isCommentSectionExpandedByDefault || false,
  });
  const currentUsersReaction = useGetCurrentUsersReaction({
    reactions: post.reactions || [],
  });
  const commentFormDisclosure = useDisclosure();

  return {
    commentListDisclosure,
    commentFormDisclosure,
    currentUsersReaction,
  };
}
