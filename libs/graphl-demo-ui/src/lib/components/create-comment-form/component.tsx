import {Button, Stack, Textarea} from "@chakra-ui/react";
import {UseCreateCommentFormProps, useCreateCommentForm} from "./hook";

export type CreateCommentFormProps = UseCreateCommentFormProps;

export function CreateCommentForm(props: CreateCommentFormProps) {
  const {post} = props;
  const {body, onBodyChange, onSubmit} = useCreateCommentForm(props);

  return (
    <Stack>
      <Textarea
        onChange={onBodyChange}
        placeholder={`Reply to ${post.user?.name || "user"}`}
        value={body}
      />
      <Button onClick={onSubmit}>Reply</Button>
    </Stack>
  );
}
