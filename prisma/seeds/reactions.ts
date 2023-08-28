import {PrismaClient, Comment, Post, Reaction, User} from "@prisma/client";
import {loadJsonSchema} from "./loadJsonSchema";
import {randomInt} from "crypto";
import {addDays} from "date-fns";

export async function seedReactions(
  prisma: PrismaClient,
  users: User[],
  posts: Post[],
  comments: Comment[]
) {
  const postsComments = [posts, comments];
  const reactionData = loadJsonSchema("./json/reactions.json");
  let reactionRecords: Reaction[] = [];
  for (let i = 0; i < reactionData.length; i++) {
    // pick posts or comments at random
    const contentIndex = randomInt(postsComments.length);
    const contents = postsComments[contentIndex];
    // pick a post or comment at random
    const content = contents[randomInt(contents.length)];
    // pick a user at random
    const user = users[randomInt(users.length)];

    const reactionRecord = await prisma.reaction.create({
      data: {
        ...reactionData[i],
        // attach reaction to either a comment or post based on random number
        // selected above
        ...(contentIndex === 0
          ? {postId: content.id}
          : {commentId: content.id}),
        createdDate: addDays(content.createdDate, randomInt(7)),
        userId: user.id,
      },
    });

    reactionRecords.push(reactionRecord);
  }

  return reactionRecords;
}
