import React from 'react';

import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import AppContainer from '~/components/AppContainer/';
import BottomBar from '~/components/BottomBar/';
import { useClientAuth } from '~/store/clientAuth';
import { component } from '~/utils/customPropTypes';

export default function BuildMobileRoutes({ Component, isPrivate }) {
  const { token } = useClientAuth();

  if (!token && isPrivate) {
    return <Redirect to="/" />;
  }

  if (token && !isPrivate) {
    return <Redirect to="/home" />;
  }

  return (
    <>
      <AppContainer className="mobile">
        <Component />
      </AppContainer>
      {isPrivate && <BottomBar className="mobile" />}
    </>
  );
}

BuildMobileRoutes.propTypes = {
  Component: component.isRequired,
  isPrivate: PropTypes.bool,
};

BuildMobileRoutes.defaultProps = {
  isPrivate: false,
};
