import React, { useEffect, useState, useCallback } from 'react';

import CheckboxesTags from '~/components/Inputs/CheckboxesTags';
import {
  getOverviewHomeInformations,
  getAllCategories,
} from '~/services/products';

import PromotionList from './PromotionList';
import RecommendedList from './RecommendedList';
import { Container } from './styles';

function Home() {
  const [homeInformations, setHomeInformations] = useState({});
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [loading, setLoading] = useState(false);

  const getCategories = useCallback(async () => {
    setLoading(true);
    const categoriesFilters = await getAllCategories();
    setCategories(categoriesFilters);
    setLoading(false);
  }, []);

  const getHomeInformations = useCallback(async () => {
    setLoading(true);
    const informations = await getOverviewHomeInformations({
      categories: selectedCategories,
    });
    setHomeInformations(informations);
    setLoading(false);
  }, [selectedCategories]);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  useEffect(() => {
    getHomeInformations();
  }, [getHomeInformations]);

  return (
    <Container>
      <CheckboxesTags
        id="search-filters"
        className="search-filters"
        label="Busque os melhores pratos"
        options={categories}
        onChange={(_, selectedValues) => setSelectedCategories(selectedValues)}
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
