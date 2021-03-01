import React from 'react';
import { Box, Typography } from '@material-ui/core';

const SiteTitle = () => (
  <Typography variant="body1" component="span">
    <Box component="span" fontWeight={800} fontSize={24}>
      Dev Blog
    </Box>
  </Typography>
);

export default SiteTitle;
