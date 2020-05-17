import React from 'react';

import { AiOutlineHome, AiOutlineFileDone } from 'react-icons/ai';
import { FiHelpCircle } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';

function BottomBar({ ...props }) {
  return (
    <Container {...props}>
      <ul>
        <li>
          <NavLink to="/home" activeClassName="selected">
            <AiOutlineHome size={20} />
            <span>Ínicio</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/requests" activeClassName="selected">
            <AiOutlineFileDone size={20} />
            <span>Pedidos</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/help" activeClassName="selected">
            <FiHelpCircle size={20} />
            <span>Ajuda</span>
          </NavLink>
        </li>
      </ul>
    </Container>
  );
}

export default BottomBar;
