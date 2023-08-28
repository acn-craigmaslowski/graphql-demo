import {useGetPostsQuery} from "@graphql-demo/graphql-schema";
import {usePostIdParam} from "../../hooks";

export function usePostDetail() {
  const postId = usePostIdParam();
  const postQuery = useGetPostsQuery({
    variables: {
      fetchComments: true,
      fetchReactions: true,
      fetchUser: true,
      input: {postId},
    },
  });

  return {postQuery};
}
