import React from 'react';

import { ThemeProvider } from '@material-ui/core';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
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
        <DndProvider backend={Backend}>
          <SnackbarProvider>
            <Routes />
            <Snackbar />
            <GlobalStyles />
          </SnackbarProvider>
        </DndProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
