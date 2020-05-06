import React from 'react';

import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineFileDone,
  AiOutlineUser,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function BottomBar() {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/">
            <AiOutlineHome size={28} />
            <span>Ínicio</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <AiOutlineSearch size={28} />
            <span>Busca</span>
          </Link>
        </li>
        <li>
          <Link to="/requests">
            <AiOutlineFileDone size={28} />
            <span>Pedidos</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <AiOutlineUser size={28} />
            <span>Perfil</span>
          </Link>
        </li>
      </ul>
    </Container>
  );
}

export default BottomBar;
