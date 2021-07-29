import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import SimpleCard from '../../components/SimpleCard/SimpleCard';

const useStyles = makeStyles({
  card: {
    cursor: 'pointer',
  },
});
const Promotion = ({ title, description }) => {
  const classes = useStyles();
  return (
    <Box  className={classes.card}
>
      <SimpleCard
        title={title}
        description={description}
      />
    </Box>
  );
};

Promotion.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Promotion;
