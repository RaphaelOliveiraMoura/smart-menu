import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import TypeORMOrderModel from '@shared/infra/typeorm/models/TypeORMOrderModel';
import {
  createdAtColumnTypeProps,
  updatedAtColumnTypeProps,
} from '@shared/infra/typeorm/utils/databaseColumnTypes';

@Entity('tables')
export default class Table {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => TypeORMOrderModel, (order) => order.table)
  orders: TypeORMOrderModel[];

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
