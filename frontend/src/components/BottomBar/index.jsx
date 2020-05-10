import React from 'react';

import { AiOutlineHome, AiOutlineFileDone } from 'react-icons/ai';
import { FiHelpCircle } from 'react-icons/fi';
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
          <Link to="/requests">
            <AiOutlineFileDone size={20} />
            <span>Pedidos</span>
          </Link>
        </li>
        <li>
          <Link to="/help">
            <FiHelpCircle size={20} />
            <span>Ajuda</span>
          </Link>
        </li>
      </ul>
    </Container>
  );
}

export default BottomBar;
