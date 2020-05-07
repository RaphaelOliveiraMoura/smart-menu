import styled from 'styled-components';

export const Container = styled.nav`
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.19), 0 0px 6px rgba(0, 0, 0, 0.23);
  z-index: 50;

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px;
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
