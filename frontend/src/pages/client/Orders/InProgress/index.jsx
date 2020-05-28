import React, { useState, useEffect, useCallback } from 'react';

import { AiOutlineQuestionCircle, AiOutlineInfoCircle } from 'react-icons/ai';
import { MdErrorOutline } from 'react-icons/md';

import api from '~/services/api';
import { getInProgressOrders } from '~/services/orders';
import { useSnackbar } from '~/store/snackbar';

import { Container, AnimationArticle } from './styles';

function InProgress() {
  const [requests, setRequests] = useState([]);

  const { snackbarMessage } = useSnackbar();

  const loadRequests = useCallback(async () => {
    const orders = await getInProgressOrders();
    setRequests(orders);
  }, []);

  useEffect(() => {
    loadRequests();
  }, [loadRequests]);

  async function handleFinishRequest(idOrder) {
    try {
      await api.post('/orders/delivery', {
        idOrder,
      });
      loadRequests();

      snackbarMessage('Entrega confirmada');
    } catch (error) {
      snackbarMessage('Erro ao confirmar entrega', { variant: 'error' });
    }
  }

  return (
    <Container>
      {requests.length === 0 && (
        <div className="empty-requests">
          Nenhum pedido em andamento
          <MdErrorOutline size={24} color="#888" />
        </div>
      )}
      {requests.map((request, index) => (
        <AnimationArticle key={String(request.id)} delay={(index + 1) * 100}>
          <header>
            <img src={request.product.image_url} alt={request.product.title} />
            <div className="content">
              <h1>
                {request.ammount}
                x&nbsp;
                {request.product.title}
              </h1>
              <span>
                Realizado há&nbsp;
                <strong>{request.formattedRequestedTime}</strong>
              </span>
              <span>
                Tempo estimado de&nbsp;
                <strong>{request.formattedEstimatedTime || '40 min'}</strong>
              </span>
              <button
                type="button"
                onClick={() => handleFinishRequest(request.id)}
                disabled={request.status !== 'done'}
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
        </AnimationArticle>
      ))}
    </Container>
  );
}

export default InProgress;
