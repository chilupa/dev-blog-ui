import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import SimpleCard from '../SimpleCard/SimpleCard';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    cursor: 'pointer',
  },
});

const PromotionCard = (props) => {
  const classes = useStyles();

  const history = useHistory();
  const handlePromotionClick = (promotionId) => {
    history.push(`/promotion/${promotionId}`);
  };

  return (
    <Box
      className={classes.card}
      onClick={() => handlePromotionClick(props.id)}
    >
      <SimpleCard title={props.title} promotionTag={props.promotionTag} />
    </Box>
  );
};

PromotionCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number,
};

export default PromotionCard;
