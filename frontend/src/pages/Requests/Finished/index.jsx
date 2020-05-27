import React, { useState, useEffect } from 'react';

import { MdErrorOutline } from 'react-icons/md';

import { getDeliveredOrders } from '~/services/orders';

import FinishedRequestItem from './Item';
import { Container } from './styles';

function Finished() {
  const [finishedRequests, setFinishedRequests] = useState([]);

  useEffect(() => {
    async function loadFinishedRequests() {
      const orders = await getDeliveredOrders();
      setFinishedRequests(orders);
    }

    loadFinishedRequests();
  }, []);

  return (
    <Container>
      {finishedRequests.length === 0 && (
        <div className="empty-requests">
          Nenhum pedido finalizado
          <MdErrorOutline size={24} color="#888" />
        </div>
      )}
      <ul>
        {finishedRequests.map((finishedRequest, index) => (
          <FinishedRequestItem
            key={String(finishedRequest.id)}
            finishedRequest={finishedRequest}
            index={index}
          />
        ))}
      </ul>
    </Container>
  );
}

export default Finished;
