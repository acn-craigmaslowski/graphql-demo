import {Avatar, Link} from "@chakra-ui/react";
import {UseUserAvatarProps, useUserAvatar} from "./hook";

export interface UserAvatarProps extends UseUserAvatarProps {
  showName?: boolean;
}

export function UserAvatar({showName = false, ...props}: UserAvatarProps) {
  const {user} = props;
  const {onClick} = useUserAvatar(props);

  return user ? (
    <Link href={`/profile/${user.id}`}>
      <Avatar
        onClick={onClick}
        name={user.name}
        src={user.profileImageUrl || undefined}
      />
    </Link>
  ) : (
    <Avatar name="Unknown User" />
  );
}
