import React from 'react';

import { ThemeProvider } from '@material-ui/core';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import { Router } from 'react-router-dom';

import Snackbar from '~/components/Snackbar';
import Routes from '~/routes/';
import history from '~/services/history';
import { ClientAuthProvider } from '~/store/clientAuth';
import { SnackbarProvider } from '~/store/snackbar';
import GlobalStyles from '~/styles/GlobalStyles';

import '~/services/socket';

import theme from './styles/MaterialUICustomTheme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DndProvider backend={Backend}>
        <SnackbarProvider>
          <ClientAuthProvider>
            <Router history={history}>
              <Routes />
              <Snackbar />
              <GlobalStyles />
            </Router>
          </ClientAuthProvider>
        </SnackbarProvider>
      </DndProvider>
    </ThemeProvider>
  );
}

export default App;
