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
import {PostWithConditionalEdgesFragment} from "@graphql-demo/graphql-schema";
import {formatDistanceToNow} from "date-fns";
import {FiThumbsUp, FiMessageCircle} from "react-icons/fi";
import {ReactionsSummary} from "../reactions-summary";
import {UsePostProps, usePost} from "./hook";
import {CommentList} from "../comment-list";

export interface PostProps extends UsePostProps {
  post: PostWithConditionalEdgesFragment;
  showAllComments?: boolean;
}

export function Post({post, showAllComments = false, ...props}: PostProps) {
  const {commentsExpansionDisclosure} = usePost(props);

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
      <Stack direction="row" justify="space-around" p="0.25rem" width="100%">
        <Button leftIcon={<FiThumbsUp />} variant="ghost">
          Like
        </Button>
        <Button leftIcon={<FiMessageCircle />} variant="ghost">
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
            />
          </CardBody>
        </>
      )}
    </Card>
  );
}
