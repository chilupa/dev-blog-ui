import React from 'react';
import { Box, Typography } from '@material-ui/core';

const Bookmark = ({ likeCount, bookmarkCount }) => (
  <Box data-testid="bookmark" component="span" pl={likeCount === 0 ? 0 : 2}>
    {bookmarkCount > 0 && (
      <Typography variant="caption" component="span" color="secondary">
        {bookmarkCount > 1
          ? `${bookmarkCount} Bookmarks`
          : `${bookmarkCount} Bookmark`}
      </Typography>
    )}
  </Box>
);

export default Bookmark;
