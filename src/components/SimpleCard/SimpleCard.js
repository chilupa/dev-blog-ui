import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

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
