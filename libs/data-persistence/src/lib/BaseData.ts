import {User} from "@graphql-demo/graphql-schema";
import {PrismaInstance} from "./etc";

export class BaseData {
  prisma: PrismaInstance;
  user: User;

  constructor(prisma: PrismaInstance, user: User) {
    this.prisma = prisma;
    this.user = user;
  }
}
