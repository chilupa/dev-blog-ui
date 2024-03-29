import React from 'react';
import { Box, Grid, IconButton, useMediaQuery, useTheme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import SiteTitle from './SiteTitle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CreatePostButton from './CreatePostButton';

const useStyles = makeStyles({
  container: {},
});

const Header = () => {
  const theme = useTheme();
  const classes = useStyles();
  const isMobileOrTablet = useMediaQuery(
    theme?.breakpoints.up('sm') || theme?.breakpoints.up('md')
  );
  return (
    <Box className={classes.container} fullWidth>
      <Box pt={1} pb={1}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={6} sm={2} md={4} lg={2}>
            <SiteTitle />
          </Grid>
          {isMobileOrTablet && (
            <Grid item xs={6} sm={6} md={4} lg={3}>
              {/* <Search /> */}
            </Grid>
          )}
          <Grid item xs={6} sm={4} md={4} lg={7}>
            <Box display="flex" justifyContent="flex-end" alignItems="center">
              <CreatePostButton />
              <Box>
                <IconButton aria-label="delete" size="large">
                  <NotificationsIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* <Box pb={2}>
        <Divider />
      </Box> */}
    </Box>
  );
};

export default Header;
