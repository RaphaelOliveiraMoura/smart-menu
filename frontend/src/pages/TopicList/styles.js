import styled from 'styled-components';

export const Container = styled.section`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  article {
    background: #fff;
    min-width: 250px;

    margin: 18px;
    padding: 16px;
    border-radius: 8px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 1.4em;
      font-weight: normal;
    }
  }

  picture {
    width: 80px;
    height: 80px;
    margin-left: -42px;
    background: #fff;
    border-radius: 26px;
    padding: 8px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.03), 0 6px 6px rgba(0, 0, 0, 0.1);

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
