import { getConnection } from 'typeorm';

import app from '@root/app';

export default async function (): Promise<void> {
  if (!app.connection) {
    await app.initialize();
  }

  await getConnection().synchronize(true);
}
