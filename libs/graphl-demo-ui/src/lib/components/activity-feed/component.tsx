import {Divider, Stack} from "@chakra-ui/react";
import {AppPage} from "../app-page";
import {CreatePostForm} from "../create-post-form";
import {PostList} from "../post-list";
import {SpinnerAndError} from "../spinner-and-error";
import {useActivityFeed} from "./hook";
import {GetPostsDocument} from "@graphql-demo/graphql-schema";

export function ActivityFeed() {
  const {
    postQuery: {error, loading},
    sortedData,
  } = useActivityFeed();

  return (
    <AppPage>
      <SpinnerAndError error={error} loading={loading} />
      {!loading && (
        <Stack direction="column">
          <CreatePostForm refetchQueries={[GetPostsDocument]} />
          <Divider />
          <PostList posts={sortedData} />
        </Stack>
      )}
    </AppPage>
  );
}
