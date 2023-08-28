import {useUserPosts} from "./hook";
import {PostList} from "../post-list";
import {sortByLastModifiedDate} from "../../etc";

export function UserPosts() {
  const {
    userPostsQuery: {data},
  } = useUserPosts();

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {data && data.users && data?.users.posts && (
        <PostList
          posts={[...data.users.posts].sort(sortByLastModifiedDate) || []}
        />
      )}
    </>
  );
}
