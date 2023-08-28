import {
  BsEmojiAngry,
  BsEmojiDizzyFill,
  BsFillHandThumbsUpFill,
} from "react-icons/bs";
import {FaHeart, FaRegSadCry} from "react-icons/fa";

import {ReactionType} from "@graphql-demo/graphql-schema";

export type UseReactionIconProps = Parameters<typeof useReactionIcon>[0];
export type UseReactionIconReturn = ReturnType<typeof useReactionIcon>;

export function useReactionIcon({reaction}: {reaction: ReactionType}) {
  return {
    [ReactionType.Angry]: BsEmojiAngry,
    [ReactionType.Like]: BsFillHandThumbsUpFill,
    [ReactionType.Love]: FaHeart,
    [ReactionType.Sad]: FaRegSadCry,
    [ReactionType.Wow]: BsEmojiDizzyFill,
  }[reaction];
}

export function useReactionColor({reaction}: {reaction: ReactionType}) {
  return {
    [ReactionType.Angry]: "red.500",
    [ReactionType.Like]: "blue.500",
    [ReactionType.Love]: "red.500",
    [ReactionType.Sad]: "teal.500",
    [ReactionType.Wow]: "yellow.400",
  }[reaction];
}
