import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import TypeORMCategoryModel from '@infra/typeorm/models/TypeORMCategoryModel';
import {
  createdAtColumnTypeProps,
  updatedAtColumnTypeProps,
} from '@infra/typeorm/utils/databaseColumnTypes';

@Entity('products')
export default class TypeORMProductModel {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => TypeORMCategoryModel, (category) => category.products, {
    nullable: true,
  })
  @JoinColumn({ name: 'id_category', referencedColumnName: 'id' })
  category: TypeORMCategoryModel;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  image_url: string;

  @Column({ type: 'float' })
  price: number;

  @Column({ name: 'old_price', type: 'float', nullable: true })
  oldPrice?: number;

  @CreateDateColumn({
    name: 'created_at',
    ...createdAtColumnTypeProps,
  })
  createdAt?: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    ...updatedAtColumnTypeProps,
  })
  updatedAt?: Date;
}
