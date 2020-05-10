import React, { useState, useEffect, useCallback } from 'react';

import { AiOutlineQuestionCircle, AiOutlineInfoCircle } from 'react-icons/ai';

import api from '~/services/api';

import { Container } from './styles';

function InProgress() {
  const [requests, setRequests] = useState([]);

  const loadRequests = useCallback(async () => {
    const response = await api.get('/requests');
    setRequests(response.data);
  }, []);

  useEffect(() => {
    loadRequests();
  }, [loadRequests]);

  async function handleFinishRequest(requestId) {
    await api.post('/requests/finished', {
      requestId,
    });
    loadRequests();
  }

  return (
    <Container>
      {requests.map((request) => (
        <article key={String(request.id)}>
          <header>
            <img src={request.item.image_url} alt={request.item.title} />
            <div className="content">
              <h1>{request.item.title}</h1>
              <span>
                Pedido realizado há&nbsp;
                <strong>{request.formattedRequestedTime}</strong>
              </span>
              <span>
                Tempo estimado de&nbsp;
                <strong>{request.formattedEstimatedTime}</strong>
              </span>
              <button
                type="button"
                onClick={() => handleFinishRequest(request.id)}
              >
                Confirmar entrega
              </button>
            </div>
          </header>
          <div className="separator" />
          <footer>
            <button type="button">
              <AiOutlineQuestionCircle />
              Ajuda
            </button>
            <button type="button">
              <AiOutlineInfoCircle />
              Mais detalhes
            </button>
          </footer>
        </article>
      ))}
    </Container>
  );
}

export default InProgress;
