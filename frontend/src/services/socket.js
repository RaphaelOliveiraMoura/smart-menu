import socketio from 'socket.io-client';

const socket = socketio(process.env.REACT_APP_API_URL);

export function subscribeToNewOrders(subscribeFunction) {
  socket.on('NEW_ORDER', subscribeFunction);
}

export function subscribeToDeliveryOrder(subscribeFunction) {
  socket.on('DELIVERY_ORDER', subscribeFunction);
}

export function disconnect() {
  if (socket.connected) socket.disconnect();
}
