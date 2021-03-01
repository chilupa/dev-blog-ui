import React from 'react';
import { Box, Typography } from '@material-ui/core';

const Bookmark = ({ likeCount, bookmarkCount }) => (
  <Box component="span" pl={likeCount === 0 ? 0 : 2}>
    {bookmarkCount > 0 && (
      <Typography variant="body2" component="span">
        {bookmarkCount > 1
          ? `${bookmarkCount} Bookmarks`
          : `${bookmarkCount} Bookmark`}
      </Typography>
    )}
  </Box>
);

export default Bookmark;
