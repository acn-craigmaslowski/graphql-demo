import {PrismaClient} from "@prisma/client";
import {seedComments, seedPosts, seedReactions, seedUsers} from "./seeds";

const prisma = new PrismaClient();

async function main() {
  const users = await seedUsers(prisma);
  const posts = await seedPosts(prisma, users);
  const comments = await seedComments(prisma, users, posts);
  await seedReactions(prisma, users, posts, comments);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
