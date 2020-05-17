import React from 'react';

import AppContainer from '~/components/AppContainer/';
import { component } from '~/utils/customPropTypes';

export function build({ Component }) {
  return (
    <>
      <AppContainer>
        <Component />
      </AppContainer>
    </>
  );
}

build.propTypes = {
  Component: component.isRequired,
};
