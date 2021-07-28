import React from 'react';

import {
  Container,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core';
import { theme } from '../../utils';
import Header from '../../components/Header/Header';
import Home from '../Home/Home';

const App = () => (
  <ThemeProvider theme={responsiveFontSizes(theme)}>
    <Container maxWidth="lg">
      <Header />
      <Home />
    </Container>
  </ThemeProvider>
);

export default App;
