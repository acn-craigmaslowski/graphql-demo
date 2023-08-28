import {Box} from "@chakra-ui/react";
import {UseReactionIconProps, useReactionColor, useReactionIcon} from "./hook";

export function ReactionIcon(props: UseReactionIconProps) {
  const Icon = useReactionIcon(props);
  const color = useReactionColor(props);
  return (
    <Box as="span" color={color}>
      <Icon />
    </Box>
  );
}
