import { formatDistanceToNow, parseISO } from 'date-fns';
import locale from 'date-fns/locale/pt-BR';

import api from '~/services/api';

function relativeFormatTime(timestamp) {
  return formatDistanceToNow(parseISO(timestamp), {
    locale,
  });
}

export async function getInProgressOrders() {
  const { data } = await api.get('/orders');

  return data.map((order) => ({
    ...order,
    formattedRequestedTime: relativeFormatTime(order.createdAt),
  }));
}

export async function getDeliveredOrders() {
  const { data } = await api.get('/orders/delivery');

  return data.map((order) => ({
    ...order,
    formattedFinishedAt: order.deliveredAt
      ? relativeFormatTime(order.deliveredAt)
      : null,
  }));
}
