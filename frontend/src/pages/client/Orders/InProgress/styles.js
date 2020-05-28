import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 16px;

  .empty-requests {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #888;
  }
`;

export const AnimationArticle = styled.article`
  background: #fff;
  border-radius: 4px;
  margin: 8px;
  width: 100%;
  animation: leftToRigthSkew 0.6s;
  animation-fill-mode: backwards;
  animation-delay: ${({ delay }) => `${delay}ms`};

  .content {
    padding: 12px 12px 0 12px;
  }

  header {
    display: flex;
    justify-content: space-between;
    text-align: right;

    img {
      width: 120px;
      height: 100%;
      object-fit: cover;
      border-radius: 8px 30px;
      overflow: hidden;
      margin: auto 8px;
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
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      max-width: 140px;
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

    button:disabled {
      background: #c6c6c6;
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

  @keyframes leftToRigthSkew {
    from {
      opacity: 0;
      transform: skew(10deg, 0deg);
      transform: translateX(-200px);
    }

    to {
      opacity: 1;
      transform: skew(0deg, 0deg);
      transform: translateX(0px);
    }
  }
`;
