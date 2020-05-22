import { MigrationInterface, QueryRunner } from 'typeorm';

import Table from '@models/Table';

const tables = [{ id: 1 }];

export class Tables1589840911977 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connection.getRepository(Table).save(tables);
  }

  public async down(): Promise<void> {
    // ...
  }
}
