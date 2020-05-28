import styled from 'styled-components';

export const Container = styled.section`
  .search-filters {
    margin: 12px;
    animation: topToBottom 1.2s;
    animation-fill-mode: backwards;
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
`;
