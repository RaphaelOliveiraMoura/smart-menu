import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';

import Product from '@models/Product';
import Rating from '@models/Rating';
import Table from '@models/Table';
import {
  enumColumnType,
  timestampColumnTypeProps,
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

  @OneToOne(() => Rating)
  @JoinColumn({ name: 'id_rating' })
  rating: Rating;

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
    ...createdAtColumnTypeProps,
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    ...updatedAtColumnTypeProps,
    name: 'updated_at',
  })
  updatedAt: Date;

  @Column({
    ...timestampColumnTypeProps,
    name: 'done_at',
    nullable: true,
    default: null,
  })
  doneAt: Date;

  @Column({
    ...timestampColumnTypeProps,
    name: 'delivered_at',
    nullable: true,
    default: null,
  })
  deliveredAt: Date;
}
