import React from 'react';
import { Box, Typography } from '@mui/material';

const Like = ({ likeCount }) => {
  return (
    likeCount > 0 && (
      <Box component="span">
        <Typography variant="caption" component="span" color="secondary">
          {likeCount > 1 ? `${likeCount} Likes` : `${likeCount} Like`}
        </Typography>
      </Box>
    )
  );
};

export default Like;
