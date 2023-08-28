import {Card, CardBody, Link, Text} from "@chakra-ui/react";
import {
  CommentWithPostEdgeFragment,
  ReactionWithAllEdgesFragment,
  UserScalarsFragment,
} from "@graphql-demo/graphql-schema";
import {formatDistanceToNow} from "date-fns";

export type UserInteractionItem =
  | CommentWithPostEdgeFragment
  | ReactionWithAllEdgesFragment;

export function UserInteractionListItem({
  item,
  user,
}: {
  item: UserInteractionItem;
  user: UserScalarsFragment;
}) {
  return (
    <Card>
      <CardBody>
        {item.__typename === "Comment" && (
          <Text as="span">
            {`${user.name} commented on ${item.post?.user?.name}'s `}
            <Link href={`/post/${item.post?.id}`}>comment</Link>
            {"."}
          </Text>
        )}
        {item.__typename === "Reaction" && (
          <Text as="span">
            {`${user.name} reacted to ${
              item.comment?.post?.user?.name ||
              item.post?.user?.name ||
              "Unknown User"
            }'s`}{" "}
            {item.comment ? (
              <Link href={`/post/${item.comment.post?.id}`}>comment</Link>
            ) : (
              <Link href={`/post/${item.post?.id}`}>post</Link>
            )}
            {"."}
          </Text>
        )}
        <Text color="gray.400">{`${formatDistanceToNow(
          parseInt(item.lastModifiedDate)
        )} ago`}</Text>
      </CardBody>
    </Card>
  );
}
