import api from '~/services/api';
import formattCurrency from '~/utils/formattCurrency';

function formattProductPrices(product) {
  return {
    ...product,
    formattedPrice: formattCurrency(product.price),
    formattedOldPrice: product.oldPrice && formattCurrency(product.oldPrice),
  };
}

export async function getOverviewHomeInformations() {
  const response = await api.get('/overview');

  const { promotions, recommended } = response.data;

  return {
    promotions: promotions.map(formattProductPrices),
    recommended: recommended.map(formattProductPrices),
  };
}
