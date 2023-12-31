import {Avatar, Box, Flex, Link, Stack, Text} from "@chakra-ui/react";
import {UserAvatar} from "../user-avatar";
import {useAppTopNavigation} from "./hook";
import {UserNameProfileLink} from "../user-name-profile-link";

export function AppTopNavigation() {
  const {
    currentUserQuery: {data, error, loading},
  } = useAppTopNavigation();

  return (
    <Box
      boxShadow="0px 2px 4px 0px rgba(0,0,0,0.2);"
      p="1rem"
      position="sticky"
    >
      <Flex justify="space-between">
        <Link href="/">
          <Stack align="center" direction="row">
            <Avatar name="EverybodyLoveEverybody Book" size="sm" />
            <Text>EverybodyLoveEverybodyBook</Text>
          </Stack>
        </Link>
        {!loading && !error && data?.currentUser && (
          <Stack align="center" direction="row">
            <UserNameProfileLink user={data.currentUser} />
            <UserAvatar user={data.currentUser} />
          </Stack>
        )}
      </Flex>
    </Box>
  );
}
