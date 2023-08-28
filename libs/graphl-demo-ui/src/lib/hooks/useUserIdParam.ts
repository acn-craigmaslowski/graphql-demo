import {useParams} from "react-router";

export function useUserIdParam() {
  return useParams().userId;
}
