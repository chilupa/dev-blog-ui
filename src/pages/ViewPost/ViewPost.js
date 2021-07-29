import React, { useEffect } from 'react';
import {
  Box,
  Chip,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import { useParams } from 'react-router-dom';
import Page from '../../components/Page/Page';
import { posts } from '../../mocks/posts';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import BookmarkBorderRoundedIcon from '@material-ui/icons/BookmarkBorderRounded';
import Avatar from '../../components/Avatar/Avatar';
const useStyles = makeStyles({
  title: {
    fontWeight: 'bold',
  },
  icon: {
    fontSize: '32px',
  },
  chip: {
    borderRadius: 5,
    fontWeight: 'bold',
  },
});

const Count = ({ text }) => <Typography variant="body2">{text}</Typography>;

const ViewPost = () => {
  const classes = useStyles();
  const { postId } = useParams();

  const post = posts.find(({ id }) => id === JSON.parse(postId));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Page>
      <Grid container>
        <Grid item lg={2}>
          <Box textAlign="center" display="flex" flexDirection="column">
            <Box>
              <IconButton size="medium">
                <FavoriteBorderRoundedIcon />
              </IconButton>
              <Count text={post.likeCount} />
            </Box>
            <Box pt={1}>
              <IconButton>
                <BookmarkBorderRoundedIcon />
              </IconButton>
              <Count text={post.bookmarkCount} />
            </Box>
          </Box>
        </Grid>
        <Grid item lg={7}>
          <Paper elevation={3}>
            <Box p={2}>
              <Typography className={classes.title} variant="h5">
                {post.title}
              </Typography>
              <Box pt={2} pb={1}>
                {post.tags.map((value, index) => (
                  <Box key={index} component="span" pr={0.5}>
                    <Chip
                      className={classes.chip}
                      color="secondary"
                      label={`#${value}`}
                    />
                  </Box>
                ))}
              </Box>
              <Box pt={1} display="flex" alignItems="center">
                <Box>
                  <Avatar userName={post.userName} />
                </Box>
                <Box pl={1}>
                  <Typography variant="body1">{post.userName}</Typography>
                </Box>
                <Box pl={2}>
                  <Typography variant="body2" color="textSecondary">
                    {post.postDate}
                  </Typography>
                </Box>
              </Box>
              <Box pt={3}>
                <Typography variant="body1">{post.description}</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item lg={3}></Grid>
      </Grid>
    </Page>
  );
};

export default ViewPost;
