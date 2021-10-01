import React, { Suspense } from 'react';
import {
  Container,
  responsiveFontSizes,
  ThemeProvider,
  StyledEngineProvider,
  LinearProgress,
} from '@mui/material';
import { theme } from '../../utils';
import Header from '../../components/Header/Header';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

const App = () => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <Container maxWidth="lg">
        <Router>
          <Suspense fallback={<LinearProgress />}>
            <Header />
            <Routes />
          </Suspense>
        </Router>
      </Container>
    </ThemeProvider>
  </StyledEngineProvider>
);

export default App;
