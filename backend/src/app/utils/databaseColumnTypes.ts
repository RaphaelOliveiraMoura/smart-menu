/**
 * This file was necessary because the sqlite database dont have the same
 * functionalities of other relational database, so to align and fix the
 * differences between theirs, this file center all of this points.
 */
import { ColumnOptions } from 'typeorm';

const isTestEnvironment = process.env.NODE_ENV === 'test';

export const timestampColumnTypeProps: ColumnOptions = isTestEnvironment
  ? { type: 'datetime' }
  : { type: 'timestamp', default: (): string => 'CURRENT_TIMESTAMP(6)' };

export const createdAtColumnTypeProps: ColumnOptions = isTestEnvironment
  ? timestampColumnTypeProps
  : { ...timestampColumnTypeProps };

export const updatedAtColumnTypeProps: ColumnOptions = isTestEnvironment
  ? timestampColumnTypeProps
  : { ...timestampColumnTypeProps, onUpdate: 'CURRENT_TIMESTAMP(6)' };

export const enumColumnType = isTestEnvironment ? 'varchar' : 'enum';
