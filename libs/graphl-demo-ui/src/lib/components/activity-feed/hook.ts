import {useGetPostsQuery} from "@graphql-demo/graphql-schema";
import {sortByLastModifiedDate} from "../../etc";

export type UseActivityFeedReturn = ReturnType<typeof useActivityFeed>;

export function useActivityFeed() {
  const postQuery = useGetPostsQuery({
    variables: {
      input: {},
      fetchComments: true,
      fetchReactions: true,
      fetchUser: true,
    },
  });

  const sortedData = [...(postQuery.data?.posts || [])].sort(
    sortByLastModifiedDate
  );

  return {
    postQuery,
    sortedData,
  };
}
