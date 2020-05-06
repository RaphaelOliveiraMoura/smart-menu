import React from 'react';

import { ThemeProvider } from '@material-ui/core';
import { Router } from 'react-router-dom';

import Routes from '~/routes/';
import history from '~/services/history';
import GlobalStyles from '~/styles/GlobalStyles';

import theme from './styles/MaterialUICustomTheme';

function App() {
  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <Routes />
        <GlobalStyles />
      </ThemeProvider>
    </Router>
  );
}

export default App;
