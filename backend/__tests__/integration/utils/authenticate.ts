import request from 'supertest';

import app from '@root/app';

import TablesFactory from '../../factories/TablesFactory';

interface IAuthResponse {
  token: string;
  idTable: number;
}

export async function clientAuthentication(): Promise<IAuthResponse> {
  const { generatedMaps } = await TablesFactory.generate(1);
  const [table] = generatedMaps;

  const response = await request(app.express)
    .post('/sessions')
    .set('id_table', table.id);

  return { token: `Bearer ${response.body.token}`, idTable: table.id };
}
