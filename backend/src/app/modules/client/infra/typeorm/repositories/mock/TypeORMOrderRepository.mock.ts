import IOrderRepository from '@modules/client/repositories/IOrderRepository';
import IOrderDTO from '@shared/dtos/IOrderDTO';
import IOrderModel, { OrderStatus } from '@shared/models/IOrderModel';

export default class TypeORMOrderRepositoryMock implements IOrderRepository {
  private autoIncrement = 0;

  private orders: IOrderModel[] = [];

  async findById(id: number): Promise<IOrderModel | undefined> {
    return this.orders.find((order) => order.id === id);
  }

  async updateStatus({
    id,
    status,
  }: {
    id: number;
    status: OrderStatus;
  }): Promise<IOrderModel | undefined> {
    let updatedOrder: IOrderModel | undefined;

    this.orders = this.orders.map((order) => {
      if (order.id === id) {
        updatedOrder = { ...order, status };
        return updatedOrder;
      }

      return order;
    });

    return updatedOrder;
  }

  async create(order: IOrderDTO): Promise<IOrderModel> {
    const orderToCreate: IOrderModel = {
      id: this.autoIncrement,
      product: {
        id: order.product.id,
        title: 'Random Product',
        price: 10,
        image_url: 'image',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      ammount: 1,
      status: OrderStatus.IN_PROGRESS,
      table: {
        id: order.table.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.orders.push(orderToCreate);

    this.autoIncrement = this.autoIncrement + 1;

    return orderToCreate;
  }

  async findByTable(
    tableId: number,
    { status }: { status?: OrderStatus },
  ): Promise<IOrderModel[]> {
    return this.orders.filter(
      (order) => order.table?.id === tableId && order.status === status,
    );
  }

  async findUndeliveredFromTable(tableId: number): Promise<IOrderModel[]> {
    return this.orders.filter(
      (order) =>
        order.table?.id === tableId &&
        [OrderStatus.IN_PROGRESS, OrderStatus.DONE].includes(
          order.status as OrderStatus,
        ),
    );
  }
}
