import React from 'react';
import { BlogPostListType } from 'notion';
import { PostCard } from '../post-card';
import { Box } from '@mui/material';

const PostList = ({ blogPostList }: BlogPostListType) => {
  return (
    <Box
      className="container mx-auto"
      display="grid"
      gridTemplateColumns="repeat(3, 1fr)"
      gap={2}
    >
      {blogPostList.map(({ id, cover, properties }) => (
        <PostCard id={id} key={id} cover={cover} properties={properties} />
      ))}
    </Box>
  );
};

export default PostList;
