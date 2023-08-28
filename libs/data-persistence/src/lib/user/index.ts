import {
  CreateUserMutationInput,
  ReadUserQueryInput,
  UpdateUserMutationInput,
  DeleteUserMutationInput,
  Comment,
  Post,
  Reaction,
  User,
} from "@graphql-demo/graphql-schema";
import {
  PrismaInstance,
  getGqlCommentFromDbComment,
  getGqlPostFromDbPost,
  getGqlReactionFromDbReaction,
} from "../etc";
import {BaseData} from "../BaseData";

export class UserData extends BaseData {
  constructor(prisma: PrismaInstance, user: User) {
    super(prisma, user);
  }

  async create(input: CreateUserMutationInput): Promise<User> {
    return await this.prisma.user.create({
      data: input,
    });
  }

  async update(input: UpdateUserMutationInput): Promise<User> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {id, ...data} = input;
    return await this.prisma.user.update({data, where: {id}});
  }

  async delete(input: DeleteUserMutationInput): Promise<User> {
    const {id} = input;
    return await this.prisma.user.delete({where: {id}});
  }

  async readOne(input: ReadUserQueryInput): Promise<User> {
    const {userId} = input;
    if (!userId) {
      throw new Error("userId parameter must be supplied");
    }

    return await this.prisma.user.findFirstOrThrow({
      where: {id: userId},
    });
  }

  async readComments(user: User): Promise<Comment[]> {
    const result = await this.prisma.user.findFirst({
      include: {comments: true},
      where: {id: user.id},
    });

    return result.comments.map(getGqlCommentFromDbComment);
  }

  async readPosts(user: User): Promise<Post[]> {
    const result = await this.prisma.user.findFirstOrThrow({
      include: {posts: true},
      where: {id: user.id},
    });

    return result.posts.map(getGqlPostFromDbPost);
  }

  async readReactions(user: User): Promise<Reaction[]> {
    const result = await this.prisma.user.findFirstOrThrow({
      include: {reactions: true},
      where: {id: user.id},
    });

    return result.reactions.map(getGqlReactionFromDbReaction);
  }
}
