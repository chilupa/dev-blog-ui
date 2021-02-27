import React from 'react';
import { Box, Grid } from '@material-ui/core';

const Home = () => {
  return (
    <Box>
      <Grid container xs={12}>
        <Grid item xs={3}>
          Column 1
        </Grid>
        <Grid item xs={6}>
          Column 2
        </Grid>
        <Grid item xs={3}>
          Column 3
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
