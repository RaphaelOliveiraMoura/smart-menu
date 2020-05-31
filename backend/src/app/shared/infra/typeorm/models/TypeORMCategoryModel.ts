import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import TypeORMProductModel from '@shared/infra/typeorm/models/TypeORMProductModel';
import {
  createdAtColumnTypeProps,
  updatedAtColumnTypeProps,
} from '@shared/infra/typeorm/utils/databaseColumnTypes';
import ICategoryModel from '@shared/models/ICategoryModel';

@Entity('categories')
export default class TypeORMCategoryModel implements ICategoryModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  title: string;

  @OneToMany(() => TypeORMProductModel, (product) => product.category)
  products?: TypeORMProductModel[];

  @CreateDateColumn({
    ...createdAtColumnTypeProps,
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    ...updatedAtColumnTypeProps,
    name: 'updated_at',
  })
  updatedAt: Date;
}
