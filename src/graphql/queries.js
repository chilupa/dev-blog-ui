import gql from 'graphql-tag';

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      title
      description
      author
      postDate
      likeCount
      bookmarkCount
      tags
    }
  }
`;

export const CREATE_POST = gql`
  mutation AddPostMutation(
    $addPostTitle: String
    $addPostDescription: String
    $addPostAuthor: String
    $addPostLikeCount: String
    $addPostBookmarkCount: String
    $addPostPostDate: String
    $addPostTags: [String]
  ) {
    addPost(
      title: $addPostTitle
      description: $addPostDescription
      author: $addPostAuthor
      likeCount: $addPostLikeCount
      bookmarkCount: $addPostBookmarkCount
      postDate: $addPostPostDate
      tags: $addPostTags
    ) {
      title
      description
      postDate
      likeCount
      bookmarkCount
      tags
      author
    }
  }
`;
