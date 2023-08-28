/***********************************************
 * THIS CODE IS AUTO-GENERATED
 * DO NOT EDIT MANUALLY!
 * To regenerate this file run:
 *   npx nx run graphql-schema:generate
 * Edit this generated file's configuration at:
 *   libs/graphql-schema/codegen.yml
 ************************************************/

import {GraphQLResolveInfo} from "graphql";
import {GraphQLDemoContext} from "../etc";
import {gql} from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<T extends {[key: string]: unknown}, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | {[P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
const defaultOptions = {} as const;
// Generated on 2023-08-28T12:58:52-07:00

/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types */

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: {input: string; output: string};
  String: {input: string; output: string};
  Boolean: {input: boolean; output: boolean};
  Int: {input: number; output: number};
  Float: {input: number; output: number};
};

export type Comment = {
  __typename?: "Comment";
  body: Scalars["String"]["output"];
  createdDate: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  lastModifiedDate: Scalars["String"]["output"];
  post?: Maybe<Post>;
  reactionCount?: Maybe<Scalars["Int"]["output"]>;
  reactions?: Maybe<Array<Reaction>>;
  user?: Maybe<User>;
};

export type CreateCommentMutationInput = {
  body: Scalars["String"]["input"];
  postId: Scalars["String"]["input"];
};

export type CreatePostMutationInput = {
  body: Scalars["String"]["input"];
};

export type CreateReactionMutationInput = {
  commentId?: InputMaybe<Scalars["String"]["input"]>;
  postId?: InputMaybe<Scalars["String"]["input"]>;
  reaction: ReactionType;
};

export type CreateUserMutationInput = {
  name: Scalars["String"]["input"];
};

export type DeleteCommentMutationInput = {
  id: Scalars["String"]["input"];
};

export type DeletePostMutationInput = {
  id: Scalars["String"]["input"];
};

export type DeleteReactionMutationInput = {
  id: Scalars["String"]["input"];
};

export type DeleteUserMutationInput = {
  id: Scalars["String"]["input"];
};

/** Root Mutation */
export type Mutation = {
  __typename?: "Mutation";
  /** Create a new Comment */
  createComment: Comment;
  /** Create a new Post */
  createPost: Post;
  /** Create a new Reaction */
  createReaction: Reaction;
  /** Create a new Reaction */
  createUser: User;
  /** Delete a Comment */
  deleteComment: Comment;
  /** Delete a Post */
  deletePost: Post;
  /** Delete a Reaction */
  deleteReaction: Reaction;
  /** Delete a User */
  deleteUser: User;
  /** Returns true */
  noop?: Maybe<Scalars["Boolean"]["output"]>;
  /** Update an existing Comment */
  updateComment: Comment;
  /** Update an existing Post */
  updatePost: Post;
  /** Update an existing Reaction */
  updateReaction: Reaction;
  /** Update an existing User */
  updateUser: User;
};

/** Root Mutation */
export type MutationCreateCommentArgs = {
  input: CreateCommentMutationInput;
};

/** Root Mutation */
export type MutationCreatePostArgs = {
  input: CreatePostMutationInput;
};

/** Root Mutation */
export type MutationCreateReactionArgs = {
  input: CreateReactionMutationInput;
};

/** Root Mutation */
export type MutationCreateUserArgs = {
  input: CreateUserMutationInput;
};

/** Root Mutation */
export type MutationDeleteCommentArgs = {
  input: DeleteCommentMutationInput;
};

/** Root Mutation */
export type MutationDeletePostArgs = {
  input: DeletePostMutationInput;
};

/** Root Mutation */
export type MutationDeleteReactionArgs = {
  input: DeleteReactionMutationInput;
};

/** Root Mutation */
export type MutationDeleteUserArgs = {
  input: DeleteUserMutationInput;
};

/** Root Mutation */
export type MutationUpdateCommentArgs = {
  input: UpdateCommentMutationInput;
};

/** Root Mutation */
export type MutationUpdatePostArgs = {
  input: UpdatePostMutationInput;
};

/** Root Mutation */
export type MutationUpdateReactionArgs = {
  input: UpdateReactionMutationInput;
};

/** Root Mutation */
export type MutationUpdateUserArgs = {
  input: UpdateUserMutationInput;
};

export type Post = {
  __typename?: "Post";
  body: Scalars["String"]["output"];
  commentCount?: Maybe<Scalars["Int"]["output"]>;
  comments?: Maybe<Array<Comment>>;
  createdDate: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  lastModifiedDate: Scalars["String"]["output"];
  reactionCount?: Maybe<Scalars["Int"]["output"]>;
  reactions?: Maybe<Array<Reaction>>;
  user?: Maybe<User>;
};

/** Root Query */
export type Query = {
  __typename?: "Query";
  /**
   * Returns a list of all Comments for a specific for a specific user or for
   * a specific piece of content.
   */
  comments: Array<Comment>;
  /** Returns the currently logged in user's info */
  currentUser: User;
  /** Returns true if the server is up */
  heartbeat?: Maybe<Scalars["Boolean"]["output"]>;
  /** Returns a list of all Posts, a single Post, or all Posts for a specific user */
  posts: Array<Post>;
  /**
   * Returns a list of all Reactions for a specific for a specific user or for
   * a specific piece of content.
   */
  reactions: Array<Reaction>;
  /** Returns a specific user */
  users: User;
};

/** Root Query */
export type QueryCommentsArgs = {
  fetchReactions: Scalars["Boolean"]["input"];
  input: ReadCommentsQueryInput;
};

/** Root Query */
export type QueryPostsArgs = {
  input: ReadPostsQueryInput;
};

/** Root Query */
export type QueryReactionsArgs = {
  input: ReadReactionsQueryInput;
};

/** Root Query */
export type QueryUsersArgs = {
  input: ReadUserQueryInput;
};

export type Reaction = {
  __typename?: "Reaction";
  comment?: Maybe<Comment>;
  createdDate: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  lastModifiedDate: Scalars["String"]["output"];
  post?: Maybe<Post>;
  reaction: ReactionType;
  user?: Maybe<User>;
};

export enum ReactionType {
  Angry = "Angry",
  Like = "Like",
  Love = "Love",
  Sad = "Sad",
  Wow = "Wow",
}

export type ReadCommentsQueryInput = {
  commentId?: InputMaybe<Scalars["String"]["input"]>;
  postId?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["String"]["input"]>;
};

export type ReadPostsQueryInput = {
  postId?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["String"]["input"]>;
};

export type ReadReactionsQueryInput = {
  commentId?: InputMaybe<Scalars["String"]["input"]>;
  postId?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["String"]["input"]>;
};

export type ReadUserQueryInput = {
  commentId?: InputMaybe<Scalars["String"]["input"]>;
  postId?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateCommentMutationInput = {
  body: Scalars["String"]["input"];
  id: Scalars["String"]["input"];
};

export type UpdatePostMutationInput = {
  body: Scalars["String"]["input"];
  id: Scalars["String"]["input"];
};

export type UpdateReactionMutationInput = {
  id: Scalars["String"]["input"];
  reaction: ReactionType;
};

export type UpdateUserMutationInput = {
  id: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
};

export type User = {
  __typename?: "User";
  comments?: Maybe<Array<Comment>>;
  id: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  posts?: Maybe<Array<Post>>;
  profileImageUrl?: Maybe<Scalars["String"]["output"]>;
  reactions?: Maybe<Array<Reaction>>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    {[key in TKey]: TResult},
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    {[key in TKey]: TResult},
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
  Comment: ResolverTypeWrapper<Comment>;
  CreateCommentMutationInput: CreateCommentMutationInput;
  CreatePostMutationInput: CreatePostMutationInput;
  CreateReactionMutationInput: CreateReactionMutationInput;
  CreateUserMutationInput: CreateUserMutationInput;
  DeleteCommentMutationInput: DeleteCommentMutationInput;
  DeletePostMutationInput: DeletePostMutationInput;
  DeleteReactionMutationInput: DeleteReactionMutationInput;
  DeleteUserMutationInput: DeleteUserMutationInput;
  Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
  Mutation: ResolverTypeWrapper<{}>;
  Post: ResolverTypeWrapper<Post>;
  Query: ResolverTypeWrapper<{}>;
  Reaction: ResolverTypeWrapper<Reaction>;
  ReactionType: ReactionType;
  ReadCommentsQueryInput: ReadCommentsQueryInput;
  ReadPostsQueryInput: ReadPostsQueryInput;
  ReadReactionsQueryInput: ReadReactionsQueryInput;
  ReadUserQueryInput: ReadUserQueryInput;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  UpdateCommentMutationInput: UpdateCommentMutationInput;
  UpdatePostMutationInput: UpdatePostMutationInput;
  UpdateReactionMutationInput: UpdateReactionMutationInput;
  UpdateUserMutationInput: UpdateUserMutationInput;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars["Boolean"]["output"];
  Comment: Comment;
  CreateCommentMutationInput: CreateCommentMutationInput;
  CreatePostMutationInput: CreatePostMutationInput;
  CreateReactionMutationInput: CreateReactionMutationInput;
  CreateUserMutationInput: CreateUserMutationInput;
  DeleteCommentMutationInput: DeleteCommentMutationInput;
  DeletePostMutationInput: DeletePostMutationInput;
  DeleteReactionMutationInput: DeleteReactionMutationInput;
  DeleteUserMutationInput: DeleteUserMutationInput;
  Int: Scalars["Int"]["output"];
  Mutation: {};
  Post: Post;
  Query: {};
  Reaction: Reaction;
  ReadCommentsQueryInput: ReadCommentsQueryInput;
  ReadPostsQueryInput: ReadPostsQueryInput;
  ReadReactionsQueryInput: ReadReactionsQueryInput;
  ReadUserQueryInput: ReadUserQueryInput;
  String: Scalars["String"]["output"];
  UpdateCommentMutationInput: UpdateCommentMutationInput;
  UpdatePostMutationInput: UpdatePostMutationInput;
  UpdateReactionMutationInput: UpdateReactionMutationInput;
  UpdateUserMutationInput: UpdateUserMutationInput;
  User: User;
};

export type CommentResolvers<
  ContextType = GraphQLDemoContext,
  ParentType extends ResolversParentTypes["Comment"] = ResolversParentTypes["Comment"]
> = {
  body?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdDate?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  lastModifiedDate?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  post?: Resolver<Maybe<ResolversTypes["Post"]>, ParentType, ContextType>;
  reactionCount?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  reactions?: Resolver<
    Maybe<Array<ResolversTypes["Reaction"]>>,
    ParentType,
    ContextType
  >;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = GraphQLDemoContext,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
  createComment?: Resolver<
    ResolversTypes["Comment"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateCommentArgs, "input">
  >;
  createPost?: Resolver<
    ResolversTypes["Post"],
    ParentType,
    ContextType,
    RequireFields<MutationCreatePostArgs, "input">
  >;
  createReaction?: Resolver<
    ResolversTypes["Reaction"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateReactionArgs, "input">
  >;
  createUser?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserArgs, "input">
  >;
  deleteComment?: Resolver<
    ResolversTypes["Comment"],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteCommentArgs, "input">
  >;
  deletePost?: Resolver<
    ResolversTypes["Post"],
    ParentType,
    ContextType,
    RequireFields<MutationDeletePostArgs, "input">
  >;
  deleteReaction?: Resolver<
    ResolversTypes["Reaction"],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteReactionArgs, "input">
  >;
  deleteUser?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserArgs, "input">
  >;
  noop?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  updateComment?: Resolver<
    ResolversTypes["Comment"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCommentArgs, "input">
  >;
  updatePost?: Resolver<
    ResolversTypes["Post"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdatePostArgs, "input">
  >;
  updateReaction?: Resolver<
    ResolversTypes["Reaction"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateReactionArgs, "input">
  >;
  updateUser?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserArgs, "input">
  >;
};

export type PostResolvers<
  ContextType = GraphQLDemoContext,
  ParentType extends ResolversParentTypes["Post"] = ResolversParentTypes["Post"]
> = {
  body?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  commentCount?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  comments?: Resolver<
    Maybe<Array<ResolversTypes["Comment"]>>,
    ParentType,
    ContextType
  >;
  createdDate?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  lastModifiedDate?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  reactionCount?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  reactions?: Resolver<
    Maybe<Array<ResolversTypes["Reaction"]>>,
    ParentType,
    ContextType
  >;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = GraphQLDemoContext,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  comments?: Resolver<
    Array<ResolversTypes["Comment"]>,
    ParentType,
    ContextType,
    RequireFields<QueryCommentsArgs, "fetchReactions" | "input">
  >;
  currentUser?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  heartbeat?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  posts?: Resolver<
    Array<ResolversTypes["Post"]>,
    ParentType,
    ContextType,
    RequireFields<QueryPostsArgs, "input">
  >;
  reactions?: Resolver<
    Array<ResolversTypes["Reaction"]>,
    ParentType,
    ContextType,
    RequireFields<QueryReactionsArgs, "input">
  >;
  users?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<QueryUsersArgs, "input">
  >;
};

export type ReactionResolvers<
  ContextType = GraphQLDemoContext,
  ParentType extends ResolversParentTypes["Reaction"] = ResolversParentTypes["Reaction"]
> = {
  comment?: Resolver<Maybe<ResolversTypes["Comment"]>, ParentType, ContextType>;
  createdDate?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  lastModifiedDate?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  post?: Resolver<Maybe<ResolversTypes["Post"]>, ParentType, ContextType>;
  reaction?: Resolver<ResolversTypes["ReactionType"], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = GraphQLDemoContext,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = {
  comments?: Resolver<
    Maybe<Array<ResolversTypes["Comment"]>>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  posts?: Resolver<
    Maybe<Array<ResolversTypes["Post"]>>,
    ParentType,
    ContextType
  >;
  profileImageUrl?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  reactions?: Resolver<
    Maybe<Array<ResolversTypes["Reaction"]>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = GraphQLDemoContext> = {
  Comment?: CommentResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Reaction?: ReactionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

export type CommentScalarsFragment = {
  __typename?: "Comment";
  body: string;
  id: string;
  lastModifiedDate: string;
};

export type CommentPostEdgeFragment = {
  __typename?: "Post";
  id: string;
  user?: {
    __typename?: "User";
    id: string;
    name: string;
    profileImageUrl?: string | null;
  } | null;
};

export type CommentReactionEdgeFragment = {
  __typename?: "Reaction";
  id: string;
  lastModifiedDate: string;
  reaction: ReactionType;
  user?: {
    __typename?: "User";
    id: string;
    name: string;
    profileImageUrl?: string | null;
  } | null;
};

export type CommentUserEdgeFragment = {
  __typename?: "User";
  id: string;
  name: string;
  profileImageUrl?: string | null;
};

export type CommentWithEdgesFragment = {
  __typename?: "Comment";
  body: string;
  id: string;
  lastModifiedDate: string;
  reactions?: Array<{
    __typename?: "Reaction";
    id: string;
    lastModifiedDate: string;
    reaction: ReactionType;
    user?: {
      __typename?: "User";
      id: string;
      name: string;
      profileImageUrl?: string | null;
    } | null;
  }> | null;
  user?: {
    __typename?: "User";
    id: string;
    name: string;
    profileImageUrl?: string | null;
  } | null;
};

export type CommentWithPostEdgeFragment = {
  __typename?: "Comment";
  body: string;
  id: string;
  lastModifiedDate: string;
  post?: {
    __typename?: "Post";
    id: string;
    user?: {
      __typename?: "User";
      id: string;
      name: string;
      profileImageUrl?: string | null;
    } | null;
  } | null;
  user?: {
    __typename?: "User";
    id: string;
    name: string;
    profileImageUrl?: string | null;
  } | null;
};

export type PostScalarsFragment = {
  __typename?: "Post";
  id: string;
  body: string;
  commentCount?: number | null;
  lastModifiedDate: string;
  reactionCount?: number | null;
};

export type PostCommentEdgeFragment = {
  __typename?: "Comment";
  body: string;
  id: string;
  lastModifiedDate: string;
  reactions?: Array<{
    __typename?: "Reaction";
    id: string;
    lastModifiedDate: string;
    reaction: ReactionType;
    user?: {
      __typename?: "User";
      id: string;
      name: string;
      profileImageUrl?: string | null;
    } | null;
  }> | null;
  user?: {
    __typename?: "User";
    id: string;
    name: string;
    profileImageUrl?: string | null;
  } | null;
};

export type PostReactionEdgeFragment = {
  __typename?: "Reaction";
  id: string;
  lastModifiedDate: string;
  reaction: ReactionType;
  user?: {
    __typename?: "User";
    id: string;
    name: string;
    profileImageUrl?: string | null;
  } | null;
};

export type PostUserEdgeFragment = {
  __typename?: "User";
  id: string;
  name: string;
  profileImageUrl?: string | null;
};

export type PostWithUserEdgeFragment = {
  __typename?: "Post";
  id: string;
  body: string;
  commentCount?: number | null;
  lastModifiedDate: string;
  reactionCount?: number | null;
  user?: {
    __typename?: "User";
    id: string;
    name: string;
    profileImageUrl?: string | null;
  } | null;
};

export type PostWithConditionalEdgesFragment = {
  __typename?: "Post";
  id: string;
  body: string;
  commentCount?: number | null;
  lastModifiedDate: string;
  reactionCount?: number | null;
  comments?: Array<{
    __typename?: "Comment";
    body: string;
    id: string;
    lastModifiedDate: string;
    reactions?: Array<{
      __typename?: "Reaction";
      id: string;
      lastModifiedDate: string;
      reaction: ReactionType;
      user?: {
        __typename?: "User";
        id: string;
        name: string;
        profileImageUrl?: string | null;
      } | null;
    }> | null;
    user?: {
      __typename?: "User";
      id: string;
      name: string;
      profileImageUrl?: string | null;
    } | null;
  }> | null;
  reactions?: Array<{
    __typename?: "Reaction";
    id: string;
    lastModifiedDate: string;
    reaction: ReactionType;
    user?: {
      __typename?: "User";
      id: string;
      name: string;
      profileImageUrl?: string | null;
    } | null;
  }> | null;
  user?: {
    __typename?: "User";
    id: string;
    name: string;
    profileImageUrl?: string | null;
  } | null;
};

export type ReactionScalarsFragment = {
  __typename?: "Reaction";
  id: string;
  lastModifiedDate: string;
  reaction: ReactionType;
};

export type ReactionCommentEdgeFragment = {
  __typename?: "Comment";
  body: string;
  id: string;
  lastModifiedDate: string;
  user?: {
    __typename?: "User";
    id: string;
    name: string;
    profileImageUrl?: string | null;
  } | null;
  reactions?: Array<{
    __typename?: "Reaction";
    id: string;
    lastModifiedDate: string;
    reaction: ReactionType;
    user?: {
      __typename?: "User";
      id: string;
      name: string;
      profileImageUrl?: string | null;
    } | null;
  }> | null;
};

export type ReactionPostEdgeFragment = {
  __typename?: "Post";
  id: string;
  body: string;
  commentCount?: number | null;
  lastModifiedDate: string;
  reactionCount?: number | null;
  user?: {
    __typename?: "User";
    id: string;
    name: string;
    profileImageUrl?: string | null;
  } | null;
};

export type ReactionUserEdgeFragment = {
  __typename?: "User";
  id: string;
  name: string;
  profileImageUrl?: string | null;
};

export type ReactionWithUserEdgeFragment = {
  __typename?: "Reaction";
  id: string;
  lastModifiedDate: string;
  reaction: ReactionType;
  user?: {
    __typename?: "User";
    id: string;
    name: string;
    profileImageUrl?: string | null;
  } | null;
};

export type ReactionWithAllEdgesFragment = {
  __typename?: "Reaction";
  id: string;
  lastModifiedDate: string;
  reaction: ReactionType;
  comment?: {
    __typename?: "Comment";
    body: string;
    id: string;
    lastModifiedDate: string;
    post?: {
      __typename?: "Post";
      id: string;
      user?: {
        __typename?: "User";
        id: string;
        name: string;
        profileImageUrl?: string | null;
      } | null;
    } | null;
    user?: {
      __typename?: "User";
      id: string;
      name: string;
      profileImageUrl?: string | null;
    } | null;
    reactions?: Array<{
      __typename?: "Reaction";
      id: string;
      lastModifiedDate: string;
      reaction: ReactionType;
      user?: {
        __typename?: "User";
        id: string;
        name: string;
        profileImageUrl?: string | null;
      } | null;
    }> | null;
  } | null;
  post?: {
    __typename?: "Post";
    id: string;
    body: string;
    commentCount?: number | null;
    lastModifiedDate: string;
    reactionCount?: number | null;
    user?: {
      __typename?: "User";
      id: string;
      name: string;
      profileImageUrl?: string | null;
    } | null;
  } | null;
  user?: {
    __typename?: "User";
    id: string;
    name: string;
    profileImageUrl?: string | null;
  } | null;
};

export type UserScalarsFragment = {
  __typename?: "User";
  id: string;
  name: string;
  profileImageUrl?: string | null;
};

export type CreateCommentMutationVariables = Exact<{
  input: CreateCommentMutationInput;
}>;

export type CreateCommentMutation = {
  __typename?: "Mutation";
  createComment: {
    __typename?: "Comment";
    body: string;
    id: string;
    lastModifiedDate: string;
  };
};

export type DeleteCommentMutationVariables = Exact<{
  input: DeleteCommentMutationInput;
}>;

export type DeleteCommentMutation = {
  __typename?: "Mutation";
  deleteComment: {
    __typename?: "Comment";
    body: string;
    id: string;
    lastModifiedDate: string;
  };
};

export type UpdateCommentMutationVariables = Exact<{
  input: UpdateCommentMutationInput;
}>;

export type UpdateCommentMutation = {
  __typename?: "Mutation";
  updateComment: {
    __typename?: "Comment";
    body: string;
    id: string;
    lastModifiedDate: string;
  };
};

export type CreatePostMutationVariables = Exact<{
  input: CreatePostMutationInput;
}>;

export type CreatePostMutation = {
  __typename?: "Mutation";
  createPost: {
    __typename?: "Post";
    id: string;
    body: string;
    commentCount?: number | null;
    lastModifiedDate: string;
    reactionCount?: number | null;
  };
};

export type DeletePostMutationVariables = Exact<{
  input: DeletePostMutationInput;
}>;

export type DeletePostMutation = {
  __typename?: "Mutation";
  deletePost: {
    __typename?: "Post";
    id: string;
    body: string;
    commentCount?: number | null;
    lastModifiedDate: string;
    reactionCount?: number | null;
  };
};

export type UpdatePostMutationVariables = Exact<{
  input: UpdatePostMutationInput;
}>;

export type UpdatePostMutation = {
  __typename?: "Mutation";
  updatePost: {
    __typename?: "Post";
    id: string;
    body: string;
    commentCount?: number | null;
    lastModifiedDate: string;
    reactionCount?: number | null;
  };
};

export type CreateReactionMutationVariables = Exact<{
  input: CreateReactionMutationInput;
}>;

export type CreateReactionMutation = {
  __typename?: "Mutation";
  createReaction: {
    __typename?: "Reaction";
    id: string;
    lastModifiedDate: string;
    reaction: ReactionType;
  };
};

export type DeleteReactionMutationVariables = Exact<{
  input: DeleteReactionMutationInput;
}>;

export type DeleteReactionMutation = {
  __typename?: "Mutation";
  deleteReaction: {
    __typename?: "Reaction";
    id: string;
    lastModifiedDate: string;
    reaction: ReactionType;
  };
};

export type UpdateReactionMutationVariables = Exact<{
  input: UpdateReactionMutationInput;
}>;

export type UpdateReactionMutation = {
  __typename?: "Mutation";
  updateReaction: {
    __typename?: "Reaction";
    id: string;
    lastModifiedDate: string;
    reaction: ReactionType;
  };
};

export type GetCommentsQueryVariables = Exact<{
  input: ReadCommentsQueryInput;
  fetchReactions: Scalars["Boolean"]["input"];
}>;

export type GetCommentsQuery = {
  __typename?: "Query";
  comments: Array<{
    __typename?: "Comment";
    body: string;
    id: string;
    lastModifiedDate: string;
    reactions?: Array<{
      __typename?: "Reaction";
      id: string;
      lastModifiedDate: string;
      reaction: ReactionType;
      user?: {
        __typename?: "User";
        id: string;
        name: string;
        profileImageUrl?: string | null;
      } | null;
    }> | null;
    user?: {
      __typename?: "User";
      id: string;
      name: string;
      profileImageUrl?: string | null;
    } | null;
  }>;
};

export type GetPostsQueryVariables = Exact<{
  input: ReadPostsQueryInput;
  fetchUser: Scalars["Boolean"]["input"];
  fetchComments: Scalars["Boolean"]["input"];
  fetchReactions: Scalars["Boolean"]["input"];
}>;

export type GetPostsQuery = {
  __typename?: "Query";
  posts: Array<{
    __typename?: "Post";
    id: string;
    body: string;
    commentCount?: number | null;
    lastModifiedDate: string;
    reactionCount?: number | null;
    comments?: Array<{
      __typename?: "Comment";
      body: string;
      id: string;
      lastModifiedDate: string;
      reactions?: Array<{
        __typename?: "Reaction";
        id: string;
        lastModifiedDate: string;
        reaction: ReactionType;
        user?: {
          __typename?: "User";
          id: string;
          name: string;
          profileImageUrl?: string | null;
        } | null;
      }> | null;
      user?: {
        __typename?: "User";
        id: string;
        name: string;
        profileImageUrl?: string | null;
      } | null;
    }> | null;
    reactions?: Array<{
      __typename?: "Reaction";
      id: string;
      lastModifiedDate: string;
      reaction: ReactionType;
      user?: {
        __typename?: "User";
        id: string;
        name: string;
        profileImageUrl?: string | null;
      } | null;
    }> | null;
    user?: {
      __typename?: "User";
      id: string;
      name: string;
      profileImageUrl?: string | null;
    } | null;
  }>;
};

export type GetReactionsQueryVariables = Exact<{
  input: ReadReactionsQueryInput;
}>;

export type GetReactionsQuery = {
  __typename?: "Query";
  reactions: Array<{
    __typename?: "Reaction";
    id: string;
    lastModifiedDate: string;
    reaction: ReactionType;
    user?: {
      __typename?: "User";
      id: string;
      name: string;
      profileImageUrl?: string | null;
    } | null;
  }>;
};

export type GetCurrentUserQueryVariables = Exact<{[key: string]: never}>;

export type GetCurrentUserQuery = {
  __typename?: "Query";
  currentUser: {
    __typename?: "User";
    id: string;
    name: string;
    profileImageUrl?: string | null;
  };
};

export type GetUserInteractionsQueryVariables = Exact<{
  input: ReadUserQueryInput;
  fetchReactions: Scalars["Boolean"]["input"];
}>;

export type GetUserInteractionsQuery = {
  __typename?: "Query";
  users: {
    __typename?: "User";
    id: string;
    name: string;
    profileImageUrl?: string | null;
    comments?: Array<{
      __typename?: "Comment";
      body: string;
      id: string;
      lastModifiedDate: string;
      post?: {
        __typename?: "Post";
        id: string;
        user?: {
          __typename?: "User";
          id: string;
          name: string;
          profileImageUrl?: string | null;
        } | null;
      } | null;
      user?: {
        __typename?: "User";
        id: string;
        name: string;
        profileImageUrl?: string | null;
      } | null;
    }> | null;
    reactions?: Array<{
      __typename?: "Reaction";
      id: string;
      lastModifiedDate: string;
      reaction: ReactionType;
      comment?: {
        __typename?: "Comment";
        body: string;
        id: string;
        lastModifiedDate: string;
        post?: {
          __typename?: "Post";
          id: string;
          user?: {
            __typename?: "User";
            id: string;
            name: string;
            profileImageUrl?: string | null;
          } | null;
        } | null;
        user?: {
          __typename?: "User";
          id: string;
          name: string;
          profileImageUrl?: string | null;
        } | null;
        reactions?: Array<{
          __typename?: "Reaction";
          id: string;
          lastModifiedDate: string;
          reaction: ReactionType;
          user?: {
            __typename?: "User";
            id: string;
            name: string;
            profileImageUrl?: string | null;
          } | null;
        }> | null;
      } | null;
      post?: {
        __typename?: "Post";
        id: string;
        body: string;
        commentCount?: number | null;
        lastModifiedDate: string;
        reactionCount?: number | null;
        user?: {
          __typename?: "User";
          id: string;
          name: string;
          profileImageUrl?: string | null;
        } | null;
      } | null;
      user?: {
        __typename?: "User";
        id: string;
        name: string;
        profileImageUrl?: string | null;
      } | null;
    }> | null;
  };
};

export type GetUserPostsQueryVariables = Exact<{
  input: ReadUserQueryInput;
}>;

export type GetUserPostsQuery = {
  __typename?: "Query";
  users: {
    __typename?: "User";
    id: string;
    name: string;
    profileImageUrl?: string | null;
    posts?: Array<{
      __typename?: "Post";
      id: string;
      body: string;
      commentCount?: number | null;
      lastModifiedDate: string;
      reactionCount?: number | null;
      comments?: Array<{
        __typename?: "Comment";
        body: string;
        id: string;
        lastModifiedDate: string;
        reactions?: Array<{
          __typename?: "Reaction";
          id: string;
          lastModifiedDate: string;
          reaction: ReactionType;
          user?: {
            __typename?: "User";
            id: string;
            name: string;
            profileImageUrl?: string | null;
          } | null;
        }> | null;
        user?: {
          __typename?: "User";
          id: string;
          name: string;
          profileImageUrl?: string | null;
        } | null;
      }> | null;
      reactions?: Array<{
        __typename?: "Reaction";
        id: string;
        lastModifiedDate: string;
        reaction: ReactionType;
        user?: {
          __typename?: "User";
          id: string;
          name: string;
          profileImageUrl?: string | null;
        } | null;
      }> | null;
      user?: {
        __typename?: "User";
        id: string;
        name: string;
        profileImageUrl?: string | null;
      } | null;
    }> | null;
  };
};

export type GetUserQueryVariables = Exact<{
  input: ReadUserQueryInput;
}>;

export type GetUserQuery = {
  __typename?: "Query";
  users: {
    __typename?: "User";
    id: string;
    name: string;
    profileImageUrl?: string | null;
  };
};

export const CommentScalarsFragmentDoc = gql`
  fragment CommentScalars on Comment {
    body
    id
    lastModifiedDate
  }
`;
export const UserScalarsFragmentDoc = gql`
  fragment UserScalars on User {
    id
    name
    profileImageUrl
  }
`;
export const CommentPostEdgeFragmentDoc = gql`
  fragment CommentPostEdge on Post {
    id
    user {
      ...UserScalars
    }
  }
  ${UserScalarsFragmentDoc}
`;
export const CommentUserEdgeFragmentDoc = gql`
  fragment CommentUserEdge on User {
    ...UserScalars
  }
  ${UserScalarsFragmentDoc}
`;
export const CommentWithPostEdgeFragmentDoc = gql`
  fragment CommentWithPostEdge on Comment {
    ...CommentScalars
    post {
      ...CommentPostEdge
    }
    user {
      ...CommentUserEdge
    }
  }
  ${CommentScalarsFragmentDoc}
  ${CommentPostEdgeFragmentDoc}
  ${CommentUserEdgeFragmentDoc}
`;
export const PostScalarsFragmentDoc = gql`
  fragment PostScalars on Post {
    id
    body
    commentCount
    lastModifiedDate
    reactionCount
  }
`;
export const PostUserEdgeFragmentDoc = gql`
  fragment PostUserEdge on User {
    ...UserScalars
  }
  ${UserScalarsFragmentDoc}
`;
export const PostWithUserEdgeFragmentDoc = gql`
  fragment PostWithUserEdge on Post {
    ...PostScalars
    user {
      ...PostUserEdge
    }
  }
  ${PostScalarsFragmentDoc}
  ${PostUserEdgeFragmentDoc}
`;
export const ReactionScalarsFragmentDoc = gql`
  fragment ReactionScalars on Reaction {
    id
    lastModifiedDate
    reaction
  }
`;
export const ReactionUserEdgeFragmentDoc = gql`
  fragment ReactionUserEdge on User {
    ...UserScalars
  }
  ${UserScalarsFragmentDoc}
`;
export const ReactionWithUserEdgeFragmentDoc = gql`
  fragment ReactionWithUserEdge on Reaction {
    ...ReactionScalars
    user {
      ...ReactionUserEdge
    }
  }
  ${ReactionScalarsFragmentDoc}
  ${ReactionUserEdgeFragmentDoc}
`;
export const CommentReactionEdgeFragmentDoc = gql`
  fragment CommentReactionEdge on Reaction {
    ...ReactionWithUserEdge
  }
  ${ReactionWithUserEdgeFragmentDoc}
`;
export const CommentWithEdgesFragmentDoc = gql`
  fragment CommentWithEdges on Comment {
    ...CommentScalars
    reactions @include(if: $fetchReactions) {
      ...CommentReactionEdge
    }
    user {
      ...CommentUserEdge
    }
  }
  ${CommentScalarsFragmentDoc}
  ${CommentReactionEdgeFragmentDoc}
  ${CommentUserEdgeFragmentDoc}
`;
export const PostCommentEdgeFragmentDoc = gql`
  fragment PostCommentEdge on Comment {
    ...CommentWithEdges
  }
  ${CommentWithEdgesFragmentDoc}
`;
export const PostReactionEdgeFragmentDoc = gql`
  fragment PostReactionEdge on Reaction {
    ...ReactionWithUserEdge
  }
  ${ReactionWithUserEdgeFragmentDoc}
`;
export const PostWithConditionalEdgesFragmentDoc = gql`
  fragment PostWithConditionalEdges on Post {
    ...PostScalars
    comments @include(if: $fetchComments) {
      ...PostCommentEdge
    }
    reactions @include(if: $fetchReactions) {
      ...PostReactionEdge
    }
    user @include(if: $fetchUser) {
      ...PostUserEdge
    }
  }
  ${PostScalarsFragmentDoc}
  ${PostCommentEdgeFragmentDoc}
  ${PostReactionEdgeFragmentDoc}
  ${PostUserEdgeFragmentDoc}
`;
export const ReactionCommentEdgeFragmentDoc = gql`
  fragment ReactionCommentEdge on Comment {
    ...CommentWithEdges
    user {
      ...CommentUserEdge
    }
  }
  ${CommentWithEdgesFragmentDoc}
  ${CommentUserEdgeFragmentDoc}
`;
export const ReactionPostEdgeFragmentDoc = gql`
  fragment ReactionPostEdge on Post {
    ...PostScalars
    user {
      ...PostUserEdge
    }
  }
  ${PostScalarsFragmentDoc}
  ${PostUserEdgeFragmentDoc}
`;
export const ReactionWithAllEdgesFragmentDoc = gql`
  fragment ReactionWithAllEdges on Reaction {
    ...ReactionScalars
    comment {
      ...ReactionCommentEdge
      post {
        ...CommentPostEdge
      }
    }
    post {
      ...ReactionPostEdge
    }
    user {
      ...ReactionUserEdge
    }
  }
  ${ReactionScalarsFragmentDoc}
  ${ReactionCommentEdgeFragmentDoc}
  ${CommentPostEdgeFragmentDoc}
  ${ReactionPostEdgeFragmentDoc}
  ${ReactionUserEdgeFragmentDoc}
`;
export const CreateCommentDocument = gql`
  mutation createComment($input: CreateCommentMutationInput!) {
    createComment(input: $input) {
      ...CommentScalars
    }
  }
  ${CommentScalarsFragmentDoc}
`;
export type CreateCommentMutationFn = Apollo.MutationFunction<
  CreateCommentMutation,
  CreateCommentMutationVariables
>;

/**
 * __useCreateCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentMutation, { data, loading, error }] = useCreateCommentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCommentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCommentMutation,
    CreateCommentMutationVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<
    CreateCommentMutation,
    CreateCommentMutationVariables
  >(CreateCommentDocument, options);
}
export type CreateCommentMutationHookResult = ReturnType<
  typeof useCreateCommentMutation
>;
export type CreateCommentMutationResult =
  Apollo.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = Apollo.BaseMutationOptions<
  CreateCommentMutation,
  CreateCommentMutationVariables
>;
export const DeleteCommentDocument = gql`
  mutation deleteComment($input: DeleteCommentMutationInput!) {
    deleteComment(input: $input) {
      ...CommentScalars
    }
  }
  ${CommentScalarsFragmentDoc}
`;
export type DeleteCommentMutationFn = Apollo.MutationFunction<
  DeleteCommentMutation,
  DeleteCommentMutationVariables
>;

/**
 * __useDeleteCommentMutation__
 *
 * To run a mutation, you first call `useDeleteCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCommentMutation, { data, loading, error }] = useDeleteCommentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteCommentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteCommentMutation,
    DeleteCommentMutationVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<
    DeleteCommentMutation,
    DeleteCommentMutationVariables
  >(DeleteCommentDocument, options);
}
export type DeleteCommentMutationHookResult = ReturnType<
  typeof useDeleteCommentMutation
>;
export type DeleteCommentMutationResult =
  Apollo.MutationResult<DeleteCommentMutation>;
export type DeleteCommentMutationOptions = Apollo.BaseMutationOptions<
  DeleteCommentMutation,
  DeleteCommentMutationVariables
>;
export const UpdateCommentDocument = gql`
  mutation updateComment($input: UpdateCommentMutationInput!) {
    updateComment(input: $input) {
      ...CommentScalars
    }
  }
  ${CommentScalarsFragmentDoc}
`;
export type UpdateCommentMutationFn = Apollo.MutationFunction<
  UpdateCommentMutation,
  UpdateCommentMutationVariables
>;

/**
 * __useUpdateCommentMutation__
 *
 * To run a mutation, you first call `useUpdateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCommentMutation, { data, loading, error }] = useUpdateCommentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCommentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCommentMutation,
    UpdateCommentMutationVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<
    UpdateCommentMutation,
    UpdateCommentMutationVariables
  >(UpdateCommentDocument, options);
}
export type UpdateCommentMutationHookResult = ReturnType<
  typeof useUpdateCommentMutation
>;
export type UpdateCommentMutationResult =
  Apollo.MutationResult<UpdateCommentMutation>;
export type UpdateCommentMutationOptions = Apollo.BaseMutationOptions<
  UpdateCommentMutation,
  UpdateCommentMutationVariables
>;
export const CreatePostDocument = gql`
  mutation createPost($input: CreatePostMutationInput!) {
    createPost(input: $input) {
      ...PostScalars
    }
  }
  ${PostScalarsFragmentDoc}
`;
export type CreatePostMutationFn = Apollo.MutationFunction<
  CreatePostMutation,
  CreatePostMutationVariables
>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePostMutation,
    CreatePostMutationVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(
    CreatePostDocument,
    options
  );
}
export type CreatePostMutationHookResult = ReturnType<
  typeof useCreatePostMutation
>;
export type CreatePostMutationResult =
  Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<
  CreatePostMutation,
  CreatePostMutationVariables
>;
export const DeletePostDocument = gql`
  mutation deletePost($input: DeletePostMutationInput!) {
    deletePost(input: $input) {
      ...PostScalars
    }
  }
  ${PostScalarsFragmentDoc}
`;
export type DeletePostMutationFn = Apollo.MutationFunction<
  DeletePostMutation,
  DeletePostMutationVariables
>;

/**
 * __useDeletePostMutation__
 *
 * To run a mutation, you first call `useDeletePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostMutation, { data, loading, error }] = useDeletePostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeletePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeletePostMutation,
    DeletePostMutationVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<DeletePostMutation, DeletePostMutationVariables>(
    DeletePostDocument,
    options
  );
}
export type DeletePostMutationHookResult = ReturnType<
  typeof useDeletePostMutation
>;
export type DeletePostMutationResult =
  Apollo.MutationResult<DeletePostMutation>;
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<
  DeletePostMutation,
  DeletePostMutationVariables
>;
export const UpdatePostDocument = gql`
  mutation updatePost($input: UpdatePostMutationInput!) {
    updatePost(input: $input) {
      ...PostScalars
    }
  }
  ${PostScalarsFragmentDoc}
`;
export type UpdatePostMutationFn = Apollo.MutationFunction<
  UpdatePostMutation,
  UpdatePostMutationVariables
>;

/**
 * __useUpdatePostMutation__
 *
 * To run a mutation, you first call `useUpdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useUpdatePostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdatePostMutation,
    UpdatePostMutationVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(
    UpdatePostDocument,
    options
  );
}
export type UpdatePostMutationHookResult = ReturnType<
  typeof useUpdatePostMutation
>;
export type UpdatePostMutationResult =
  Apollo.MutationResult<UpdatePostMutation>;
export type UpdatePostMutationOptions = Apollo.BaseMutationOptions<
  UpdatePostMutation,
  UpdatePostMutationVariables
>;
export const CreateReactionDocument = gql`
  mutation createReaction($input: CreateReactionMutationInput!) {
    createReaction(input: $input) {
      ...ReactionScalars
    }
  }
  ${ReactionScalarsFragmentDoc}
`;
export type CreateReactionMutationFn = Apollo.MutationFunction<
  CreateReactionMutation,
  CreateReactionMutationVariables
>;

/**
 * __useCreateReactionMutation__
 *
 * To run a mutation, you first call `useCreateReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReactionMutation, { data, loading, error }] = useCreateReactionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateReactionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateReactionMutation,
    CreateReactionMutationVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<
    CreateReactionMutation,
    CreateReactionMutationVariables
  >(CreateReactionDocument, options);
}
export type CreateReactionMutationHookResult = ReturnType<
  typeof useCreateReactionMutation
>;
export type CreateReactionMutationResult =
  Apollo.MutationResult<CreateReactionMutation>;
export type CreateReactionMutationOptions = Apollo.BaseMutationOptions<
  CreateReactionMutation,
  CreateReactionMutationVariables
>;
export const DeleteReactionDocument = gql`
  mutation deleteReaction($input: DeleteReactionMutationInput!) {
    deleteReaction(input: $input) {
      ...ReactionScalars
    }
  }
  ${ReactionScalarsFragmentDoc}
`;
export type DeleteReactionMutationFn = Apollo.MutationFunction<
  DeleteReactionMutation,
  DeleteReactionMutationVariables
>;

/**
 * __useDeleteReactionMutation__
 *
 * To run a mutation, you first call `useDeleteReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteReactionMutation, { data, loading, error }] = useDeleteReactionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteReactionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteReactionMutation,
    DeleteReactionMutationVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<
    DeleteReactionMutation,
    DeleteReactionMutationVariables
  >(DeleteReactionDocument, options);
}
export type DeleteReactionMutationHookResult = ReturnType<
  typeof useDeleteReactionMutation
>;
export type DeleteReactionMutationResult =
  Apollo.MutationResult<DeleteReactionMutation>;
export type DeleteReactionMutationOptions = Apollo.BaseMutationOptions<
  DeleteReactionMutation,
  DeleteReactionMutationVariables
>;
export const UpdateReactionDocument = gql`
  mutation updateReaction($input: UpdateReactionMutationInput!) {
    updateReaction(input: $input) {
      ...ReactionScalars
    }
  }
  ${ReactionScalarsFragmentDoc}
`;
export type UpdateReactionMutationFn = Apollo.MutationFunction<
  UpdateReactionMutation,
  UpdateReactionMutationVariables
>;

/**
 * __useUpdateReactionMutation__
 *
 * To run a mutation, you first call `useUpdateReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateReactionMutation, { data, loading, error }] = useUpdateReactionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateReactionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateReactionMutation,
    UpdateReactionMutationVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<
    UpdateReactionMutation,
    UpdateReactionMutationVariables
  >(UpdateReactionDocument, options);
}
export type UpdateReactionMutationHookResult = ReturnType<
  typeof useUpdateReactionMutation
>;
export type UpdateReactionMutationResult =
  Apollo.MutationResult<UpdateReactionMutation>;
export type UpdateReactionMutationOptions = Apollo.BaseMutationOptions<
  UpdateReactionMutation,
  UpdateReactionMutationVariables
>;
export const GetCommentsDocument = gql`
  query getComments(
    $input: ReadCommentsQueryInput!
    $fetchReactions: Boolean!
  ) {
    comments(input: $input, fetchReactions: $fetchReactions) {
      ...CommentWithEdges
    }
  }
  ${CommentWithEdgesFragmentDoc}
`;

/**
 * __useGetCommentsQuery__
 *
 * To run a query within a React component, call `useGetCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentsQuery({
 *   variables: {
 *      input: // value for 'input'
 *      fetchReactions: // value for 'fetchReactions'
 *   },
 * });
 */
export function useGetCommentsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCommentsQuery,
    GetCommentsQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<GetCommentsQuery, GetCommentsQueryVariables>(
    GetCommentsDocument,
    options
  );
}
export function useGetCommentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCommentsQuery,
    GetCommentsQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<GetCommentsQuery, GetCommentsQueryVariables>(
    GetCommentsDocument,
    options
  );
}
export type GetCommentsQueryHookResult = ReturnType<typeof useGetCommentsQuery>;
export type GetCommentsLazyQueryHookResult = ReturnType<
  typeof useGetCommentsLazyQuery
>;
export type GetCommentsQueryResult = Apollo.QueryResult<
  GetCommentsQuery,
  GetCommentsQueryVariables
>;
export const GetPostsDocument = gql`
  query getPosts(
    $input: ReadPostsQueryInput!
    $fetchUser: Boolean!
    $fetchComments: Boolean!
    $fetchReactions: Boolean!
  ) {
    posts(input: $input) {
      ...PostWithConditionalEdges
    }
  }
  ${PostWithConditionalEdgesFragmentDoc}
`;

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *      input: // value for 'input'
 *      fetchUser: // value for 'fetchUser'
 *      fetchComments: // value for 'fetchComments'
 *      fetchReactions: // value for 'fetchReactions'
 *   },
 * });
 */
export function useGetPostsQuery(
  baseOptions: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<GetPostsQuery, GetPostsQueryVariables>(
    GetPostsDocument,
    options
  );
}
export function useGetPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPostsQuery,
    GetPostsQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(
    GetPostsDocument,
    options
  );
}
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<
  typeof useGetPostsLazyQuery
>;
export type GetPostsQueryResult = Apollo.QueryResult<
  GetPostsQuery,
  GetPostsQueryVariables
>;
export const GetReactionsDocument = gql`
  query getReactions($input: ReadReactionsQueryInput!) {
    reactions(input: $input) {
      ...ReactionWithUserEdge
    }
  }
  ${ReactionWithUserEdgeFragmentDoc}
`;

/**
 * __useGetReactionsQuery__
 *
 * To run a query within a React component, call `useGetReactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReactionsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetReactionsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetReactionsQuery,
    GetReactionsQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<GetReactionsQuery, GetReactionsQueryVariables>(
    GetReactionsDocument,
    options
  );
}
export function useGetReactionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetReactionsQuery,
    GetReactionsQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<GetReactionsQuery, GetReactionsQueryVariables>(
    GetReactionsDocument,
    options
  );
}
export type GetReactionsQueryHookResult = ReturnType<
  typeof useGetReactionsQuery
>;
export type GetReactionsLazyQueryHookResult = ReturnType<
  typeof useGetReactionsLazyQuery
>;
export type GetReactionsQueryResult = Apollo.QueryResult<
  GetReactionsQuery,
  GetReactionsQueryVariables
>;
export const GetCurrentUserDocument = gql`
  query getCurrentUser {
    currentUser {
      ...UserScalars
    }
  }
  ${UserScalarsFragmentDoc}
`;

/**
 * __useGetCurrentUserQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentUserQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCurrentUserQuery,
    GetCurrentUserQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(
    GetCurrentUserDocument,
    options
  );
}
export function useGetCurrentUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCurrentUserQuery,
    GetCurrentUserQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(
    GetCurrentUserDocument,
    options
  );
}
export type GetCurrentUserQueryHookResult = ReturnType<
  typeof useGetCurrentUserQuery
>;
export type GetCurrentUserLazyQueryHookResult = ReturnType<
  typeof useGetCurrentUserLazyQuery
>;
export type GetCurrentUserQueryResult = Apollo.QueryResult<
  GetCurrentUserQuery,
  GetCurrentUserQueryVariables
>;
export const GetUserInteractionsDocument = gql`
  query getUserInteractions(
    $input: ReadUserQueryInput!
    $fetchReactions: Boolean!
  ) {
    users(input: $input) {
      ...UserScalars
      comments {
        ...CommentWithPostEdge
      }
      reactions {
        ...ReactionWithAllEdges
      }
    }
  }
  ${UserScalarsFragmentDoc}
  ${CommentWithPostEdgeFragmentDoc}
  ${ReactionWithAllEdgesFragmentDoc}
`;

/**
 * __useGetUserInteractionsQuery__
 *
 * To run a query within a React component, call `useGetUserInteractionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserInteractionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserInteractionsQuery({
 *   variables: {
 *      input: // value for 'input'
 *      fetchReactions: // value for 'fetchReactions'
 *   },
 * });
 */
export function useGetUserInteractionsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserInteractionsQuery,
    GetUserInteractionsQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<
    GetUserInteractionsQuery,
    GetUserInteractionsQueryVariables
  >(GetUserInteractionsDocument, options);
}
export function useGetUserInteractionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserInteractionsQuery,
    GetUserInteractionsQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<
    GetUserInteractionsQuery,
    GetUserInteractionsQueryVariables
  >(GetUserInteractionsDocument, options);
}
export type GetUserInteractionsQueryHookResult = ReturnType<
  typeof useGetUserInteractionsQuery
>;
export type GetUserInteractionsLazyQueryHookResult = ReturnType<
  typeof useGetUserInteractionsLazyQuery
>;
export type GetUserInteractionsQueryResult = Apollo.QueryResult<
  GetUserInteractionsQuery,
  GetUserInteractionsQueryVariables
>;
export const GetUserPostsDocument = gql`
  query getUserPosts($input: ReadUserQueryInput!) {
    users(input: $input) {
      ...UserScalars
      posts {
        ...PostScalars
        comments {
          ...CommentScalars
          reactions {
            ...ReactionWithUserEdge
          }
          user {
            ...UserScalars
          }
        }
        reactions {
          ...ReactionWithUserEdge
        }
        user {
          ...UserScalars
        }
      }
    }
  }
  ${UserScalarsFragmentDoc}
  ${PostScalarsFragmentDoc}
  ${CommentScalarsFragmentDoc}
  ${ReactionWithUserEdgeFragmentDoc}
`;

/**
 * __useGetUserPostsQuery__
 *
 * To run a query within a React component, call `useGetUserPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserPostsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetUserPostsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserPostsQuery,
    GetUserPostsQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<GetUserPostsQuery, GetUserPostsQueryVariables>(
    GetUserPostsDocument,
    options
  );
}
export function useGetUserPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserPostsQuery,
    GetUserPostsQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<GetUserPostsQuery, GetUserPostsQueryVariables>(
    GetUserPostsDocument,
    options
  );
}
export type GetUserPostsQueryHookResult = ReturnType<
  typeof useGetUserPostsQuery
>;
export type GetUserPostsLazyQueryHookResult = ReturnType<
  typeof useGetUserPostsLazyQuery
>;
export type GetUserPostsQueryResult = Apollo.QueryResult<
  GetUserPostsQuery,
  GetUserPostsQueryVariables
>;
export const GetUserDocument = gql`
  query getUser($input: ReadUserQueryInput!) {
    users(input: $input) {
      ...UserScalars
    }
  }
  ${UserScalarsFragmentDoc}
`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetUserQuery(
  baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options
  );
}
export function useGetUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options
  );
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<
  GetUserQuery,
  GetUserQueryVariables
>;
export const OPERATION_NAMES = {
  Query: {
    getComments: "getComments" as const,
    getPosts: "getPosts" as const,
    getReactions: "getReactions" as const,
    getCurrentUser: "getCurrentUser" as const,
    getUserInteractions: "getUserInteractions" as const,
    getUserPosts: "getUserPosts" as const,
    getUser: "getUser" as const,
  },
  Mutation: {
    createComment: "createComment" as const,
    deleteComment: "deleteComment" as const,
    updateComment: "updateComment" as const,
    createPost: "createPost" as const,
    deletePost: "deletePost" as const,
    updatePost: "updatePost" as const,
    createReaction: "createReaction" as const,
    deleteReaction: "deleteReaction" as const,
    updateReaction: "updateReaction" as const,
  },
  Fragment: {
    CommentScalars: "CommentScalars" as const,
    CommentPostEdge: "CommentPostEdge" as const,
    CommentReactionEdge: "CommentReactionEdge" as const,
    CommentUserEdge: "CommentUserEdge" as const,
    CommentWithEdges: "CommentWithEdges" as const,
    CommentWithPostEdge: "CommentWithPostEdge" as const,
    PostScalars: "PostScalars" as const,
    PostCommentEdge: "PostCommentEdge" as const,
    PostReactionEdge: "PostReactionEdge" as const,
    PostUserEdge: "PostUserEdge" as const,
    PostWithUserEdge: "PostWithUserEdge" as const,
    PostWithConditionalEdges: "PostWithConditionalEdges" as const,
    ReactionScalars: "ReactionScalars" as const,
    ReactionCommentEdge: "ReactionCommentEdge" as const,
    ReactionPostEdge: "ReactionPostEdge" as const,
    ReactionUserEdge: "ReactionUserEdge" as const,
    ReactionWithUserEdge: "ReactionWithUserEdge" as const,
    ReactionWithAllEdges: "ReactionWithAllEdges" as const,
    UserScalars: "UserScalars" as const,
  },
};
