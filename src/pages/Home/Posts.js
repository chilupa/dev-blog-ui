import React from 'react';
import PostCard from '../../components/PostCard/PostCard';

const Posts = ({ posts }) =>
  posts.map((post, index) => <PostCard key={index} {...post} />);

export default Posts;
