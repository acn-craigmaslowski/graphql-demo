import {useDisclosure} from "@chakra-ui/react";

export type UsePostProps = Parameters<typeof usePost>[0];
export type UsePostReturn = ReturnType<typeof usePost>;

export function usePost({
  isCommentSectionExpandedByDefault,
}: {
  isCommentSectionExpandedByDefault?: boolean;
}) {
  const commentsExpansionDisclosure = useDisclosure({
    defaultIsOpen: isCommentSectionExpandedByDefault || false,
  });
  return {
    commentsExpansionDisclosure,
  };
}
