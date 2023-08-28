import {useGetUserPostsQuery} from "@graphql-demo/graphql-schema";
import {useUserIdParam} from "../../hooks";

export type UseUserPostsReturn = ReturnType<typeof useUserPosts>;

export function useUserPosts() {
  const userId = useUserIdParam();
  const userPostsQuery = useGetUserPostsQuery({
    variables: {
      input: {userId},
    },
  });

  return {
    userPostsQuery,
  };
}
