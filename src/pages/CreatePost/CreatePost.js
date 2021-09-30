import { useMutation } from '@apollo/client';
import { Button } from '@material-ui/core';
import { CREATE_POST, GET_POSTS } from 'graphql/queries';
import React from 'react';
import Page from '../../components/Page/Page';

const CreatePost = () => {
  const [addPost] = useMutation(CREATE_POST, {
    refetchQueries: [
      {
        query: GET_POSTS,
      },
    ],
  });

  //console.log('props :>> ', props);

  const handleCreatePost = () => {
    addPost({
      variables: {
        addPostTitle: 'Fox news',
        addPostDescription: 'some description',
        addPostAuthor: 'GraphQL',
        addPostPostDate: '20 Feb 2020',
        addPostLikeCount: '1',
        addPostBookmarkCount: '1',
        addPostTags: ['react', 'java', 'spring boot'],
      },
    });
  };
  return (
    <Page>
      Post
      <Button onClick={handleCreatePost}>Create post</Button>
    </Page>
  );
};

export default CreatePost;
