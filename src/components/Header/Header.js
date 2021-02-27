import { Box, Divider, Grid, Typography } from '@material-ui/core';
import React from 'react';

const Header = () => {
  return (
    <Box>
      <Box pt={2} pb={2}>
        <Grid container xs={12}>
          <Grid item xs={2}>
            <Typography variant="body1" component="span">
              Site name
            </Typography>
            <Typography variant="body1" component="span">
              Search bar
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Box display="flex" justifyContent="flex-end">
              <Typography variant="body1">Write a post</Typography>
              <Typography variant="body1">Notifications</Typography>
              <Typography variant="body1">Profile</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box pt={2} pb={2}>
        <Divider />
      </Box>
    </Box>
  );
};

export default Header;
