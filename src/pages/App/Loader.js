import React from 'react';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = (props) => (
  <Box textAlign="center" data-testid="loader">
    <CircularProgress color="secondary" {...props} />
  </Box>
);

export default Loader;
