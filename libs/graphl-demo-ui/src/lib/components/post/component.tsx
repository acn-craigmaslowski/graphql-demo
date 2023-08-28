import {
  Avatar,
  Button,
  Card,
  CardBody,
  Divider,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import {GetPostsDocument} from "@graphql-demo/graphql-schema";
import {formatDistanceToNow} from "date-fns";
import {FiMessageCircle} from "react-icons/fi";
import {ReactionsSummary} from "../reactions-summary";
import {UsePostProps, usePost} from "./hook";
import {CommentList} from "../comment-list";
import {ReactionButton} from "../reaction-button";
import {ReactionIcon} from "../reaction-icon";
import {CreateCommentForm} from "../create-comment-form";

export type PostProps = UsePostProps;

export function Post(props: PostProps) {
  const {post} = props;
  const {
    commentsExpansionDisclosure,
    currentUsersReaction,
    isCommentFormVisibleDisclosure,
  } = usePost(props);

  return (
    <Card minW="40vw">
      <CardBody>
        <Link href={`/profile/${post.user?.id}`}>
          <Stack align="center" direction="row" mb="1.5rem">
            <Avatar name={post.user?.name || ""} />
            <Stack gap="0">
              <Text>{post.user?.name || ""}</Text>
              <Text fontSize="0.75rem">
                {post.lastModifiedDate
                  ? `${formatDistanceToNow(
                      parseInt(post.lastModifiedDate)
                    )} ago`
                  : ""}
              </Text>
            </Stack>
          </Stack>
        </Link>
        <Text fontSize="1.25rem" mb="2rem">
          {post.body}
        </Text>
        <Stack direction="row" justify="space-between" width="100%">
          {post.reactions && <ReactionsSummary reactions={post.reactions} />}
          <Text>{`${post.comments?.length || 0} comments`}</Text>
        </Stack>
      </CardBody>
      <Divider color="gray.200" />
      <Stack
        align="center"
        direction="row"
        justify="space-around"
        p="0.25rem"
        width="100%"
      >
        {!currentUsersReaction ? (
          <ReactionButton
            postId={post.id}
            refetchQueries={[
              {
                query: GetPostsDocument,
                variables: {
                  fetchComments: true,
                  fetchReactions: true,
                  fetchUser: true,
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
        <Button
          leftIcon={<FiMessageCircle />}
          onClick={isCommentFormVisibleDisclosure.onOpen}
          variant="ghost"
        >
          Comment
        </Button>
      </Stack>
      {post.comments && post.comments.length > 0 && (
        <>
          <Divider color="gray.200" />
          <CardBody>
            <CommentList
              comments={post.comments || []}
              limit={2}
              expansionDisclosure={commentsExpansionDisclosure}
              post={post}
            />
          </CardBody>
        </>
      )}
      {(isCommentFormVisibleDisclosure.isOpen ||
        commentsExpansionDisclosure.isOpen) && (
        <CreateCommentForm
          post={post}
          refetchQueries={[
            {
              query: GetPostsDocument,
              variables: {
                fetchUser: false,
                fetchReactions: false,
                fetchComments: true,
                input: {postId: post.id},
              },
            },
          ]}
        />
      )}
    </Card>
  );
}
