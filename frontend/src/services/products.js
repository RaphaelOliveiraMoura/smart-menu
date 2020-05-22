import api from '~/services/api';
import formattCurrency from '~/utils/formattCurrency';

function formattProductPrices(product) {
  return {
    ...product,
    formattedPrice: formattCurrency(product.price),
    formattedOldPrice: product.oldPrice && formattCurrency(product.oldPrice),
  };
}

export async function getOverviewHomeInformations({ categories = [] }) {
  const categoriesIds = categories.map(({ id }) => id);

  const filterByCategory =
    categoriesIds.length > 0
      ? { categories: JSON.stringify(categoriesIds) }
      : null;

  const response = await api.get('/overview', {
    params: { ...filterByCategory },
  });

  const { promotions, recommended } = response.data;

  return {
    promotions: promotions.map(formattProductPrices),
    recommended: recommended.map(formattProductPrices),
  };
}

export async function getAllCategories() {
  const response = await api.get('/categories');

  return response.data;
}
