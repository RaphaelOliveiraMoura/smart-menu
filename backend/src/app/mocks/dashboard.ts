import items from './items';

export default {
  recommendations: [...items.slice(0, 3)],
  promotions: [...items.slice(3, 7)],
};
