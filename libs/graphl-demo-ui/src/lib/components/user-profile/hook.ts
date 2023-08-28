import {useGetUserPostsQuery} from "@graphql-demo/graphql-schema";
import {useUserIdParam} from "../../hooks";

export type UseUserProfileReturn = ReturnType<typeof useUserProfile>;

export function useUserProfile() {
  const userId = useUserIdParam();
  const userPostsQuery = useGetUserPostsQuery({
    variables: {
      input: {userId},
    },
  });

  return {
    userId,
    userPostsQuery,
  };
}
