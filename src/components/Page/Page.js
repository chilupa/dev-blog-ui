import React from 'react';
import Fade from '@material-ui/core/Fade';

import Box from '@material-ui/core/Box';

const Page = ({ children, ...props }) => (
  <Fade in={true} {...{ timeout: 500 }}>
    <Box {...props}>{children}</Box>
  </Fade>
);

export default Page;
