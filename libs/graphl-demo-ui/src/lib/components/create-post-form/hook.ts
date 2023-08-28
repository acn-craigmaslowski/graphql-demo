import {DocumentNode} from "@apollo/client";
import {useCreatePostMutation} from "@graphql-demo/graphql-schema";
import {ChangeEvent, useCallback, useState} from "react";

export type UseCreatePostFormProps = Parameters<typeof useCreatePostForm>[0];
export type UseCreatePostFormReturn = ReturnType<typeof useCreatePostForm>;

export function useCreatePostForm({
  refetchQueries = [],
}: {
  refetchQueries?: DocumentNode[];
}) {
  const [body, setBody] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [createPost, {error, loading}] = useCreatePostMutation();

  const onBodyChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setBody(e.target.value);
    },
    [setBody]
  );

  const onSubmit = useCallback(async () => {
    await createPost({
      refetchQueries,
      variables: {input: {body}},
    });
    setIsSaved(true);
  }, [body, createPost, refetchQueries]);

  const resetForm = useCallback(() => {
    setBody("");
    setIsSaved(false);
  }, []);

  return {
    error,
    isSaved,
    loading,
    onBodyChange,
    onSubmit,
    resetForm,
  };
}
