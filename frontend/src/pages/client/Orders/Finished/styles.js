import styled from 'styled-components';

export const Container = styled.section`
  margin: 16px;

  .empty-requests {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #888;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  li {
    background: #fff;
    border-radius: 4px;
    margin: 8px;
    width: 100%;
    border-radius: 8px;
  }
`;

export const AnimationArticle = styled.article`
  display: flex;
  align-items: center;

  animation: rigthToLeftSkew 0.6s;
  animation-fill-mode: backwards;
  animation-delay: ${({ delay }) => `${delay}ms`};

  img {
    width: 120px;
    height: 100%;
    object-fit: contain;
    margin: auto 8px;
    border-radius: 8px 30px;
  }

  .content {
    display: flex;
    flex-direction: column;
    padding: 8px 12px;
    flex: 1;
    text-align: right;

    h1 {
      font-size: 1em;
    }

    h2 {
      font-size: 0.8em;
      color: #666;
      margin-top: 4px;
    }

    span {
      margin-top: 8px;
      align-self: flex-end;
    }

    p {
      align-self: flex-end;
      font-size: 0.7em;
      color: #666;
    }
  }

  @keyframes rigthToLeftSkew {
    from {
      opacity: 0;
      transform: skew(-10deg, 0deg);
      transform: translateX(200px);
    }

    to {
      opacity: 1;
      transform: skew(0deg, 0deg);
      transform: translateX(0px);
    }
  }
`;
