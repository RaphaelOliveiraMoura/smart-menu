import React, { useState, useEffect } from 'react';

import Rating from '@material-ui/lab/Rating';
import { MdErrorOutline } from 'react-icons/md';

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
      {finishedRequests.length === 0 && (
        <div className="empty-requests">
          Nenhum pedido em andamento
          <MdErrorOutline size={24} color="#888" />
        </div>
      )}
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
                <Rating name={`rating-${finishedRequest.id}`} />
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
