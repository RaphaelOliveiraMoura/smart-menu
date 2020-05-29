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

import TypeORMProductModel from '@shared/infra/typeorm/models/TypeORMProductModel';
import TypeORMRatingModel from '@shared/infra/typeorm/models/TypeORMRatingModel';
import TypeORMTableModel from '@shared/infra/typeorm/models/TypeORMTableModel';
import {
  enumColumnType,
  timestampColumnTypeProps,
  createdAtColumnTypeProps,
  updatedAtColumnTypeProps,
} from '@shared/infra/typeorm/utils/databaseColumnTypes';
import { OrderStatus } from '@shared/models/IOrderModel';

@Entity('orders')
export default class TypeORMOrderModel {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => TypeORMProductModel, (product) => product.id)
  @JoinColumn({ name: 'id_product' })
  product: TypeORMProductModel;

  @ManyToOne(() => TypeORMTableModel, (table) => table.orders)
  @JoinColumn({ name: 'id_table' })
  table: TypeORMTableModel;

  @OneToOne(() => TypeORMRatingModel)
  @JoinColumn({ name: 'id_rating' })
  rating: TypeORMRatingModel;

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
