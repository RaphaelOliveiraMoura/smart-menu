import React from 'react';

import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineFileDone,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function BottomBar() {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/home">
            <AiOutlineHome size={20} />
            <span>Ínicio</span>
          </Link>
        </li>
        <li>
          <Link to="/search">
            <AiOutlineSearch size={20} />
            <span>Busca</span>
          </Link>
        </li>
        <li>
          <Link to="/requests">
            <AiOutlineFileDone size={20} />
            <span>Pedidos</span>
          </Link>
        </li>
      </ul>
    </Container>
  );
}

export default BottomBar;
