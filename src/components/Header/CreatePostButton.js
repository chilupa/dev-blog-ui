import React from 'react';
import { Box, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

const CreatePostButton = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/create');
  };
  return (
    <Box>
      <Button color="primary" variant="contained" onClick={handleClick}>
        Create Post
      </Button>
    </Box>
  );
};

export default CreatePostButton;
