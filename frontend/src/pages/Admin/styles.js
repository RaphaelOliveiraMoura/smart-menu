import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 26px;

  section {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0px 26px;

    h2 {
      text-align: center;
      width: 100%;
      background: #fff;
      border-radius: 4px;
      padding: 16px;
    }
  }

  article {
    width: 100%;
    background: #fff;
    border-radius: 4px;
    padding: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 26px;
    border: 2px #ddd dashed;

    img {
      width: 120px;
    }

    h1 {
      width: 160px;
    }

    span {
      display: block;
      margin-top: 8px;
      color: #666;
      font-size: 0.8em;
    }
  }

  .order-content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  footer {
    display: flex;
    justify-content: center;
    margin-top: 8px;
    padding-top: 8px;
    padding-bottom: 8px;
    border-top: 1px solid #ddd;
    width: 80%;
  }
`;
