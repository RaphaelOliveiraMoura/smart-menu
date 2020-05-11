import React, { useState, useEffect, useCallback } from 'react';

import { AiOutlineQuestionCircle, AiOutlineInfoCircle } from 'react-icons/ai';
import { MdErrorOutline } from 'react-icons/md';

import api from '~/services/api';

import { Container } from './styles';

function InProgress() {
  const [requests, setRequests] = useState([]);

  const loadRequests = useCallback(async () => {
    const response = await api.get('/orders');
    setRequests(response.data);
  }, []);

  useEffect(() => {
    loadRequests();
  }, [loadRequests]);

  async function handleFinishRequest(idOrder) {
    await api.post('/orders/finished', {
      idOrder,
    });
    loadRequests();
  }

  return (
    <Container>
      {requests.length === 0 && (
        <div className="empty-requests">
          Nenhum pedido em andamento
          <MdErrorOutline size={24} color="#888" />
        </div>
      )}
      {requests.map((request) => (
        <article key={String(request.id)}>
          <header>
            <img src={request.product.image_url} alt={request.product.title} />
            <div className="content">
              <h1>
                {request.ammount}
                x&nbsp;
                {request.product.title}
              </h1>
              <span>
                Pedido realizado há&nbsp;
                <strong>
                  {request.formattedRequestedTime || '1 min atrás'}
                </strong>
              </span>
              <span>
                Tempo estimado de&nbsp;
                <strong>{request.formattedEstimatedTime || '40 min'}</strong>
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
