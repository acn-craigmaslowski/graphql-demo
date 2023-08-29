import {useDisclosure, useOutsideClick} from "@chakra-ui/react";
import {
  CreateReactionMutation,
  ReactionScalarsFragment,
  ReactionType,
  UpdateReactionMutation,
  useCreateReactionMutation,
  useUpdateReactionMutation,
} from "@graphql-demo/graphql-schema";
import {useCallback, useRef} from "react";
import {RefetchQueries} from "../../etc";

export type UseReactionButtonProps = {
  commentId?: string;
  currentUsersReaction?: ReactionScalarsFragment | null;
  postId?: string;
  refetchQueries?: RefetchQueries<
    CreateReactionMutation | UpdateReactionMutation
  >;
};
interface UsePersistenceProps extends UseReactionButtonProps {
  menu: UseMenuReturn;
}

export type UseReactionButtonReturn = ReturnType<typeof useReactionButton>;
export type UseMenuReturn = ReturnType<typeof useMenu>;

function useMenu() {
  const disclosure = useDisclosure();
  const ref = useRef<HTMLDivElement | null>(null);
  useOutsideClick({
    ref,
    handler: disclosure.onClose,
  });

  return {
    disclosure,
    ref,
  };
}

function usePersistence(props: UsePersistenceProps) {
  const {
    commentId,
    currentUsersReaction,
    menu,
    postId,
    refetchQueries = [],
  } = props;
  const [createReaction, createStatus] = useCreateReactionMutation();
  const [updateReaction, updateStatus] = useUpdateReactionMutation();

  const error = currentUsersReaction ? updateStatus.error : createStatus.error;
  const loading = currentUsersReaction
    ? updateStatus.loading
    : createStatus.loading;

  const saveReaction = useCallback(
    async (reaction: ReactionType) => {
      if (!commentId && !postId) {
        throw new Error(
          "User must be logged in and have a commentId or postId to create a reaction"
        );
      }

      menu.disclosure.onClose();
      if (currentUsersReaction) {
        await updateReaction({
          refetchQueries,
          variables: {
            input: {
              id: currentUsersReaction.id,
              reaction,
            },
          },
        });
      }
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
    [
      commentId,
      createReaction,
      currentUsersReaction,
      menu.disclosure,
      postId,
      refetchQueries,
      updateReaction,
    ]
  );

  return {error, loading, saveReaction};
}

export function useReactionButton(props: UseReactionButtonProps) {
  const menu = useMenu();
  const persistence = usePersistence({...props, menu});

  return {menu, persistence};
}
