import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Box, CardHeader, makeStyles } from '@material-ui/core';
import Like from './Like';
import Bookmark from './Bookmark';
import Tags from './Tags';
import { useHistory } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';

const useStyles = makeStyles(() => ({
  cardHeader: {
    paddingBottom: '0px',
  },
  title: {
    fontWeight: 'bold',
  },
  card: {
    cursor: 'pointer',
  },
}));

const PostCard = ({
  title,
  tags,
  likeCount,
  bookmarkCount,
  userName,
  id,
  postDate,
}) => {
  const classes = useStyles();
  const history = useHistory();

  const handlePostClick = () => {
    history.push(`/view/${id}`);
  };

  return (
    <Box pb={1}>
      <Card className={classes.card} onClick={handlePostClick}>
        <CardHeader
          className={classes.cardHeader}
          avatar={<Avatar userName={userName} />}
          title={<Typography variant="body1">{userName}</Typography>}
          subheader={
            <Typography variant="caption" color="textSecondary">
              {postDate}
            </Typography>
          }
        />
        <CardContent className={classes.cardContent}>
          <Typography
            className={classes.title}
            variant="h6"
            component="h1"
            color="primary"
          >
            {title}
          </Typography>
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
