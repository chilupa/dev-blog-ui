import { Alert } from '@mui/material';
import React from 'react';

const ErrorAlert = () => {
  return (
    <Alert severity="error">Something went wrong. Please try again.</Alert>
  );
};

export default ErrorAlert;
