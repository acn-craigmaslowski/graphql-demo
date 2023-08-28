import {ApolloError} from "@apollo/client";
import {Spinner, Stack} from "@chakra-ui/react";

import {GenericErrorAlert} from "../generic-error-alert";

export function SpinnerAndError({
  error,
  loading,
}: {
  error: ApolloError | null | undefined;
  loading: boolean;
}) {
  return (
    <>
      {loading && <Spinner />}
      {error && (
        <Stack>
          <GenericErrorAlert />
        </Stack>
      )}
    </>
  );
}
