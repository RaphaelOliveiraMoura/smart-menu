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

@Entity('ratings')
export default class Rating {
  @PrimaryGeneratedColumn()
  id: number;

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
