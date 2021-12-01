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
import { useDispatch } from 'react-redux';
import { setActivePost } from 'redux/reducers/post';

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

const PostCard = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const handlePostClick = () => {
    history.push(`/view/${props.id}`);
    dispatch(setActivePost(props));
  };

  return (
    <Box>
      {props.title && (
        <Box pb={1}>
          <Card className={classes.card} onClick={handlePostClick}>
            <CardHeader
              className={classes.cardHeader}
              avatar={<Avatar author={props.author} />}
              title={<Typography variant="body1">{props.author}</Typography>}
              subheader={
                <Typography variant="caption" color="textSecondary">
                  {props.postDate}
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
                {props.title}
              </Typography>
              <Tags tags={props.tags} />
              <Box pt={1}>
                <Like likeCount={props.likeCount} />
                <Bookmark
                  likeCount={props.likeCount}
                  bookmarkCount={props.bookmarkCount}
                />
              </Box>
            </CardContent>
          </Card>
        </Box>
      )}
    </Box>
  );
};

export default PostCard;
