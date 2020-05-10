import styled from 'styled-components';

export const Container = styled.section`
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 26px;
  }

  li {
    background: #fff;
    border-radius: 4px;
    margin: 8px;
    width: 100%;
    border-radius: 8px;
  }

  article {
    display: flex;
  }

  picture {
    border-radius: 8px;
    overflow: hidden;
  }

  img {
    width: 120px;
    height: 100%;
    object-fit: contain;
  }

  article .content {
    display: flex;
    flex-direction: column;
    padding: 8px 12px;
    flex: 1;
    text-align: right;

    h1 {
      font-size: 1em;
    }

    h2 {
      font-size: 0.8em;
      color: #666;
      margin-top: 4px;
    }

    span {
      margin-top: 8px;
      align-self: flex-end;
    }

    p {
      align-self: flex-end;
      font-size: 0.7em;
      color: #666;
    }
  }
`;
