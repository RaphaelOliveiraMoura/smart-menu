import TypeORM from '@shared/infra/typeorm/database';

export interface IDatabaseConnection {
  synchronize(force?: boolean): Promise<void>;
}

export interface IDatabase {
  connect(): Promise<IDatabaseConnection>;
}

class Database {
  public database: IDatabase;

  constructor() {
    this.database = new TypeORM();
  }
}

export default new Database().database;
