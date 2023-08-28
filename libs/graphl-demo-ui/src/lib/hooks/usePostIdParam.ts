import {useParams} from "react-router";

export function usePostIdParam() {
  return useParams().postId;
}
