import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { posts } from '../../mocks/posts';
import Posts from './Posts';
import Promotion from './Promotion';

const Home = () => {
  return (
    <Box>
      <Grid container xs={12} spacing={2}>
        <Grid item xs={3}>
          <Box>Menu</Box>
          <Box pt={1}>Tags</Box>
          <Box pt={1}>Some Ad</Box>
        </Grid>
        <Grid item xs={6}>
          <Posts posts={posts} />
        </Grid>
        <Grid item xs={3}>
          <Promotion title="Promotion 1" description="Promotion description" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
