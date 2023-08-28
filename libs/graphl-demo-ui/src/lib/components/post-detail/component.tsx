import {AppPage} from "../app-page";
import {Post} from "../post";
import {SpinnerAndError} from "../spinner-and-error";
import {usePostDetail} from "./hook";

export function PostDetail() {
  const {
    postQuery: {data, error, loading},
  } = usePostDetail();

  return (
    <AppPage>
      <SpinnerAndError error={error} loading={loading} />
      {!loading && data && data.posts && data.posts[0] && (
        <Post post={data.posts[0]} />
      )}
    </AppPage>
  );
}
