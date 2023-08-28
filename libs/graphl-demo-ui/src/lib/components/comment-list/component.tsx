import {Button, Stack} from "@chakra-ui/react";
import {CommentListItem} from "../comment-list-item";
import {UseCommentListProps, useCommentList} from "./hook";
import {PostWithConditionalEdgesFragment} from "@graphql-demo/graphql-schema";

export interface CommentListProps extends UseCommentListProps {
  post: PostWithConditionalEdgesFragment;
}

export function CommentList({post, ...props}: CommentListProps) {
  const {expansionDisclosure} = props;
  const {isLimited, limitedComments} = useCommentList(props);

  return (
    <Stack direction="column" gap="1.5rem;">
      {limitedComments.map(comment => {
        return (
          <CommentListItem comment={comment} key={comment.id} post={post} />
        );
      })}
      {!expansionDisclosure.isOpen && isLimited && (
        <Button onClick={expansionDisclosure.onOpen} variant="ghost">
          View more comments
        </Button>
      )}
    </Stack>
  );
}
