import React, { useState, useEffect, useMemo } from 'react';

import {
  AiOutlineArrowLeft,
  AiOutlineInfoCircle,
  AiOutlineCheck,
} from 'react-icons/ai';
import { MdAdd, MdRemove } from 'react-icons/md';
import { useParams } from 'react-router-dom';

import api from '~/services/api';
import history from '~/services/history';
import formattCurrency from '~/utils/formattCurrency';

import { Container } from './styles';

function ItemInfo() {
  const [item, setItem] = useState({});
  const [observations, setObservations] = useState('');
  const [ammount, setAmmount] = useState(1);

  const subTotal = useMemo(() => {
    const total = ammount * item.price;
    return formattCurrency(total || 0);
  }, [item, ammount]);

  const { id } = useParams();

  useEffect(() => {
    async function getItemInformations() {
      const response = await api.get(`products/${id}`);
      setItem(response.data);
    }

    getItemInformations();
  }, [id]);

  async function handleSubmitRequest() {
    await api.post('/orders', { idProduct: item.id, observations, ammount });
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
          <button
            type="button"
            className="submit-order"
            onClick={handleSubmitRequest}
          >
            <div>
              Realizar pedido
              <AiOutlineCheck size={20} />
            </div>
            <span>
              Subtotal&nbsp;
              <strong>{subTotal}</strong>
            </span>
          </button>
          <div className="ammount-input-container">
            <input
              type="number"
              value={ammount}
              onChange={(e) => setAmmount(e.target.value)}
              min="1"
            />
            <div className="options">
              <button type="button" onClick={() => setAmmount(ammount + 1)}>
                <MdAdd />
              </button>
              <button type="button" onClick={() => setAmmount(ammount - 1)}>
                <MdRemove />
              </button>
            </div>
          </div>
        </footer>
      </div>
    </Container>
  );
}

export default ItemInfo;
