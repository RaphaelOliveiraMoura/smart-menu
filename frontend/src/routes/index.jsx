import React from 'react';

import { Switch } from 'react-router-dom';

import Admin from '~/pages/Admin';
import Help from '~/pages/Help';
import Home from '~/pages/Home';
import ItemInfo from '~/pages/ItemInfo';
import Login from '~/pages/Login';
import NotFound from '~/pages/NotFound';
import Requests from '~/pages/Requests';

import RouteWrapper from './RouteWrapper';

export default function Routes() {
  return (
    <Switch>
      <RouteWrapper path="/" exact component={Login} />
      <RouteWrapper path="/home" exact component={Home} isPrivate />
      <RouteWrapper path="/requests" exact component={Requests} isPrivate />
      <RouteWrapper path="/help" exact component={Help} isPrivate />
      <RouteWrapper path="/item/:id" exact component={ItemInfo} isPrivate />

      <RouteWrapper path="/admin" component={Admin} />

      <RouteWrapper path="*" component={NotFound} />
    </Switch>
  );
}
