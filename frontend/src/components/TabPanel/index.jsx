import React from 'react';

import PropTypes from 'prop-types';

import { component } from '~/utils/customPropTypes';

function TabPanel({ currentTabIndex, index, children, ...props }) {
  const hidden = currentTabIndex !== index;

  return (
    <>
      {!hidden && (
        <section role="tabpanel" hidden={hidden} {...props}>
          {children}
        </section>
      )}
    </>
  );
}

TabPanel.propTypes = {
  currentTabIndex: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([component, PropTypes.string]),
};

TabPanel.defaultProps = {
  children: <></>,
};

export default TabPanel;
