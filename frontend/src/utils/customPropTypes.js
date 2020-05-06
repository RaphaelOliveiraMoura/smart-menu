import PropTypes from 'prop-types';

export const component = PropTypes.oneOfType([
  PropTypes.element,
  PropTypes.func,
]);
