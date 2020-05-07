import React from 'react';

import CheckboxesTags from '~/components/Inputs/CheckboxesTags';

import PromotionList from './PromotionList';
import RecommendedList from './RecommendedList';
import { Container } from './styles';

function Home() {
  return (
    <Container>
      <CheckboxesTags
        id="search-filters"
        className="search-filters"
        label="Busque os melhores pratos"
      />
      <RecommendedList />
      <PromotionList />
    </Container>
  );
}

export default Home;
