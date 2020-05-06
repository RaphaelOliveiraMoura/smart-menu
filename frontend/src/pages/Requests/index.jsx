import React, { useState } from 'react';

import { AppBar, Tabs, Tab } from '@material-ui/core';

import TabPanel from '~/components/TabPanel';

import Finished from './Finished';
import InProgress from './InProgress';
import { Container } from './styles';

function Requests() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <Container>
      <AppBar position="static" elevation="1">
        <Tabs
          value={currentTabIndex}
          onChange={(_, selectedIndex) => setCurrentTabIndex(selectedIndex)}
          variant="fullWidth"
          centered
        >
          <Tab label="Em andamento" />
          <Tab label="Finalizado" />
        </Tabs>
      </AppBar>

      <TabPanel currentTabIndex={currentTabIndex} index={0}>
        <InProgress />
      </TabPanel>
      <TabPanel currentTabIndex={currentTabIndex} index={1}>
        <Finished />
      </TabPanel>
    </Container>
  );
}

export default Requests;
