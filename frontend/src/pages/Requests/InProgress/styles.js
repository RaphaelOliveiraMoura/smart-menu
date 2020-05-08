import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 26px;

  article {
    background: #fff;
    border-radius: 4px;
    margin: 8px;
    width: 100%;
  }

  article .content {
    padding: 12px 12px 0 12px;
  }

  header {
    display: flex;
    justify-content: space-between;
    text-align: right;

    picture {
      border-radius: 30px;
      border-radius: 8px 30px;
      overflow: hidden;
    }

    img {
      width: 120px;
      height: 100%;
      object-fit: cover;
    }
  }

  header > div {
    display: flex;
    flex-direction: column;
  }

  header {
    h1 {
      font-size: 1.2em;
      margin-bottom: 12px;
    }

    span {
      font-size: 0.7em;
      margin-bottom: 4px;
    }

    button {
      align-self: flex-end;
      padding: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #c23520;
      margin-top: 16px;
      color: #fff;
      border-radius: 8px;
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
    padding: 0 12px 12px 12px;

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
