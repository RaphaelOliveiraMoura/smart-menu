import styled from 'styled-components';

export const Container = styled.section`
  position: relative;

  header {
    .toolbar {
      position: absolute;
      top: 0;
      background: #fff6;
      width: 100%;
      padding: 16px;
    }

    img {
      height: 200px;
      width: 100%;
      object-fit: cover;
    }
  }

  div.content {
    margin: 8px;
  }

  div.description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding: 20px 8px;
    border-radius: 8px;
    background: #fff;

    h1 {
      text-align: center;
      font-size: 1.6em;
    }

    p {
      text-align: justify;
      color: #666;
      margin-top: 8px;
    }
  }

  div.description .price {
    align-self: center;
    margin-top: 16px;

    span {
      color: #c23520aa;
      text-decoration: line-through;
      font-size: 1.2em;
    }

    strong {
      color: #c23520;
      margin-left: 8px;
      font-size: 1.4em;
    }
  }

  label {
    display: flex;
    flex-direction: column;
    font-size: 1.2em;
    margin-top: 16px;
  }

  label span {
    display: flex;
    align-items: center;

    svg {
      margin-right: 4px;
    }
  }

  textarea {
    padding: 4px;
    border: 0;
    border-radius: 8px;
    font-size: 0.8em;
  }

  footer {
    position: sticky;
    left: 8px;
    right: 8px;
    bottom: 16px;
    display: flex;
    align-items: center;
    margin-top: 16px;

    .ammount-input-container {
      width: 30%;
      margin-left: 8px;
      position: relative;

      input {
        width: 100%;
        height: 50px;
        border-radius: 8px;
        border: 1px solid #ddd;
        font-weight: bold;
        font-size: 1.2em;
        padding-left: 12px;
      }

      .options {
        position: absolute;
        top: 0;
        right: 8px;
        bottom: 0;

        display: flex;
        justify-content: center;
        flex-direction: column;

        button {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        svg {
          margin: 4px;
        }
      }
    }
  }

  .submit-order {
    padding: 10px;
    background: #c23520;
    color: #fff;
    border-radius: 8px;
    font-weight: bold;
    font-size: 1.1em;
    box-shadow: 0 -6px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.15);

    width: 100%;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    span {
      font-size: 0.7em;
      font-weight: normal;
    }

    svg {
      margin-left: 8px;
    }
  }
`;
