import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { red } from '@mui/material/colors';
import { Avatar as MuiAvatar } from '@mui/material';

const useStyles = makeStyles(() => ({
  avatar: {
    backgroundColor: red[500],
  },
}));

const Avatar = ({ author }) => {
  const classes = useStyles();
  return (
    <MuiAvatar aria-label="recipe" className={classes.avatar}>
      {author?.slice(0, 1)}
    </MuiAvatar>
  );
};

export default Avatar;
