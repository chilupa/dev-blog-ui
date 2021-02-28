import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Avatar, Box, CardHeader, makeStyles } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import Like from './Like';
import Bookmark from './Bookmark';
import Tags from './Tags';

const useStyles = makeStyles(() => ({
  avatar: {
    backgroundColor: red[500],
  },
  cardHeader: {
    paddingBottom: '0px',
  },
}));

const PostCard = ({ title, description, tags, likeCount, bookmarkCount }) => {
  const classes = useStyles();
  return (
    <Box pb={1}>
      <Card>
        <CardHeader
          className={classes.cardHeader}
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              P
            </Avatar>
          }
          title={<Typography variant="body1">Pavan Chilukuri</Typography>}
          subheader={
            <Typography variant="caption" color="textSecondary">
              Feb 23, 2021
            </Typography>
          }
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="h6" component="h1" color="primary">
            {title}
          </Typography>
          {description && (
            <Typography variant="body1" component="p">
              {description}
            </Typography>
          )}
          <Tags tags={tags} />
          <Box pt={1}>
            <Like likeCount={likeCount} />
            <Bookmark likeCount={likeCount} bookmarkCount={bookmarkCount} />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PostCard;
