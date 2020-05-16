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
    formattedRequestedTime: relativeFormatTime(order.updatedAt),
  }));
}

export async function getFinishedOrders() {
  const { data } = await api.get('/orders/finished');

  return data.map((order) => ({
    ...order,
    formattedFinishedAt: order.finishedAt
      ? relativeFormatTime(order.finishedAt)
      : null,
  }));
}
