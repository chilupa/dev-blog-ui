import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = (props) => (
  <Box textAlign="center" data-testid="loader">
    <CircularProgress color="secondary" {...props} />
  </Box>
);

export default Loader;
