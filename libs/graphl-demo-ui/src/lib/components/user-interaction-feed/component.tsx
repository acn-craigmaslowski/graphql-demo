import {Stack} from "@chakra-ui/react";
import {useUserInteractionFeed} from "./hook";
import {UserInteractionList} from "../user-interaction-list";

export function UserInteractionFeed() {
  const {
    userInteractionItems,
    userInteractionsQuery: {data, loading},
  } = useUserInteractionFeed();

  if (loading || !data || !data.users) {
    return null;
  }

  return (
    <Stack gap="2rem" minW="40vw" mb={4}>
      <UserInteractionList items={userInteractionItems} user={data.users} />
    </Stack>
  );
}
