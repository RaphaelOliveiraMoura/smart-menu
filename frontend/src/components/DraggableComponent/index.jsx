import React, { cloneElement } from 'react';

import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';

import { component } from '~/utils/customPropTypes';

function DraggableComponent({ children, id, type, collect }) {
  const [{ isDragging }, drag] = useDrag({
    item: { id, type },
    collect: (monitor) => {
      collect(monitor);
      return {
        isDragging: !!monitor.isDragging(),
      };
    },
  });

  return (
    <div className={isDragging ? 'dragging' : ''} ref={drag}>
      {cloneElement(children, { isDragging })}
    </div>
  );
}

DraggableComponent.propTypes = {
  children: component,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  collect: PropTypes.func,
  type: PropTypes.string.isRequired,
};

DraggableComponent.defaultProps = {
  children: <></>,
  collect: () => {},
};

export default DraggableComponent;
