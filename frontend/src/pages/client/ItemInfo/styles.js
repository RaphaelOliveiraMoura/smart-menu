import styled from 'styled-components';

export const Container = styled.section`
  position: relative;

  header {
    animation: scale 0.6s;
    animation-fill-mode: both;

    .toolbar {
      position: absolute;
      top: 0;
      background: #fff6;
      width: 100%;
      padding: 16px;
      z-index: 5;

      animation: rigthToLeft 1s;
      animation-fill-mode: backwards;

      svg {
        cursor: pointer;
      }
    }

    img {
      height: 200px;
      width: 100%;
      object-fit: cover;

      animation: topToBottom 0.6s;
      animation-fill-mode: both;
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

    animation: fadeIn 1.2s;
    animation-fill-mode: backwards;

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

    animation: fadeIn 1.2s;
    animation-fill-mode: backwards;
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

      animation: rigthToLeft 0.8s;
      animation-fill-mode: backwards;

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

    animation: leftToRigth 0.8s;
    animation-fill-mode: backwards;

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

  @keyframes topToBottom {
    from {
      opacity: 0;
      transform: translateY(-100px);
    }

    to {
      opacity: 0.9;
      transform: translateY(0px);
    }
  }

  @keyframes scale {
    from {
      transform: scale(0.4);
    }

    to {
      transform: scale(1);
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

  @keyframes rigthToLeft {
    from {
      opacity: 0;
      transform: translateX(200px);
    }

    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;
