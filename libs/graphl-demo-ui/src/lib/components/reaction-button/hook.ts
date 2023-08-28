import {useDisclosure, useOutsideClick} from "@chakra-ui/react";
import {
  CreateReactionMutation,
  ReactionType,
  useCreateReactionMutation,
} from "@graphql-demo/graphql-schema";
import {useCallback, useRef} from "react";
import {RefetchQueries} from "../../etc";

export type UseReactionButtonProps = Parameters<typeof useReactionButton>[0];

export function useReactionButton({
  commentId,
  postId,
  refetchQueries = [],
}: {
  commentId?: string;
  postId?: string;
  refetchQueries?: RefetchQueries<CreateReactionMutation>;
}) {
  const [createReaction, {error, loading}] = useCreateReactionMutation();
  const menuDisclosure = useDisclosure();
  const ref = useRef<HTMLDivElement | null>(null);

  useOutsideClick({
    ref,
    handler: menuDisclosure.onClose,
  });
  const onSelectReaction = useCallback(
    async (reaction: ReactionType) => {
      if (!commentId && !postId) {
        throw new Error(
          "User must be logged in and have a commentId or postId to create a reaction"
        );
      }

      menuDisclosure.onClose();
      await createReaction({
        refetchQueries,
        variables: {
          input: {
            commentId: commentId || undefined,
            postId: postId || undefined,
            reaction,
          },
        },
      });
    },
    [commentId, createReaction, menuDisclosure, postId, refetchQueries]
  );

  return {error, loading, menuDisclosure, onSelectReaction, ref};
}
