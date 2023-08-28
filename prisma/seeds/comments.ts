import {PrismaClient, Comment, Post, User} from "@prisma/client";
import {loadJsonSchema} from "./loadJsonSchema";
import {randomInt} from "crypto";
import {addDays} from "date-fns";

export async function seedComments(
  prisma: PrismaClient,
  users: User[],
  posts: Post[]
) {
  const commentData = loadJsonSchema("./json/comments.json");
  let commentRecords: Comment[] = [];
  for (let i = 0; i < commentData.length; i++) {
    const post = posts[randomInt(posts.length)];
    const user = users[randomInt(users.length)];
    const createdDate = addDays(post.createdDate, randomInt(7));
    const commentRecord = await prisma.comment.create({
      data: {
        ...commentData[i],
        createdDate,
        lastModifiedDate: createdDate,
        postId: post.id,
        userId: user.id,
      },
    });

    commentRecords.push(commentRecord);
  }

  return commentRecords;
}
