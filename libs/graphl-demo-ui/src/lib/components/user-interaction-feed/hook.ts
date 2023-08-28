import {useGetUserInteractionsQuery} from "@graphql-demo/graphql-schema";
import {useUserIdParam} from "../../hooks";
import {UserInteractionItem} from "../user-interaction-list-item";

export type UseUserActivityReturn = ReturnType<typeof useUserInteractionFeed>;

export function useUserInteractionFeed() {
  const userId = useUserIdParam();
  const userInteractionsQuery = useGetUserInteractionsQuery({
    variables: {
      input: {userId},
    },
  });

  const userInteractionItems: UserInteractionItem[] = [
    ...(userInteractionsQuery.data?.users.comments || []),
    ...(userInteractionsQuery.data?.users.reactions || []),
  ].sort((a, b) => {
    if (a.lastModifiedDate < b.lastModifiedDate) return -1;
    if (a.lastModifiedDate > b.lastModifiedDate) return 1;
    return 0;
  });

  return {
    userInteractionItems,
    userInteractionsQuery,
  };
}
