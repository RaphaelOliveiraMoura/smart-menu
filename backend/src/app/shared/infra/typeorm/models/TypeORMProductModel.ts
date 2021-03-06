import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import TypeORMCategoryModel from '@shared/infra/typeorm/models/TypeORMCategoryModel';
import {
  createdAtColumnTypeProps,
  updatedAtColumnTypeProps,
} from '@shared/infra/typeorm/utils/databaseColumnTypes';
import IProductModel from '@shared/models/IProductModel';

@Entity('products')
export default class TypeORMProductModel implements IProductModel {
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
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    ...updatedAtColumnTypeProps,
  })
  updatedAt: Date;
}
