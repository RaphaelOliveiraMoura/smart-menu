import React from 'react';

import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import { component } from '~/utils/customPropTypes';

import * as MobileBuilder from './builders/Mobile';
import * as WebBuilder from './builders/Web';

function RouteWrapper({ mobile, isPrivate, component: Component, ...props }) {
  const ScreenBuilder = mobile ? MobileBuilder : WebBuilder;

  const AppContainerComponent = () =>
    ScreenBuilder.build({ Component, isPrivate });

  return <Route component={AppContainerComponent} {...props} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  mobile: PropTypes.bool,
  component: component.isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  mobile: false,
};

export default RouteWrapper;
