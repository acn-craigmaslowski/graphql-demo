import {
  CreateCommentMutation,
  PostWithConditionalEdgesFragment,
  useCreateCommentMutation,
} from "@graphql-demo/graphql-schema";
import {ChangeEvent, useCallback, useState} from "react";
import {RefetchQueries} from "../../etc";

export type UseCreateCommentFormProps = Parameters<
  typeof useCreateCommentForm
>[0];
export type UseCreateCommentFormReturn = ReturnType<
  typeof useCreateCommentForm
>;

export function useCreateCommentForm({
  refetchQueries = [],
  post,
}: {
  refetchQueries?: RefetchQueries<CreateCommentMutation>;
  post: PostWithConditionalEdgesFragment;
}) {
  const [body, setBody] = useState("");
  const [createComment, {error, loading}] = useCreateCommentMutation();

  const resetForm = useCallback(() => {
    setBody("");
  }, []);

  const onBodyChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setBody(e.target.value);
    },
    [setBody]
  );

  const onSubmit = useCallback(async () => {
    await createComment({
      refetchQueries,
      variables: {input: {body, postId: post.id}},
    });
    resetForm();
  }, [body, createComment, post.id, refetchQueries, resetForm]);

  return {
    body,
    error,
    loading,
    onBodyChange,
    onSubmit,
    resetForm,
  };
}
