import {PrismaClient} from "@prisma/client";
import {GraphQLDemoContext, User} from "@graphql-demo/graphql-schema";

const prisma = new PrismaClient();

/**
 * Function to create the context for PAT's Apollo Server
 */
export async function getContext(): Promise<GraphQLDemoContext> {
  return {
    getCurrentUser,
    prisma,
  };

  async function getCurrentUser(): Promise<User | null> {
    try {
      const user = prisma.user.findFirst({where: {name: "Jackie Moon"}});
      return user;
    } catch (err) {
      return null;
    }
  }
}
