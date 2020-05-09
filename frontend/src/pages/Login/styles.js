import styled from 'styled-components';

import loginBackground from '~/assets/login-background.jpeg';

export const Container = styled.section`
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding: 26px;
  background: url(${loginBackground});
  background-repeat: no-repeat;
  background-size: cover;

  .help-icon {
    position: absolute;
    right: 16px;
    top: 16px;
  }

  img {
    width: 52px;
  }

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 26px;

    svg {
      margin-top: 8px;
    }
  }

  h1 {
    color: #333;
    font-weight: normal;
    text-align: center;
    font-size: 1.2em;
  }

  video {
    border-radius: 130px;
    overflow: hidden;
    padding: 8px;
  }

  section > div {
    overflow: hidden;
    background: #3333;
    border-radius: 98px;
    border: 76px solid rgba(0, 0, 0, 0.3) !important;
  }
`;
