import jwt from 'jsonwebtoken';

import IJwt from '@shared/services/IJwt';

const secretKey = String(process.env.SECRET_KEY);
const expiresIn = '1d';

export default class JsonWebToken<T extends object> implements IJwt<T> {
  async sign(payload: T): Promise<string | null> {
    const token = await jwt.sign(payload, secretKey, { expiresIn });

    return token;
  }

  async check(token: string): Promise<T | null> {
    try {
      const payload = await jwt.verify(token, secretKey);

      if (!payload) return null;

      return payload as T;
    } catch (error) {
      return null;
    }
  }
}
