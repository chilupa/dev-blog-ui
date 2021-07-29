import React from 'react';
import { makeStyles } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { Avatar as MuiAvatar } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  avatar: {
    backgroundColor: red[500],
  },
}));

const Avatar = ({ userName }) => {
  const classes = useStyles();
  return (
    <MuiAvatar aria-label="recipe" className={classes.avatar}>
      {userName.slice(0, 1)}
    </MuiAvatar>
  );
};

export default Avatar;
