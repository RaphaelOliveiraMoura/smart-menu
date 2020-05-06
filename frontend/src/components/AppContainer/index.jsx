import React from 'react';

import { component } from '~/utils/customPropTypes';

import { Container } from './styles';

function AppContainer({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

AppContainer.propTypes = {
  children: component,
};

AppContainer.defaultProps = {
  children: <></>,
};

export default AppContainer;
