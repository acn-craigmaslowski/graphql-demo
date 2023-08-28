import {PrismaClient} from "@prisma/client";

import type {User} from "../_generated";

export interface GraphQLDemoContext {
  getCurrentUser: () => Promise<User>;
  prisma: PrismaClient;
}
