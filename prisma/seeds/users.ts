import {PrismaClient, User} from "@prisma/client";
import {loadJsonSchema} from "./loadJsonSchema";

export async function seedUsers(prisma: PrismaClient) {
  const userData = loadJsonSchema("./json/users.json");
  let userRecords: User[] = [];
  for (let i = 0; i < userData.length; i++) {
    const userRecord = await prisma.user.create({
      data: {
        ...userData[i],
      },
    });
    userRecords.push(userRecord);
  }

  return userRecords;
  // return await userData.map(async (user: User) => {
  //   return await prisma.user.create({data: {...user}});
  // });
}
