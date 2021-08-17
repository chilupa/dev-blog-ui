import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  title: {
    fontWeight: 'bold',
  },
});

const SimpleCard = ({ title, description, promotionTag }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardContent>
        <Typography
          className={classes.title}
          variant="h6"
          component="h1"
          color="secondary"
        >
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
        <Box>
          <Typography variant="body2">{promotionTag}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SimpleCard;
