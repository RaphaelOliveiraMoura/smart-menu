import TypeORMOrderRepositoryMock from '@modules/client/infra/typeorm/repositories/mock/TypeORMOrderRepository.mock';
import CreateOrderRequestService from '@modules/client/services/CreateOrderRequestService';
import WebSocket from '@shared/infra/tcp/socketio';

const webSocketInstance = new WebSocket();
const orderRepositoryInstance = new TypeORMOrderRepositoryMock();

const createOrderRequestService = new CreateOrderRequestService(
  orderRepositoryInstance,
  webSocketInstance,
);

describe('CreateOrderRequestService', () => {
  it('should create a order', async () => {
    const createdOrder = await createOrderRequestService.execute({
      ammount: 1,
      product: { id: 1 },
      table: { id: 1 },
    });

    expect(createdOrder).toHaveProperty('id');
  });
});
