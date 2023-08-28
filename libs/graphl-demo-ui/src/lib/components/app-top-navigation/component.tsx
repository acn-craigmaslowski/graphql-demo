import {Avatar, Box, Flex, Link, Stack, Text} from "@chakra-ui/react";

export function AppTopNavigation() {
  return (
    <Box
      boxShadow="0px 2px 4px 0px rgba(0,0,0,0.2);"
      p="1rem"
      position="sticky"
    >
      <Flex justify="space-between">
        <Link href="/">
          <Stack align="center" direction="row">
            <Avatar name="EverybodyLoveEverybody Book" size="sm" />
            <Text>EverybodyLoveEverybodyBook</Text>
          </Stack>
        </Link>
        <Link href="/profile/0e2c5827-8a06-4439-9978-76c4d24eb82f">
          <Stack align="center" direction="row">
            <Text>Jackie Moon</Text>
            <Avatar
              name="Jackie Moon"
              src="http://localhost:4200/jackie-moon.jpg"
            />
          </Stack>
        </Link>
      </Flex>
    </Box>
  );
}
