import React from 'react';

import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import AppContainer from '~/components/AppContainer/';
import BottomBar from '~/components/BottomBar/';
import { component } from '~/utils/customPropTypes';

function RouteWrapper({ isPrivate, component: Component, ...props }) {
  const AppContainerComponent = () => (
    <AppContainer>
      <Component />
    </AppContainer>
  );

  if (!isPrivate) {
    return <Route component={AppContainerComponent} {...props} />;
  }

  const AppContainerWithBottomBar = () => (
    <>
      <AppContainerComponent />
      <BottomBar />
    </>
  );

  return <Route component={AppContainerWithBottomBar} {...props} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: component.isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

export default RouteWrapper;
