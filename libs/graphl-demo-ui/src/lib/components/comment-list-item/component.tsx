import {Avatar, Flex, Link, Stack, Text} from "@chakra-ui/react";
import {CommentWithEdgesFragment} from "@graphql-demo/graphql-schema";
import {ReactionsSummary} from "../reactions-summary";
import {formatDistanceToNow} from "date-fns";
import {UserAvatar} from "../user-avatar";

export function CommentListItem({
  comment,
}: {
  comment: CommentWithEdgesFragment;
}) {
  return (
    <Flex gap="1rem" width="100%">
      {comment.user ? (
        <UserAvatar user={comment.user} />
      ) : (
        <Avatar name="Unknown User" />
      )}
      <Stack width="100%">
        <Flex bg="gray.50" borderRadius="8px" direction="column" p="1rem">
          <Link fontWeight="bold" href={`/profile/${comment.user?.id || ""}`}>
            {comment.user?.name || "Unknown User"}
          </Link>
          <Text>{comment.body}</Text>
        </Flex>
        <Flex direction="row" justify="space-between">
          <Stack gap="1rem" direction="row">
            <Text>Like</Text>
            <Text color="gray.500">
              {formatDistanceToNow(parseInt(comment.lastModifiedDate))} ago
            </Text>
          </Stack>
          <ReactionsSummary
            reactions={comment.reactions || []}
            hideMessage={true}
          />
        </Flex>
      </Stack>
    </Flex>
  );
}
