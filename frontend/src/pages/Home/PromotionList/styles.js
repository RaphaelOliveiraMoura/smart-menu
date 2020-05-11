import styled from 'styled-components';

export const Container = styled.section`
  h2 {
    margin: 0px 8px;
    font-weight: normal;
  }

  ul {
    display: flex;
    align-items: center;
    overflow-x: scroll;
  }

  article {
    width: 120px;
    border-radius: 8px;
    overflow: hidden;

    display: flex;
    flex-direction: column;

    background: #fff;
    margin: 8px;
  }

  article .main {
    padding: 4px;
  }

  article img {
    width: 100%;
    height: 80px;
    object-fit: cover;
  }

  .main {
    h1 {
      font-size: 0.9em;
    }

    p {
      font-size: 0.8em;
      color: #333;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-top: 4px;
    }
  }

  footer {
    margin-top: 8px;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: #c23520aa;
      text-decoration: line-through;
      font-size: 0.9em;
    }

    strong {
      color: #c23520;
    }
  }
`;
