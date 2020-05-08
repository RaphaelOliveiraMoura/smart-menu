import React from 'react';

import Rating from '@material-ui/lab/Rating';

import { finished } from '~/mocks/requests';

import { Container } from './styles';

function Finished() {
  return (
    <Container>
      <ul>
        {finished.map((finishedRequest) => (
          <li key={String(finishedRequest.id)}>
            <article>
              <picture>
                <img
                  src={finishedRequest.item.image}
                  alt={finishedRequest.item.title}
                />
              </picture>
              <div className="content">
                <h1>{finishedRequest.item.title}</h1>
                <h2>
                  Pedido entregue há&nbsp;
                  <strong>{finishedRequest.formattedFinishedAt}</strong>
                </h2>
                <Rating />
                <p>Deixe sua avaliação !!</p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Finished;
