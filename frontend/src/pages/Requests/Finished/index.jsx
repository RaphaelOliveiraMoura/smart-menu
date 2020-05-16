import React, { useState, useEffect } from 'react';

import { MdErrorOutline } from 'react-icons/md';

import api from '~/services/api';

import FinishedRequestItem from './Item';
import { Container } from './styles';

function Finished() {
  const [finishedRequests, setFinishedRequests] = useState([]);

  useEffect(() => {
    async function loadFinishedRequests() {
      const response = await api.get('/orders/finished');
      setFinishedRequests(response.data);
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
        {finishedRequests.map((finishedRequest) => (
          <FinishedRequestItem
            key={String(finishedRequest.id)}
            finishedRequest={finishedRequest}
          />
        ))}
      </ul>
    </Container>
  );
}

export default Finished;
