import {PrismaClient, Post, User} from "@prisma/client";
import {loadJsonSchema} from "./loadJsonSchema";
import {randomInt} from "crypto";
import {subDays} from "date-fns";

export async function seedPosts(prisma: PrismaClient, users: User[]) {
  const postData: Post[] = loadJsonSchema("./json/posts.json");
  let postRecords: Post[] = [];

  for (let i = 0; i < postData.length; i++) {
    const index = randomInt(users.length);
    const user = users[index];
    const createdDate = subDays(new Date(), randomInt(730));

    const postRecord = await prisma.post.create({
      data: {
        ...postData[i],
        createdDate,
        lastModifiedDate: createdDate,
        userId: user.id,
      },
    });
    postRecords.push(postRecord);
  }

  return postRecords;
}
