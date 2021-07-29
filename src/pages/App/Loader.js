import React from 'react';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = () => (
  <Box textAlign="center" data-testid="loader">
    <CircularProgress color="secondary" />
  </Box>
);

export default Loader;
