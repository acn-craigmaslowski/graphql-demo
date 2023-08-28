import {
  Avatar,
  Heading,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

import {useUserProfile} from "./hook";
import {UserPosts} from "../user-posts";
import {UserInteractionFeed} from "../user-interaction-feed";
import {AppPage} from "../app-page";
import {SpinnerAndError} from "../spinner-and-error/component";

export function UserProfile() {
  const {
    userPostsQuery: {data, error, loading},
  } = useUserProfile();

  return (
    <AppPage>
      <SpinnerAndError error={error} loading={loading} />
      {!loading && data && (
        <Stack>
          <Stack align="center" direction="row">
            <Avatar
              name={data.users.name}
              size="2xl"
              src={data.users.profileImageUrl || undefined}
            />
            <Heading>{data.users.name}</Heading>
          </Stack>
          <Tabs>
            <TabList>
              <Tab>Feed</Tab>
              <Tab>Activity</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <UserPosts />
              </TabPanel>
              <TabPanel>
                <UserInteractionFeed />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      )}
    </AppPage>
  );
}
