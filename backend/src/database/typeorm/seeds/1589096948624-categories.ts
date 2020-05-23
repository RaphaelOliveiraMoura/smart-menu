import { MigrationInterface, QueryRunner } from 'typeorm';

import TypeORMCategoryModel from '@infra/typeorm/models/TypeORMCategoryModel';

const categories: TypeORMCategoryModel[] = [
  { id: 1, title: 'Porções' },
  { id: 2, title: 'Bebidas' },
];

export class Categories1589096948624 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connection
      .getRepository(TypeORMCategoryModel)
      .save(categories);
  }

  public async down(): Promise<void> {
    // ...
  }
}
