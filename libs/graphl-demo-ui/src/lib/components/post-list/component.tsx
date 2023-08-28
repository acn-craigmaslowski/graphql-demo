import {Stack} from "@chakra-ui/react";
import {PostWithConditionalEdgesFragment} from "@graphql-demo/graphql-schema";
import {Post} from "../post/component";

export function PostList({posts}: {posts: PostWithConditionalEdgesFragment[]}) {
  return (
    <Stack gap="2rem" maxW="50vw" mb={4}>
      {posts.map(post => {
        return <Post key={post.id} post={post} />;
      })}
    </Stack>
  );
}
