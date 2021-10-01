import React from 'react';
import Fade from '@mui/material/Fade';

import Box from '@mui/material/Box';

const Page = ({ children, ...props }) => (
  <Fade in={true} {...{ timeout: 500 }}>
    <Box {...props}>{children}</Box>
  </Fade>
);

export default Page;
