import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 26px 0;

  article {
    background: #fff;
    padding: 26px 12px;
    border-radius: 4px;
    margin: 8px;
    width: 280px;
  }

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: right;

    picture {
      width: 60px;
      height: 60px;
      border-radius: 30px;
      margin-right: 16px;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  header > div {
    display: flex;
    flex-direction: column;
  }

  header {
    h1 {
      font-size: 1.4em;
      margin-bottom: 12px;
    }

    span {
      font-size: 0.8em;
    }
  }

  .separator {
    width: 90%;
    height: 1px;
    background: #ededed;
    margin: 16px auto;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        margin-right: 4px;
      }
    }
  }
`;
