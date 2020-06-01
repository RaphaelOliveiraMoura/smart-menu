import ITableModel from '@shared/models/ITableModel';

export default interface ITableRepository {
  findById(tableId: number): Promise<ITableModel | undefined>;
}
