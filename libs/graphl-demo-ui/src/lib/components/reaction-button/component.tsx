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
  const {currentUsersReaction} = props;
  const {
    menu,
    persistence: {saveReaction},
  } = useReactionButton(props);
  const icon = currentUsersReaction ? (
    <ReactionIcon reaction={currentUsersReaction.reaction} />
  ) : (
    <FiThumbsUp />
  );
  const text = currentUsersReaction ? currentUsersReaction.reaction : "Like";

  return (
    <Popover closeOnBlur={true} isOpen={menu.disclosure.isOpen}>
      <PopoverTrigger>
        <Button
          leftIcon={icon}
          onClick={menu.disclosure.onOpen}
          variant="ghost"
        >
          {text}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <ButtonGroup ref={menu.ref} isAttached variant="outline">
          <Button
            onClick={() => saveReaction(ReactionType.Like)}
            variant="ghost"
          >
            <ReactionIcon reaction={ReactionType.Like} />
          </Button>
          <Button
            onClick={() => saveReaction(ReactionType.Love)}
            variant="ghost"
          >
            <ReactionIcon reaction={ReactionType.Love} />
          </Button>
          <Button
            onClick={() => saveReaction(ReactionType.Wow)}
            variant="ghost"
          >
            <ReactionIcon reaction={ReactionType.Wow} />
          </Button>
          <Button
            onClick={() => saveReaction(ReactionType.Sad)}
            variant="ghost"
          >
            <ReactionIcon reaction={ReactionType.Sad} />
          </Button>
          <Button
            onClick={() => saveReaction(ReactionType.Angry)}
            variant="ghost"
          >
            <ReactionIcon reaction={ReactionType.Angry} />
          </Button>
        </ButtonGroup>
      </PopoverContent>
    </Popover>
  );
}
