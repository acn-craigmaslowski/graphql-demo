import {
  ReactionWithUserEdgeFragment,
  useGetCurrentUserQuery,
} from "@graphql-demo/graphql-schema";

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
