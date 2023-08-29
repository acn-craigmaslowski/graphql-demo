import {UserScalarsFragment} from "@graphql-demo/graphql-schema";
import {useCallback} from "react";
import {useNavigate} from "react-router";

export type UseUserAvatarProps = Parameters<typeof useUserAvatar>[0];
export type UseUserAvatarReturn = ReturnType<typeof useUserAvatar>;

export function useUserAvatar({user}: {user?: UserScalarsFragment | null}) {
  const navigate = useNavigate();
  const onClick = useCallback(() => {
    navigate(`/profile/${user?.id || ""}`);
  }, [navigate, user]);

  return {onClick};
}
