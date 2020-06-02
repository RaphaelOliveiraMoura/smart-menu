import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 16px;
    margin: 0 8px;
    border-radius: 8px;

    h2 {
      text-align: center;
      width: 100%;
      background: #fff;
      border-radius: 4px;
      padding: 16px;
    }
  }

  .dragging {
    article {
      background: #fff5;
    }
  }

  .canDrop {
    section {
      border: 1px solid #666;
      border-style: dashed;
    }
  }

  .isOver {
    section {
      background: #8881;
    }
  }

  article {
    max-width: 100%;
    background: #fff;
    border-radius: 4px;
    padding: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px 0;
    border: 1px #ddd solid;

    animation: bottomToTop 0.6s;
    animation-fill-mode: backwards;

    img {
      width: 80px;
      height: 80px;
      border-radius: 30px;
      object-fit: cover;
    }

    h1 {
      width: 160px;
    }

    span {
      display: block;
      margin-top: 8px;
      color: #666;
      font-size: 0.8em;
    }
  }

  .order-content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .order-informations {
    flex: 1;
    margin-left: 16px;
    width: 200px;
  }

  footer {
    display: flex;
    justify-content: center;
    margin-top: 8px;
    padding-top: 8px;
    padding-bottom: 8px;
    border-top: 1px solid #ddd;
    width: 80%;
  }

  & > div:nth-child(1) {
    article {
      border: 2px #ddd dashed;
      cursor: pointer;
    }
  }

  @keyframes bottomToTop {
    from {
      opacity: 0;
      transform: translateY(200px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;
