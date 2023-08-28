import {
  CreateCommentMutationInput,
  ReadCommentsQueryInput,
  UpdateCommentMutationInput,
  DeleteCommentMutationInput,
  Comment,
  User,
  Post,
  Reaction,
} from "@graphql-demo/graphql-schema";
import {PrismaInstance} from "../etc";
import {BaseData} from "../BaseData";
import {
  getGqlCommentFromDbComment,
  getGqlPostFromDbPost,
  getGqlReactionFromDbReaction,
} from "../etc";

export class CommentData extends BaseData {
  constructor(prisma: PrismaInstance, user: User) {
    super(prisma, user);
  }

  async create(input: CreateCommentMutationInput): Promise<Comment> {
    const result = await this.prisma.comment.create({
      data: {...input, userId: this.user.id},
    });
    return getGqlCommentFromDbComment(result);
  }

  async update(input: UpdateCommentMutationInput): Promise<Comment> {
    const {id, ...data} = input;

    const result = await this.prisma.comment.update({
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

    return getGqlCommentFromDbComment(result);
  }

  async delete(input: DeleteCommentMutationInput): Promise<Comment> {
    const {id} = input;
    const result = await this.prisma.comment.delete({
      include: {user: true},
      where: {
        id,
        userId: this.user.id,
      },
    });

    return getGqlCommentFromDbComment(result);
  }

  async readMany(input: ReadCommentsQueryInput): Promise<Comment[]> {
    const {postId, userId} = input;
    if (!postId && !userId) {
      throw new Error("postId or userId parameter must be supplied");
    }
    const result = await this.prisma.comment.findMany({
      include: {user: true},
      where: postId ? {postId} : userId ? {userId} : {},
    });

    return result.map(getGqlCommentFromDbComment);
  }

  async readOne(input: ReadCommentsQueryInput): Promise<Comment> {
    const {commentId} = input;
    if (!commentId) {
      throw new Error("commentId parameter must be supplied");
    }

    const result = await this.prisma.comment.findFirstOrThrow({
      include: {user: true},
      where: {id: commentId},
    });

    return getGqlCommentFromDbComment(result);
  }

  async readPost(comment: Comment): Promise<Post> {
    const result = await this.prisma.comment.findFirst({
      include: {post: true},
      where: {id: comment.id},
    });
    return getGqlPostFromDbPost(result.post);
  }

  async readReactions(comment: Comment): Promise<Reaction[]> {
    const result = await this.prisma.comment.findFirst({
      include: {reactions: true},
      where: {id: comment.id},
    });

    return result.reactions.map(getGqlReactionFromDbReaction);
  }

  async readUser(comment: Comment): Promise<User> {
    const result = await this.prisma.comment.findFirst({
      include: {user: true},
      where: {id: comment.id},
    });

    return result.user;
  }

  async countComments({id: postId}: Post): Promise<number> {
    const count = await this.prisma.comment.count({where: {postId}});
    return count;
  }
}
