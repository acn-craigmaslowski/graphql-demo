import {Avatar, Stack, Text} from "@chakra-ui/react";
import {UseUserAvatarProps, useUserAvatar} from "./hook";

export interface UserAvatarProps extends UseUserAvatarProps {
  showName?: boolean;
}

export function UserAvatar({showName = false, ...props}: UserAvatarProps) {
  const {user} = props;
  const {onClick} = useUserAvatar(props);

  return (
    <Stack align="center" direction="row">
      {showName && <Text>Jackie Moon</Text>}
      <Avatar
        onClick={onClick}
        name={user.name}
        src={user.profileImageUrl || undefined}
      />
    </Stack>
  );
}
