import React, { useState, useEffect } from 'react';

import {
  AiOutlineArrowLeft,
  AiOutlineInfoCircle,
  AiOutlineCheck,
} from 'react-icons/ai';
import { useParams } from 'react-router-dom';

import api from '~/services/api';
import history from '~/services/history';

import { Container } from './styles';

function ItemInfo() {
  const [item, setItem] = useState({});
  const [observations, setObservations] = useState('');

  const { id } = useParams();

  useEffect(() => {
    async function getItemInformations() {
      const response = await api.get(`products/${id}`);
      setItem(response.data);
    }

    getItemInformations();
  }, [id]);

  async function handleSubmitRequest() {
    await api.post('/orders', { idProduct: item.id, observations });
    history.push('/home');
  }

  return (
    <Container>
      <header>
        <div className="toolbar">
          <AiOutlineArrowLeft size={20} onClick={() => history.goBack()} />
        </div>
        <picture>
          <img src={item.image_url} alt={item.title} />
        </picture>
      </header>
      <div className="content">
        <div className="description">
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <div className="price">
            <span>{item.formattedOldPrice}</span>
            <strong>{item.formattedPrice}</strong>
          </div>
        </div>
        <label htmlFor="observations">
          <span>
            <AiOutlineInfoCircle />
            Observações
          </span>
          <textarea
            id="observations"
            name="observations"
            value={observations}
            onChange={(e) => setObservations(e.target.value)}
            placeholder="Adicione observações sobre seu pedido. (ex: remover cebola, adicionar bacon)"
            cols="30"
            rows="5"
          />
        </label>
        <footer>
          <button type="button" onClick={handleSubmitRequest}>
            Realizar pedido
            <AiOutlineCheck size={20} />
          </button>
        </footer>
      </div>
    </Container>
  );
}

export default ItemInfo;
