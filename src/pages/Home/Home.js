import React from 'react';
import { Box, Grid, useMediaQuery } from '@material-ui/core';
import { posts } from 'mocks/posts';
import Menu from 'components/Menu/Menu';
import PostCard from 'components/PostCard/PostCard';
import Page from 'components/Page/Page';
import PromotionCard from '../../components/PromotionCard/PromotionCard';
import promotions from 'mocks/promotions';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from 'graphql/queries';
import Loader from 'pages/App/Loader';

const Home = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  const isMobileOrTablet = useMediaQuery(
    (theme) => theme.breakpoints.up('sm') || theme.breakpoints.up('md')
  );
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return `Error! ${error.message}`;
  }

  console.log(`data`, data);

  return (
    <Page>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3} md={3} lg={3}>
          {isMobileOrTablet && <Menu />}
          {isMobileOrTablet && <Box pt={1}>Tags</Box>}
          {isMobileOrTablet && <Box pt={1}>Some Ad</Box>}
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          {data.posts?.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}>
          {promotions.map((props) => (
            <Box key={props.id} pb={1}>
              <PromotionCard {...props} />
            </Box>
          ))}
        </Grid>
      </Grid>
    </Page>
  );
};

export default Home;
