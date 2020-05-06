import React, { useState } from 'react';

import { AppBar, Tabs, Tab } from '@material-ui/core';

import TabPanel from '~/components/TabPanel';

import { Container } from './styles';

function Requests() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <Container>
      <AppBar position="static">
        <Tabs
          value={currentTabIndex}
          onChange={(_, selectedIndex) => setCurrentTabIndex(selectedIndex)}
        >
          <Tab label="Em andamento" />
          <Tab label="Finalizado" />
        </Tabs>
      </AppBar>

      <TabPanel currentTabIndex={currentTabIndex} index={0}>
        Pedidos em andamento
      </TabPanel>
      <TabPanel currentTabIndex={currentTabIndex} index={1}>
        Pedidos finalizados
      </TabPanel>
    </Container>
  );
}

export default Requests;
