import React from 'react';
import { Box } from '@material-ui/core';
import SimpleCard from '../../components/SimpleCard/SimpleCard';

const Promotion = ({ title, description }) => (
  <Box>
    <SimpleCard title={title} description={description} />
  </Box>
);

export default Promotion;
