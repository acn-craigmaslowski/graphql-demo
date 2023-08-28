import {Flex} from "@chakra-ui/react";
import {AppTopNavigation} from "../app-top-navigation";

export function AppPage({children}: {children: React.ReactNode}) {
  return (
    <Flex direction="column" gap="2rem">
      <AppTopNavigation />
      <Flex justify="center" pb="2rem">
        {children}
      </Flex>
    </Flex>
  );
}
