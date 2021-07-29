import React from 'react';
import {
  Container,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core';
import { theme } from '../../utils';
import Header from '../../components/Header/Header';

import { BrowserRouter as Router } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from './Loader';
import Routes from './Routes';

const App = () => (
  <ThemeProvider theme={responsiveFontSizes(theme)}>
    <Container maxWidth="lg">
      <Router>
        <Header />
        <Suspense fallback={<Loader />}>
          <Routes />
        </Suspense>
      </Router>
    </Container>
  </ThemeProvider>
);

export default App;
