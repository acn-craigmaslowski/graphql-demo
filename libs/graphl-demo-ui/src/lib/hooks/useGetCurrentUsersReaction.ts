import {
  ReactionWithUserEdgeFragment,
  useGetCurrentUserQuery,
} from "@graphql-demo/graphql-schema";

export type UseGetCurrentUsersReactionProps = Parameters<
  typeof useGetCurrentUsersReaction
>[0];
export type UseGetCurrentUsersReactionReturn = ReturnType<
  typeof useGetCurrentUsersReaction
>;

export function useGetCurrentUsersReaction({
  reactions,
}: {
  reactions: ReactionWithUserEdgeFragment[];
}) {
  const {data} = useGetCurrentUserQuery();

  return data?.currentUser
    ? reactions.find(r => r.user?.id === data.currentUser?.id)
    : null;
}
