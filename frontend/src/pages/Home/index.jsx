import React, { useEffect, useState } from 'react';

import CheckboxesTags from '~/components/Inputs/CheckboxesTags';
import { getOverviewHomeInformations } from '~/services/products';

import PromotionList from './PromotionList';
import RecommendedList from './RecommendedList';
import { Container } from './styles';

function Home() {
  const [homeInformations, setHomeInformations] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getHomeInformations() {
      setLoading(true);
      const informations = await getOverviewHomeInformations();
      setHomeInformations(informations);
      setLoading(false);
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
      <PromotionList
        promotions={homeInformations.promotions}
        loading={loading}
      />
      <RecommendedList
        recommended={homeInformations.recommended}
        loading={loading}
      />
    </Container>
  );
}

export default Home;
