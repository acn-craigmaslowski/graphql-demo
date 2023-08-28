import {
  CreatePostMutationInput,
  ReadPostsQueryInput,
  UpdatePostMutationInput,
  DeletePostMutationInput,
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

export class PostData extends BaseData {
  constructor(prisma: PrismaInstance, user: User) {
    super(prisma, user);
  }

  async create(input: CreatePostMutationInput): Promise<Post> {
    const result = await this.prisma.post.create({
      data: {
        ...input,
        userId: this.user.id,
      },
      include: {
        user: true,
      },
    });

    return getGqlPostFromDbPost(result);
  }

  async update(input: UpdatePostMutationInput): Promise<Post> {
    const {id, ...data} = input;

    const result = await this.prisma.post.update({
      data: {
        ...data,
        lastModifiedDate: new Date(),
      },
      include: {user: true},
      where: {
        id,
        userId: this.user.id,
      },
    });

    return getGqlPostFromDbPost(result);
  }

  async delete(input: DeletePostMutationInput): Promise<Post> {
    const {id} = input;
    const result = await this.prisma.post.delete({
      include: {user: true},
      where: {
        id,
        userId: this.user.id,
      },
    });

    return getGqlPostFromDbPost(result);
  }

  async readMany(input: ReadPostsQueryInput): Promise<Post[]> {
    const {userId} = input;
    const result = await this.prisma.post.findMany({
      where: userId ? {userId} : {},
    });

    return result.map(getGqlPostFromDbPost);
  }

  async readOne(input: ReadPostsQueryInput): Promise<Post> {
    const result = await this.prisma.post.findFirstOrThrow({
      where: {id: input.postId},
    });

    return getGqlPostFromDbPost(result);
  }

  async readComments(post: Post): Promise<Comment[]> {
    const result = await this.prisma.post.findFirst({
      include: {comments: true},
      where: {id: post.id},
    });
    return result.comments.map(getGqlCommentFromDbComment);
  }

  async readReactions(post: Post): Promise<Reaction[]> {
    const result = await this.prisma.post.findFirst({
      include: {reactions: true},
      where: {id: post.id},
    });
    return result.reactions.map(getGqlReactionFromDbReaction);
  }

  async readUser(post: Post): Promise<User> {
    const result = await this.prisma.post.findFirst({
      include: {user: true},
      where: {id: post.id},
    });

    return result.user;
  }
}
