import {Avatar, Flex, Link, Stack, Text} from "@chakra-ui/react";
import {
  GetPostsDocument,
  PostWithConditionalEdgesFragment,
} from "@graphql-demo/graphql-schema";
import {ReactionsSummary} from "../reactions-summary";
import {formatDistanceToNow} from "date-fns";
import {UserAvatar} from "../user-avatar";
import {ReactionButton} from "../reaction-button";
import {UseCommentListItemProps, useCommentListItem} from "./hook";
import {ReactionIcon} from "../reaction-icon";

export interface CommentListItemProps extends UseCommentListItemProps {
  post: PostWithConditionalEdgesFragment;
}

export function CommentListItem({post, ...props}: CommentListItemProps) {
  const {comment} = props;
  const {currentUsersReaction} = useCommentListItem(props);

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
          <Stack align="center" gap="1rem" direction="row">
            {!currentUsersReaction ? (
              <ReactionButton
                commentId={comment.id}
                refetchQueries={[
                  {
                    query: GetPostsDocument,
                    variables: {
                      fetchReactions: true,
                      input: {postId: post.id},
                    },
                  },
                ]}
              />
            ) : (
              <Stack align="center" direction="row">
                <ReactionIcon reaction={currentUsersReaction.reaction} />
                <Text>{currentUsersReaction.reaction}</Text>
              </Stack>
            )}
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
