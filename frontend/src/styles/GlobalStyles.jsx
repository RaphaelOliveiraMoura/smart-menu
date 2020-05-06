import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  #root {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    background: #F5F5F5;
  }

  body, input, button, textarea {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    background: none;
    border: 0;
  }
`;
