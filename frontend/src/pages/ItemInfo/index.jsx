import React from 'react';

import {
  AiOutlineArrowLeft,
  AiOutlineInfoCircle,
  AiOutlineSend,
} from 'react-icons/ai';

import item from '~/mocks/itemInfo';
import history from '~/services/history';

import { Container } from './styles';

function ItemInfo() {
  return (
    <Container>
      <header>
        <div className="toolbar">
          <AiOutlineArrowLeft size={20} onClick={() => history.goBack()} />
        </div>
        <picture>
          <img src={item.image} alt={item.title} />
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
            placeholder="Adicione observações sobre seu pedido. (ex: remover cebola, adicionar bacon)"
            cols="30"
            rows="5"
          />
        </label>
        <footer>
          <button type="button">
            Realizar pedido
            <AiOutlineSend size={20} />
          </button>
        </footer>
      </div>
    </Container>
  );
}

export default ItemInfo;
