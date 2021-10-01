import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CardHeader } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
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
  author,
  id,
  postDate,
}) => {
  const classes = useStyles();
  const history = useHistory();

  const handlePostClick = () => {
    history.push(`/view/${id}`);
  };

  return (
    <Box>
      {title && (
        <Box pb={1}>
          <Card className={classes.card} onClick={handlePostClick}>
            <CardHeader
              className={classes.cardHeader}
              avatar={<Avatar author={author} />}
              title={<Typography variant="body1">{author}</Typography>}
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
      )}
    </Box>
  );
};

export default PostCard;
