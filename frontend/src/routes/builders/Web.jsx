import React from 'react';

import AppContainer from '~/components/AppContainer/';
import { component } from '~/utils/customPropTypes';

export default function BuildWebRoutes({ Component }) {
  return (
    <>
      <AppContainer>
        <Component />
      </AppContainer>
    </>
  );
}

BuildWebRoutes.propTypes = {
  Component: component.isRequired,
};
