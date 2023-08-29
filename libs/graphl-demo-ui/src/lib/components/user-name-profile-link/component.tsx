import {Link, Text} from "@chakra-ui/react";
import {UserScalarsFragment} from "@graphql-demo/graphql-schema";

export type UserNameProfileLinkProps = Parameters<
  typeof UserNameProfileLink
>[0];

export function UserNameProfileLink({
  user,
}: {
  user?: UserScalarsFragment | null;
}) {
  return user ? (
    <Link fontWeight="bold" href={`/profile/${user.id || ""}`}>
      {user.name}
    </Link>
  ) : (
    <Text fontWeight="bold">Unknown User</Text>
  );
}
