import {ReactionType} from "@graphql-demo/graphql-schema";
import {UseReactionsSummaryProps, useReactionsSummary} from "./hook";
import {Flex, Stack} from "@chakra-ui/react";
import {ReactionIcon} from "../reaction-icon";

export interface ReactionsSummaryProps extends UseReactionsSummaryProps {
  showCountOnlyInMessage?: boolean;
}

export function ReactionsSummary(props: ReactionsSummaryProps) {
  const {haveAngry, haveLike, haveLove, haveSad, haveWow, message} =
    useReactionsSummary(props);

  return (
    <Stack direction="row">
      <Flex align="center" direction="row" gap="0.75rem;">
        <Flex align="center" direction="row">
          {haveAngry && <ReactionIcon reaction={ReactionType.Angry} />}
          {haveLike && <ReactionIcon reaction={ReactionType.Like} />}
          {haveLove && <ReactionIcon reaction={ReactionType.Love} />}
          {haveSad && <ReactionIcon reaction={ReactionType.Sad} />}
          {haveWow && <ReactionIcon reaction={ReactionType.Wow} />}
        </Flex>
        {message}
      </Flex>
    </Stack>
  );
}
