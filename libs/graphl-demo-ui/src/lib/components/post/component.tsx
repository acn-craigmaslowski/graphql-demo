import {
  Button,
  Card,
  CardBody,
  Divider,
  Stack,
  Text,
  UseDisclosureReturn,
} from "@chakra-ui/react";
import {GetPostsDocument} from "@graphql-demo/graphql-schema";
import {formatDistanceToNow} from "date-fns";
import {FiMessageCircle} from "react-icons/fi";
import {ReactionsSummary} from "../reactions-summary";
import {UsePostProps, usePost} from "./hook";
import {CommentList} from "../comment-list";
import {ReactionButton} from "../reaction-button";
import {CreateCommentForm} from "../create-comment-form";
import {UserAvatar} from "../user-avatar";
import {UserNameProfileLink} from "../user-name-profile-link";
import {UseGetCurrentUsersReactionReturn} from "../../hooks";

export type PostProps = UsePostProps;
interface PostEngagementButtonsProps extends PostProps {
  currentUsersReaction: UseGetCurrentUsersReactionReturn;
  disclosure: UseDisclosureReturn;
}

function PostHeading({post}: PostProps) {
  return (
    <Stack align="center" direction="row" mb="1.5rem">
      <UserAvatar user={post.user} />
      <Stack gap="0">
        <UserNameProfileLink user={post.user} />
        <Text fontSize="0.75rem">
          {post.lastModifiedDate
            ? `${formatDistanceToNow(parseInt(post.lastModifiedDate))} ago`
            : ""}
        </Text>
      </Stack>
    </Stack>
  );
}

function PostEngagementSummary({post}: PostProps) {
  return (
    <Stack direction="row" justify="space-between" width="100%">
      {post.reactions && <ReactionsSummary reactions={post.reactions} />}
      <Text>{`${post.comments?.length || 0} comments`}</Text>
    </Stack>
  );
}

function PostEngagementButtons({
  currentUsersReaction,
  disclosure,
  post,
}: PostEngagementButtonsProps) {
  return (
    <Stack
      align="center"
      direction="row"
      justify="space-around"
      p="0.25rem"
      width="100%"
    >
      <ReactionButton
        currentUsersReaction={currentUsersReaction}
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
      <Button
        leftIcon={<FiMessageCircle />}
        onClick={disclosure.onOpen}
        variant="ghost"
      >
        Comment
      </Button>
    </Stack>
  );
}

function PostComments({
  commentListDisclosure,
  commentFormDisclosure,
  post,
}: {
  commentListDisclosure: UseDisclosureReturn;
  commentFormDisclosure: UseDisclosureReturn;
} & PostProps) {
  return (
    <>
      {post.comments && post.comments.length > 0 && (
        <>
          <Divider color="gray.200" />
          <CardBody>
            <CommentList
              comments={post.comments || []}
              limit={2}
              expansionDisclosure={commentListDisclosure}
              post={post}
            />
          </CardBody>
        </>
      )}
      {(commentFormDisclosure.isOpen || commentListDisclosure.isOpen) && (
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
    </>
  );
}

export function Post(props: PostProps) {
  const {post} = props;
  const {commentListDisclosure, currentUsersReaction, commentFormDisclosure} =
    usePost(props);

  return (
    <Card minW="40vw">
      <CardBody>
        <PostHeading post={post} />
        <Text fontSize="1.25rem" mb="2rem">
          {post.body}
        </Text>
        <PostEngagementSummary post={post} />
      </CardBody>
      <Divider color="gray.200" />
      <PostEngagementButtons
        currentUsersReaction={currentUsersReaction}
        disclosure={commentFormDisclosure}
        post={post}
      />
      <PostComments
        commentFormDisclosure={commentFormDisclosure}
        commentListDisclosure={commentListDisclosure}
        post={post}
      />
    </Card>
  );
}
