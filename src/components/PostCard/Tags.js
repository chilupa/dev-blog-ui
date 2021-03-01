import React from 'react';
import { Box, Typography } from '@material-ui/core';

const Tags = ({ tags }) => {
  return (
    tags && (
      <Box pt={1}>
        {tags.map((tag, index) => (
          <Box component="span" key={index}>
            <Typography
              component="body2"
              color="textSecondary">{`#${tag} `}</Typography>
          </Box>
        ))}
      </Box>
    )
  );
};

export default Tags;
