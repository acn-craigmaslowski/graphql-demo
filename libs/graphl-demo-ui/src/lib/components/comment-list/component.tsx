import {Button, Stack} from "@chakra-ui/react";
import {CommentListItem} from "../comment-list-item";
import {UseCommentListProps, useCommentList} from "./hook";

export type CommentListProps = UseCommentListProps;

export function CommentList(props: CommentListProps) {
  const {expansionDisclosure} = props;
  const {isLimited, limitedComments} = useCommentList(props);

  return (
    <Stack direction="column" gap="1.5rem;">
      {limitedComments.map(comment => {
        return <CommentListItem comment={comment} key={comment.id} />;
      })}
      {!expansionDisclosure.isOpen && isLimited && (
        <Button onClick={expansionDisclosure.onOpen} variant="ghost">
          View more comments
        </Button>
      )}
    </Stack>
  );
}
