import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import Product from '@models/Product';
import Table from '@models/Table';

import {
  enumColumnType,
  createdAtColumnTypeProps,
  updatedAtColumnTypeProps,
} from '@utils/databaseColumnTypes';

export enum OrderStatus {
  IN_PROGRESS = 'in_progress',
  DONE = 'done',
  DELIVERED = 'delivered',
}

@Entity('orders')
export default class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, (product) => product.id)
  @JoinColumn({ name: 'id_product' })
  product: Product;

  @ManyToOne(() => Table, (table) => table.orders)
  @JoinColumn({ name: 'id_table' })
  table: Table;

  @Column({ type: 'integer', default: 1 })
  ammount: number;

  @Column()
  observations: string;

  @Column({
    type: enumColumnType,
    enum: OrderStatus,
    default: OrderStatus.IN_PROGRESS,
  })
  status: OrderStatus;

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
