import { MigrationInterface, QueryRunner } from 'typeorm';

import TypeORMCategoryModel from '@shared/infra/typeorm/models/TypeORMCategoryModel';

const categories: Partial<TypeORMCategoryModel>[] = [
  { id: 1, title: 'Porção' },
  { id: 2, title: 'Bebida' },
  { id: 3, title: 'Hamburguer' },
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
