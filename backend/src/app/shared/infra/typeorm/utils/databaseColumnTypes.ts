import { ColumnOptions } from 'typeorm';

const isTestEnvironment = process.env.NODE_ENV === 'test';

export const timestampColumnTypeProps: ColumnOptions = isTestEnvironment
  ? { type: 'datetime' }
  : { type: 'timestamp with time zone' };

export const createdAtColumnTypeProps: ColumnOptions = isTestEnvironment
  ? timestampColumnTypeProps
  : { ...timestampColumnTypeProps, default: (): string => 'CURRENT_TIMESTAMP' };

export const updatedAtColumnTypeProps: ColumnOptions = isTestEnvironment
  ? timestampColumnTypeProps
  : {
      ...timestampColumnTypeProps,
      default: (): string => 'CURRENT_TIMESTAMP',
      onUpdate: 'CURRENT_TIMESTAMP',
    };

export const enumColumnType = isTestEnvironment ? 'varchar' : 'enum';
