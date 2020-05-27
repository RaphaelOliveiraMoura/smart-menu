import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 26px;

  button {
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #c23520;
    margin-bottom: 16px;
    color: #fff;
    border-radius: 8px;
    font-weight: bold;
    font-size: 1.2em;
    box-shadow: 0 -6px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.15);

    width: 100%;
    display: flex;
    align-items: center;

    animation: topToBottom 1.2s;
    animation-fill-mode: backwards;

    svg {
      margin-left: 8px;
    }
  }

  img {
    width: 70%;
    animation: leftToRigth 1.2s;
    animation-fill-mode: backwards;
  }

  h2 {
    text-align: center;
    margin-top: 8px;
  }

  article {
    background: #fff;
    border-radius: 8px;
    padding: 12px;
    margin: 12px 0;
    animation: bottomToTop 0.8s;
    animation-fill-mode: backwards;

    h1 {
      color: #222;
      line-height: 24px;
    }

    p {
      color: #444;
      margin-top: 12px;
      text-align: justify;
      line-height: 18px;
    }
  }

  @keyframes topToBottom {
    from {
      opacity: 0;
      transform: translateY(-100px);
    }

    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @keyframes leftToRigth {
    from {
      opacity: 0;
      transform: translateX(-200px);
    }
    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  @keyframes bottomToTop {
    from {
      opacity: 0;
      transform: translateY(400px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;
