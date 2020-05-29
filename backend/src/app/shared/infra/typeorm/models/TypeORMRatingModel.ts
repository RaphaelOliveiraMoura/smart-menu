import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from 'typeorm';

import TypeORMOrderModel from '@shared/infra/typeorm/models/TypeORMOrderModel';
import {
  createdAtColumnTypeProps,
  updatedAtColumnTypeProps,
} from '@shared/infra/typeorm/utils/databaseColumnTypes';

@Entity('ratings')
export default class Rating {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => TypeORMOrderModel, (order) => order.rating)
  order: TypeORMOrderModel;

  @Column({ nullable: true })
  stars: number;

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
