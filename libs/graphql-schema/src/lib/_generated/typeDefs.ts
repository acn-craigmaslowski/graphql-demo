/***********************************************
 * THIS CODE IS AUTO-GENERATED
 * DO NOT EDIT MANUALLY!
 * To regenerate this file run:
 *   npx nx run graphql-schema:generate
 * Edit this generated file's configuration at:
 *   libs/graphql-schema/codegen.yml
 ************************************************/

// Generated on 2023-08-28T12:58:51-07:00

import {gql} from "@apollo/client";

export const typeDefs = gql`
  schema {
    query: Query
    mutation: Mutation
  }

  type Comment {
    body: String!
    createdDate: String!
    id: String!
    lastModifiedDate: String!
    post: Post
    reactionCount: Int
    reactions: [Reaction!]
    user: User
  }

  input CreateCommentMutationInput {
    body: String!
    postId: String!
  }

  input CreatePostMutationInput {
    body: String!
  }

  input CreateReactionMutationInput {
    commentId: String
    postId: String
    reaction: ReactionType!
  }

  input CreateUserMutationInput {
    name: String!
  }

  input DeleteCommentMutationInput {
    id: String!
  }

  input DeletePostMutationInput {
    id: String!
  }

  input DeleteReactionMutationInput {
    id: String!
  }

  input DeleteUserMutationInput {
    id: String!
  }

  """
  Root Mutation
  """
  type Mutation {
    """
    Create a new Comment
    """
    createComment(input: CreateCommentMutationInput!): Comment!
    """
    Create a new Post
    """
    createPost(input: CreatePostMutationInput!): Post!
    """
    Create a new Reaction
    """
    createReaction(input: CreateReactionMutationInput!): Reaction!
    """
    Create a new Reaction
    """
    createUser(input: CreateUserMutationInput!): User!
    """
    Delete a Comment
    """
    deleteComment(input: DeleteCommentMutationInput!): Comment!
    """
    Delete a Post
    """
    deletePost(input: DeletePostMutationInput!): Post!
    """
    Delete a Reaction
    """
    deleteReaction(input: DeleteReactionMutationInput!): Reaction!
    """
    Delete a User
    """
    deleteUser(input: DeleteUserMutationInput!): User!
    """
    Returns true
    """
    noop: Boolean
    """
    Update an existing Comment
    """
    updateComment(input: UpdateCommentMutationInput!): Comment!
    """
    Update an existing Post
    """
    updatePost(input: UpdatePostMutationInput!): Post!
    """
    Update an existing Reaction
    """
    updateReaction(input: UpdateReactionMutationInput!): Reaction!
    """
    Update an existing User
    """
    updateUser(input: UpdateUserMutationInput!): User!
  }

  type Post {
    body: String!
    commentCount: Int
    comments: [Comment!]
    createdDate: String!
    id: String!
    lastModifiedDate: String!
    reactionCount: Int
    reactions: [Reaction!]
    user: User
  }

  """
  Root Query
  """
  type Query {
    """
    Returns a list of all Comments for a specific for a specific user or for
    a specific piece of content.
    """
    comments(
      fetchReactions: Boolean!
      input: ReadCommentsQueryInput!
    ): [Comment!]!
    """
    Returns the currently logged in user's info
    """
    currentUser: User!
    """
    Returns true if the server is up
    """
    heartbeat: Boolean
    """
    Returns a list of all Posts, a single Post, or all Posts for a specific user
    """
    posts(input: ReadPostsQueryInput!): [Post!]!
    """
    Returns a list of all Reactions for a specific for a specific user or for
    a specific piece of content.
    """
    reactions(input: ReadReactionsQueryInput!): [Reaction!]!
    """
    Returns a specific user
    """
    users(input: ReadUserQueryInput!): User!
  }

  type Reaction {
    comment: Comment
    createdDate: String!
    id: String!
    lastModifiedDate: String!
    post: Post
    reaction: ReactionType!
    user: User
  }

  enum ReactionType {
    Angry
    Like
    Love
    Sad
    Wow
  }

  input ReadCommentsQueryInput {
    commentId: String
    postId: String
    userId: String
  }

  input ReadPostsQueryInput {
    postId: String
    userId: String
  }

  input ReadReactionsQueryInput {
    commentId: String
    postId: String
    userId: String
  }

  input ReadUserQueryInput {
    commentId: String
    postId: String
    userId: String
  }

  input UpdateCommentMutationInput {
    body: String!
    id: String!
  }

  input UpdatePostMutationInput {
    body: String!
    id: String!
  }

  input UpdateReactionMutationInput {
    id: String!
    reaction: ReactionType!
  }

  input UpdateUserMutationInput {
    id: String!
    name: String!
  }

  type User {
    comments: [Comment!]
    id: String!
    name: String!
    posts: [Post!]
    profileImageUrl: String
    reactions: [Reaction!]
  }
`;
export default typeDefs;
