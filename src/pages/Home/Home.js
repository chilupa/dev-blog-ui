import React from 'react';
import { Box, Grid, useMediaQuery } from '@material-ui/core';
import { posts } from '../../mocks/posts';
import Posts from './Posts';
import Promotion from './Promotion';
import Menu from '../../components/Menu/Menu';

const Home = () => {
  const isMobileOrTabletDevice = useMediaQuery(
    (theme) => theme.breakpoints.up('sm') || theme.breakpoints.up('md')
  );
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3} md={3} lg={3}>
          {isMobileOrTabletDevice && <Menu />}
          {isMobileOrTabletDevice && <Box pt={1}>Tags</Box>}
          {isMobileOrTabletDevice && <Box pt={1}>Some Ad</Box>}
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Posts posts={posts} />
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}>
          <Promotion title="Promotion 1" description="Promotion description" />
          <Box pt={2}>
            <Promotion
              title="Promotion 2"
              description="Promotion description"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
