import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Option({ title, selected }) {
  return (
    <Container>
      <Checkbox checked={selected} size="small" />
      <span>{title}</span>
    </Container>
  );
}

Option.propTypes = {
  title: PropTypes.string.isRequired,
  selected: PropTypes.bool,
};

Option.defaultProps = {
  selected: false,
};

export default Option;
