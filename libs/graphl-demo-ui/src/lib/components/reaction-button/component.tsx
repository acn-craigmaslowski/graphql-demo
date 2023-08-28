import {
  Button,
  ButtonGroup,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import {FiThumbsUp} from "react-icons/fi";

import {ReactionType} from "@graphql-demo/graphql-schema";

import {ReactionIcon} from "../reaction-icon";
import {UseReactionButtonProps, useReactionButton} from "./hook";

export type ReactionButtonProps = UseReactionButtonProps;

export function ReactionButton(props: ReactionButtonProps) {
  const {onSelectReaction, ref} = useReactionButton(props);

  return (
    <Popover closeOnBlur={true}>
      <PopoverTrigger>
        <Button leftIcon={<FiThumbsUp />} variant="ghost">
          Like
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <ButtonGroup ref={ref} size="md" isAttached variant="outline">
          <Button
            onClick={() => onSelectReaction(ReactionType.Like)}
            variant="ghost"
          >
            <ReactionIcon reaction={ReactionType.Like} />
          </Button>
          <Button
            onClick={() => onSelectReaction(ReactionType.Love)}
            variant="ghost"
          >
            <ReactionIcon reaction={ReactionType.Love} />
          </Button>
          <Button
            onClick={() => onSelectReaction(ReactionType.Wow)}
            variant="ghost"
          >
            <ReactionIcon reaction={ReactionType.Wow} />
          </Button>
          <Button
            onClick={() => onSelectReaction(ReactionType.Sad)}
            variant="ghost"
          >
            <ReactionIcon reaction={ReactionType.Sad} />
          </Button>
          <Button
            onClick={() => onSelectReaction(ReactionType.Angry)}
            variant="ghost"
          >
            <ReactionIcon reaction={ReactionType.Angry} />
          </Button>
        </ButtonGroup>
      </PopoverContent>
    </Popover>
  );
}
