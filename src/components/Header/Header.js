import React from 'react';
import { Box, Divider, Grid, Typography } from '@material-ui/core';
import SiteTitle from './SiteTitle';
import Search from './Search';

const Header = () => (
  <Box>
    <Box pt={2} pb={2}>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={6} md={6} lg={2}>
          <SiteTitle />
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={3}>
          <Search />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={7}>
          <Box display="flex" justifyContent="flex-end">
            <Typography variant="body1">Write a post</Typography>
            <Typography variant="body1">Notifications</Typography>
            <Typography variant="body1">Profile</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
    <Box pb={2}>
      <Divider />
    </Box>
  </Box>
);

export default Header;
