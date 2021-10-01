import React from 'react';
import { Box, Typography } from '@mui/material';

const Tags = ({ tags }) => {
  return (
    tags && (
      <Box pt={1} data-testid="tags">
        {tags.map((tag, index) => (
          <Box component="span" key={index}>
            <Typography component="span" variant="body2" color="textSecondary">
              {`#${tag} `}
            </Typography>
          </Box>
        ))}
      </Box>
    )
  );
};

export default Tags;
