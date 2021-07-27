import React from 'react';
import { Box, Button, Divider, Grid, IconButton } from '@material-ui/core';
import SiteTitle from './SiteTitle';
import Search from './Search';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Header = () => (
  <Box>
    <Box pt={1} pb={1}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={6} sm={6} md={6} lg={2}>
          <SiteTitle />
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={3}>
          <Search />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={7}>
          <Box display="flex" justifyContent="flex-end" alignItems="center">
            <Box>
              <Button color="primary" variant="contained">
                Create Post
              </Button>
            </Box>
            <Box>
              <IconButton aria-label="delete">
                <NotificationsIcon />
              </IconButton>
            </Box>
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
