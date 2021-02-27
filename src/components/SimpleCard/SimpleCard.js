import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const SimpleCard = ({ title, description }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="h1" color="secondary">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SimpleCard;
