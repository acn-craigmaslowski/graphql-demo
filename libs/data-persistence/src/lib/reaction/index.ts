import {
  CreateReactionMutationInput,
  ReadReactionsQueryInput,
  UpdateReactionMutationInput,
  DeleteReactionMutationInput,
  Comment,
  Reaction,
  User,
  Post,
} from "@graphql-demo/graphql-schema";
import {
  PrismaInstance,
  enumFromStringValue,
  getGqlCommentFromDbComment,
  getGqlPostFromDbPost,
  getGqlReactionFromDbReaction,
} from "../etc";
import {ReactionType as DbReactionType} from "@prisma/client";
import {BaseData} from "../BaseData";

export class ReactionData extends BaseData {
  constructor(prisma: PrismaInstance, user: User) {
    super(prisma, user);
  }

  async create(input: CreateReactionMutationInput): Promise<Reaction> {
    const {id: userId} = this.user;
    const {commentId, postId, reaction: inputReaction} = input;
    const reaction =
      enumFromStringValue(DbReactionType, inputReaction) || DbReactionType.Like;

    const result = await this.prisma.reaction.create({
      data: {
        commentId,
        postId,
        reaction,
        userId,
      },
      include: {user: true},
    });

    return getGqlReactionFromDbReaction(result);
  }

  async update(input: UpdateReactionMutationInput): Promise<Reaction> {
    const {id: userId} = this.user;
    const {id, reaction: inputReaction} = input;
    const reaction =
      enumFromStringValue(DbReactionType, inputReaction) || DbReactionType.Like;

    const result = await this.prisma.reaction.update({
      data: {
        lastModifiedDate: new Date(),
        reaction,
      },
      include: {user: true},
      where: {id, userId},
    });

    return getGqlReactionFromDbReaction(result);
  }

  async delete(input: DeleteReactionMutationInput): Promise<Reaction> {
    const {id} = input;
    const result = await this.prisma.reaction.delete({
      where: {id, userId: this.user.id},
    });

    return getGqlReactionFromDbReaction(result);
  }

  async readMany(input: ReadReactionsQueryInput): Promise<Reaction[]> {
    const {commentId, postId, userId} = input;
    if (!commentId && !postId && !userId) {
      throw new Error("commentId parameter must be supplied");
    }
    const result = await this.prisma.reaction.findMany({
      include: {user: true},
      where: commentId
        ? {commentId}
        : postId
        ? {postId}
        : userId
        ? {userId}
        : {},
    });

    return result.map(getGqlReactionFromDbReaction);
  }

  async readComment(reaction: Reaction): Promise<Comment | null> {
    const result = await this.prisma.reaction.findFirst({
      include: {comment: true},
      where: {id: reaction.id},
    });

    return result.comment ? getGqlCommentFromDbComment(result.comment) : null;
  }

  async readPost(reaction: Reaction): Promise<Post | null> {
    const result = await this.prisma.reaction.findFirst({
      include: {post: true},
      where: {id: reaction.id},
    });
    return result.post ? getGqlPostFromDbPost(result.post) : null;
  }

  async readUser(reaction: Reaction): Promise<User> {
    const result = await this.prisma.reaction.findFirst({
      include: {user: true},
      where: {id: reaction.id},
    });

    return result.user;
  }

  async countCommentReactions({id: commentId}: Comment): Promise<number> {
    const count = await this.prisma.reaction.count({where: {commentId}});
    return count;
  }

  async countPostReactions({id: postId}: Post): Promise<number> {
    const count = await this.prisma.reaction.count({where: {postId}});
    return count;
  }
}
