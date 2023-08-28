import {useGetCurrentUserQuery} from "@graphql-demo/graphql-schema";

export type UseAppTopNavigationReturn = ReturnType<typeof useAppTopNavigation>;

export function useAppTopNavigation() {
  const currentUserQuery = useGetCurrentUserQuery();
  return {
    currentUserQuery,
  };
}
