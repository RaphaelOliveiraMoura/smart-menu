import React from 'react';

import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';

import { component } from '~/utils/customPropTypes';

function DroppableComponent({ children, type, onDrop }) {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: type,
    drop: onDrop,
    collect: (monitor) => ({
      canDrop: !!monitor.canDrop(),
      isOver: !!monitor.isOver(),
    }),
  });

  const classes = [canDrop ? 'canDrop' : '', isOver ? 'isOver' : ''];

  return (
    <div ref={drop} className={classes.join(' ')}>
      {children}
    </div>
  );
}

DroppableComponent.propTypes = {
  children: component,
  onDrop: PropTypes.func,
  type: PropTypes.string.isRequired,
};

DroppableComponent.defaultProps = {
  children: <></>,
  onDrop: () => {},
};

export default DroppableComponent;
