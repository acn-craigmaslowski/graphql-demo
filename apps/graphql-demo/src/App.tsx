// import {ApolloSandbox} from "@apollo/sandbox/react";
import {ApolloProvider} from "@apollo/client";
import {Box, ChakraProvider} from "@chakra-ui/react";
import {StrictMode} from "react";

import {AppRoutes} from "@graphql-demo/graphl-demo-ui";
import {getApolloClient} from "./getApolloClient";

export function App() {
  return (
    <StrictMode>
      <ChakraProvider>
        <ApolloProvider client={getApolloClient()}>
          <Box
            sx={{
              "& > div": {
                h: "100vh",
              },
            }}
          >
            {/* <ApolloSandbox /> */}
            <AppRoutes />
          </Box>
        </ApolloProvider>
      </ChakraProvider>
    </StrictMode>
  );
}
