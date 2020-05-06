import React from 'react';

import { AiOutlineQuestionCircle, AiOutlineInfoCircle } from 'react-icons/ai';

import { inProgress as requests } from '~/mocks/requests';

import { Container } from './styles';

function InProgress() {
  return (
    <Container>
      {requests.map((request) => (
        <article key={String(request.id)}>
          <header>
            <picture>
              <img src={request.item.topic.image} alt={request.item.title} />
            </picture>
            <div>
              <h1>{request.item.title}</h1>
              <span>
                Pedido realizado há&nbsp;
                <strong>{request.formattedRequestedTime}</strong>
              </span>
              <span>
                Tempo estimado de&nbsp;
                <strong>{request.formattedEstimatedTime}</strong>
              </span>
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
