import { addDays } from 'date-fns';

import JsonWebToken from './JsonWebToken';

interface IPayloadTest {
  name: string;
  age: number;
}

const jsonWebToken = new JsonWebToken<IPayloadTest>();

describe('JsonWebToken', () => {
  it('should generate and verify a token with a object payload', async () => {
    const payload = { name: 'Raphael', age: 20 };
    const token = await jsonWebToken.sign(payload);
    expect(token).toBeTruthy();

    const retrievePayload = await jsonWebToken.check(String(token));

    expect(retrievePayload).toMatchObject(payload);
  });

  it('should return null when verify a invalid token', async () => {
    expect(await jsonWebToken.check('invalid-token')).toBeFalsy();
    expect(await jsonWebToken.check('')).toBeFalsy();
  });

  it('should check invalidate token when pass one day', async () => {
    const token = await jsonWebToken.sign({ name: 'Raphael', age: 20 });
    expect(await jsonWebToken.check(String(token))).toBeTruthy();

    Date.now = (): number => addDays(new Date(), 1).getTime();

    expect(await jsonWebToken.check(String(token))).toBeFalsy();
  });
});
