import styled from 'styled-components';

export const Container = styled.section`
  h2 {
    margin: 8px 8px 0px 8px;
    font-weight: normal;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 8px;
  }

  li {
    width: 100%;
  }

  li + li {
    margin-top: 16px;
  }

  article {
    display: flex;
    border-radius: 8px;
    overflow: hidden;
    background: #fff;
    min-height: 95px;
  }

  img {
    width: 140px;
    height: 100%;
    object-fit: cover;
    max-height: 115px;
  }

  aside {
    width: 100%;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1 {
      font-size: 0.9em;
    }

    p {
      font-size: 0.8em;
      color: #333;
      margin-top: 4px;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  aside footer {
    align-self: flex-end;

    span {
      color: #c23520aa;
      text-decoration: line-through;
      font-size: 0.9em;
    }

    strong {
      color: #c23520;
      margin-left: 8px;
    }
  }
`;
