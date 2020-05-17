import React from 'react';

import { Switch } from 'react-router-dom';

import Admin from '~/pages/Admin';
import Help from '~/pages/Help';
import Home from '~/pages/Home';
import ItemInfo from '~/pages/ItemInfo';
import Login from '~/pages/Login';
import NotFound from '~/pages/NotFound';
import Requests from '~/pages/Requests';

import Route from './RouteWrapper';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} mobile />
      <Route path="/home" exact component={Home} mobile isPrivate />
      <Route path="/requests" exact component={Requests} mobile isPrivate />
      <Route path="/help" exact component={Help} mobile isPrivate />
      <Route path="/item/:id" exact component={ItemInfo} mobile isPrivate />

      <Route path="/admin" component={Admin} />

      <Route path="*" component={NotFound} />
    </Switch>
  );
}
