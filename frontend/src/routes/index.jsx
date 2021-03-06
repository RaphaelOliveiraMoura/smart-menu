import React from 'react';

import { Switch } from 'react-router-dom';

import Help from '~/pages/client/Help';
import Home from '~/pages/client/Home';
import ItemInfo from '~/pages/client/ItemInfo';
import Login from '~/pages/client/Login';
import Orders from '~/pages/client/Orders';
import Dashboard from '~/pages/managment/Dashboard';
import NotFound from '~/pages/NotFound';

import Route from './RouteWrapper';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} mobile />
      <Route path="/home" exact component={Home} mobile isPrivate />
      <Route path="/requests" exact component={Orders} mobile isPrivate />
      <Route path="/help" exact component={Help} mobile isPrivate />
      <Route path="/item/:id" exact component={ItemInfo} mobile isPrivate />

      <Route path="/admin" component={Dashboard} />

      <Route path="*" component={NotFound} />
    </Switch>
  );
}
