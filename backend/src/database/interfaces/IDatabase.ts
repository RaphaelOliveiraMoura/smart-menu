import IDatabaseConnection from '@database/interfaces/IDatabaseConnection';

export default interface IDatabase {
  connect(): Promise<IDatabaseConnection>;
}
