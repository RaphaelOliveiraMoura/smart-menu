import React from 'react';

import { Router } from 'react-router-dom';

import Routes from '~/routes/';
import history from '~/services/history';
import GlobalStyles from '~/styles/GlobalStyles';

function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyles />
    </Router>
  );
}

export default App;
