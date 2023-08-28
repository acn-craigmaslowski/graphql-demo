import {UseDisclosureReturn} from "@chakra-ui/react";
import {CommentWithEdgesFragment} from "@graphql-demo/graphql-schema";

export type UseCommentListProps = Parameters<typeof useCommentList>[0];
export type UseCommentListReturn = ReturnType<typeof useCommentList>;

export function useCommentList({
  comments,
  expansionDisclosure: {isOpen},
  limit = -1,
}: {
  comments: CommentWithEdgesFragment[];
  expansionDisclosure: UseDisclosureReturn;
  limit?: number;
}) {
  const isLimited = !isOpen && (limit !== -1 || limit < comments.length);
  const limitedComments = isLimited
    ? comments.reduce((acc, comment, index) => {
        if (index >= limit) {
          return acc;
        }
        return [...acc, comment];
      }, [] as CommentWithEdgesFragment[])
    : [...comments];

  return {
    isLimited,
    limitedComments,
  };
}
