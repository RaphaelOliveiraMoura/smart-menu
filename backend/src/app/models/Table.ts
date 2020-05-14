import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import Order from '@models/Order';
import {
  createdAtColumnTypeProps,
  updatedAtColumnTypeProps,
} from '@utils/databaseColumnTypes';

@Entity('tables')
export default class Table {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Order, (order) => order.table)
  orders: Order[];

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
