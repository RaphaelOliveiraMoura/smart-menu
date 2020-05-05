import React from 'react';

import { Switch, Route } from 'react-router-dom';

import MenuList from '~/pages/MenuList';
import NotFound from '~/pages/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={MenuList} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}
