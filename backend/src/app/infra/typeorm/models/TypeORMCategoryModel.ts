import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import TypeORMProductModel from '@infra/typeorm/models/TypeORMProductModel';
import {
  createdAtColumnTypeProps,
  updatedAtColumnTypeProps,
} from '@infra/typeorm/utils/databaseColumnTypes';

@Entity('categories')
export default class TypeORMCategoryModel {
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
  createdAt?: Date;

  @UpdateDateColumn({
    ...updatedAtColumnTypeProps,
    name: 'updated_at',
  })
  updatedAt?: Date;
}
