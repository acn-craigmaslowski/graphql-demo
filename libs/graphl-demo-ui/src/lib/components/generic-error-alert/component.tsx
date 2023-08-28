import {Alert, AlertIcon, AlertDescription} from "@chakra-ui/react";

export function GenericErrorAlert({text = ""}: {text?: string}) {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertDescription>
        {text || "An error occurred. Please reload the page and try again."}
      </AlertDescription>
    </Alert>
  );
}
