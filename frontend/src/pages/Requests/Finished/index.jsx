import React, { useState, useEffect } from 'react';

import Rating from '@material-ui/lab/Rating';

import api from '~/services/api';

import { Container } from './styles';

function Finished() {
  const [finishedRequests, setFinishedRequests] = useState([]);

  useEffect(() => {
    async function loadFinishedRequests() {
      const response = await api.get('/requests/finished');
      setFinishedRequests(response.data);
    }

    loadFinishedRequests();
  }, []);

  return (
    <Container>
      <ul>
        {finishedRequests.map((finishedRequest) => (
          <li key={String(finishedRequest.id)}>
            <article>
              <picture>
                <img
                  src={finishedRequest.item.image_url}
                  alt={finishedRequest.item.title}
                />
              </picture>
              <div className="content">
                <h1>{finishedRequest.item.title}</h1>
                <h2>
                  Pedido entregue há&nbsp;
                  <strong>{finishedRequest.formattedFinishedAt}</strong>
                </h2>
                <Rating name="rating" />
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
