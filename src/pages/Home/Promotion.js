import React from 'react';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import SimpleCard from '../../components/SimpleCard/SimpleCard';

const Promotion = ({ title, description }) => (
  <Box>
    <SimpleCard title={title} description={description} />
  </Box>
);

Promotion.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Promotion;
