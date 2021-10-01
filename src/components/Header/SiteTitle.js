import React from 'react';
import { Box, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  title: {
    cursor: 'pointer',
  },
});
const SiteTitle = () => {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  };
  return (
    <Typography variant="body1" component="span">
      <Box
        className={classes.title}
        onClick={handleClick}
        data-testid="siteTitle"
        component="span"
        fontWeight={800}
        fontSize={24}
      >
        Dev Blog
      </Box>
    </Typography>
  );
};

export default SiteTitle;
