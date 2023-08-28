import {UserScalarsFragment} from "@graphql-demo/graphql-schema";
import {useCallback} from "react";
import {useNavigate} from "react-router";

export type UseUserAvatarProps = Parameters<typeof useUserAvatar>[0];
export type UseUserAvatarReturn = ReturnType<typeof useUserAvatar>;

export function useUserAvatar({user: {id}}: {user: UserScalarsFragment}) {
  const navigate = useNavigate();
  const onClick = useCallback(() => {
    navigate(`/profile/${id}`);
  }, [navigate, id]);

  return {onClick};
}
