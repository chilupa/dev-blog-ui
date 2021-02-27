import React from 'react';

import {
  Container,
  responsiveFontSizes,
  ThemeProvider,
  Typography,
} from '@material-ui/core';
import { theme } from '../../utils';
import Header from '../../components/Header/Header';

function App() {
  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <Container maxWidth="lg">
        <Header />
      </Container>
    </ThemeProvider>
  );
}

export default App;
