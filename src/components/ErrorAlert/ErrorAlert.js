import { Box, Typography } from '@mui/material';
import React from 'react';

const ErrorAlert = () => {
  return (
    <Box display="flex">
      <Box></Box>
      <Box>
        <Typography variant="body1">
          Something went wrong. Please try again.
        </Typography>
      </Box>
    </Box>
  );
};

export default ErrorAlert;
