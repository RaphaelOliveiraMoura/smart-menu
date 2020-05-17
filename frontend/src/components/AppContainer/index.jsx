import React from 'react';

import PropTypes from 'prop-types';

import { component } from '~/utils/customPropTypes';

import { Container } from './styles';

function AppContainer({ children, className, ...props }) {
  return (
    <Container className={className} {...props}>
      {children}
    </Container>
  );
}

AppContainer.propTypes = {
  children: component,
  className: PropTypes.string,
};

AppContainer.defaultProps = {
  children: <></>,
  className: '',
};

export default AppContainer;
