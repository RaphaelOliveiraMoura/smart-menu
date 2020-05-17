import React from 'react';

import PropTypes from 'prop-types';

import AppContainer from '~/components/AppContainer/';
import BottomBar from '~/components/BottomBar/';
import { component } from '~/utils/customPropTypes';

export function build({ Component, isPrivate }) {
  return (
    <>
      <AppContainer className="mobile">
        <Component />
      </AppContainer>
      {isPrivate && <BottomBar className="mobile" />}
    </>
  );
}

build.propTypes = {
  Component: component.isRequired,
  isPrivate: PropTypes.bool,
};

build.defaultProps = {
  isPrivate: false,
};
