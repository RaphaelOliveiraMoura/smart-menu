import React from 'react';

import { ThemeProvider } from '@material-ui/core';
import { Router } from 'react-router-dom';

import Snackbar from '~/components/Snackbar';
import Routes from '~/routes/';
import history from '~/services/history';
import { SnackbarProvider } from '~/store/snackbar';
import GlobalStyles from '~/styles/GlobalStyles';

import theme from './styles/MaterialUICustomTheme';

function App() {
  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <Routes />
          <Snackbar />
          <GlobalStyles />
        </SnackbarProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
