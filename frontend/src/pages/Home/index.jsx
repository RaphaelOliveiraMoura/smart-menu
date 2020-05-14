import React, { useEffect, useState } from 'react';

import CheckboxesTags from '~/components/Inputs/CheckboxesTags';
import { getOverviewHomeInformations } from '~/services/products';

import PromotionList from './PromotionList';
import RecommendedList from './RecommendedList';
import { Container } from './styles';

function Home() {
  const [homeInformations, setHomeInformations] = useState({});

  useEffect(() => {
    async function getHomeInformations() {
      const informations = await getOverviewHomeInformations();
      setHomeInformations(informations);
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
      <PromotionList promotions={homeInformations.promotions} />
      <RecommendedList recommended={homeInformations.recommended} />
    </Container>
  );
}

export default Home;
