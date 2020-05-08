import React from 'react';

import { Switch } from 'react-router-dom';

import Home from '~/pages/Home';
import ItemInfo from '~/pages/ItemInfo';
import NotFound from '~/pages/NotFound';
import Requests from '~/pages/Requests';
import TopicList from '~/pages/TopicList';

import RouteWrapper from './RouteWrapper';

export default function Routes() {
  return (
    <Switch>
      <RouteWrapper path="/" exact component={Home} isPrivate />
      <RouteWrapper path="/search" exact component={TopicList} isPrivate />
      <RouteWrapper path="/requests" exact component={Requests} isPrivate />
      <RouteWrapper path="/item/:id" exact component={ItemInfo} isPrivate />
      <RouteWrapper path="*" component={NotFound} />
    </Switch>
  );
}
