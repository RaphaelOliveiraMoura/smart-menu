import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import {
  createdAtColumnTypeProps,
  updatedAtColumnTypeProps,
} from '@utils/databaseColumnTypes';

@Entity('products')
export default class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  image_url: string;

  @Column({ type: 'float' })
  price: number;

  @Column({ name: 'old_price', type: 'float', nullable: true })
  oldPrice: number;

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
