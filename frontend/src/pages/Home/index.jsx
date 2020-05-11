import React, { useEffect, useState } from 'react';

import CheckboxesTags from '~/components/Inputs/CheckboxesTags';
import api from '~/services/api';

import PromotionList from './PromotionList';
import RecommendedList from './RecommendedList';
import { Container } from './styles';

function Home() {
  const [homeInformations, setHomeInformations] = useState({
    promotions: [],
    recommendations: [],
  });

  useEffect(() => {
    async function getHomeInformations() {
      const response = await api.get('/dashboard');

      setHomeInformations(response.data);
    }

    getHomeInformations();
  }, []);

  return (
    <Container>
      <CheckboxesTags
        id="search-filters"
        className="search-filters"
        label="Busque os melhores pratos"
      />
      <RecommendedList recommendations={homeInformations.recommendations} />
      <PromotionList promotions={homeInformations.promotions} />
    </Container>
  );
}

export default Home;