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
    background: #333;
  }

  body, input, button, textarea {
    font: 14px 'Comfortaa', cursive;
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

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  .mobile {
    max-width: 500px;
    margin: auto;
    overflow: overlay;
    width: 100%;
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: #c2352055;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #c23520aa;
  }
`;
