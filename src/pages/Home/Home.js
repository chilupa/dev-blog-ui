import React from 'react';
import { Box, Grid } from '@material-ui/core';
import SimpleCard from '../../components/SimpleCard/SimpleCard';

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
