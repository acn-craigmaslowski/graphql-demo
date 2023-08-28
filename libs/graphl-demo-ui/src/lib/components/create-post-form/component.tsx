import {Button, Stack, Text, Textarea} from "@chakra-ui/react";
import {UseCreatePostFormProps, useCreatePostForm} from "./hook";

export type CreatePostFormProps = UseCreatePostFormProps;

export function CreatePostForm(props: CreatePostFormProps) {
  const {isSaved, onBodyChange, onSubmit, resetForm} = useCreatePostForm(props);

  return (
    <Stack>
      {isSaved && (
        <>
          <Text>Your post has been saved</Text>
          <Button onClick={resetForm} variant="ghost">
            Post Another
          </Button>
        </>
      )}
      {!isSaved && (
        <>
          <Textarea
            onChange={onBodyChange}
            placeholder="What's on your mind?"
          />
          <Button onClick={onSubmit}>Post</Button>
        </>
      )}
    </Stack>
  );
}
