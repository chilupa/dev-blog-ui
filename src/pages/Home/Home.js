import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { posts } from '../../mocks/posts';
import Posts from './Posts';
import Promotion from './Promotion';
import Menu from './Menu';
import SimpleCard from '../../components/SimpleCard/SimpleCard';

const Home = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Box>
            <Menu />
          </Box>
          <Box pt={1}>Tags</Box>
          <Box pt={1}>Some Ad</Box>
        </Grid>
        <Grid item xs={6}>
          <Posts posts={posts} />
        </Grid>
        <Grid item xs={3}>
          <Promotion title="Promotion 1" description="Promotion description" />
          <Box>
            <SimpleCard
              title="Join Global Change Hackathon"
              description="Some description about Hackathon which will help user know what the Hackathon is about"
            />
          </Box>
          <Box pt={1}>
            <SimpleCard
              title="Join Global Change Hackathon"
              description="Some description about Hackathon which will help user know what the Hackathon is about"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
