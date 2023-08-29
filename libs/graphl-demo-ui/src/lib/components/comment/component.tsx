import {Box, Flex, Stack, Text} from "@chakra-ui/react";
import {
  GetPostsDocument,
  PostWithConditionalEdgesFragment,
} from "@graphql-demo/graphql-schema";
import {ReactionsSummary} from "../reactions-summary";
import {formatDistanceToNow} from "date-fns";
import {UserAvatar} from "../user-avatar";
import {ReactionButton} from "../reaction-button";
import {UseCommentProps, useComment} from "./hook";
import {ReactionIcon} from "../reaction-icon";
import {UserNameProfileLink} from "../user-name-profile-link";
import {UseGetCurrentUsersReactionReturn} from "../../hooks";

export interface CommentProps extends UseCommentProps {
  post: PostWithConditionalEdgesFragment;
}

interface CommentFooterProps extends CommentProps {
  currentUsersReaction: UseGetCurrentUsersReactionReturn;
}

function CommentFooter({
  comment,
  currentUsersReaction,
  post,
}: CommentFooterProps) {
  return (
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
        showCountOnlyInMessage={true}
      />
    </Flex>
  );
}

export function Comment({post, ...props}: CommentProps) {
  const {comment} = props;
  const {currentUsersReaction} = useComment(props);

  return (
    <Flex gap="1rem" width="100%">
      <UserAvatar user={comment.user} />
      <Stack width="100%">
        <Box bg="gray.50" borderRadius="8px" p="1rem">
          <UserNameProfileLink user={comment.user} />
          <Text>{comment.body}</Text>
        </Box>
        <CommentFooter
          comment={comment}
          currentUsersReaction={currentUsersReaction}
          post={post}
        />
      </Stack>
    </Flex>
  );
}
