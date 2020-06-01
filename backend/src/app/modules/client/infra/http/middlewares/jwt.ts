import { Request, Response, NextFunction } from 'express';

import JsonWebToken from '@shared/infra/lib/JsonWebToken';

interface IPayloadJWT {
  id_table: number;
}

const jsonWebToken = new JsonWebToken<IPayloadJWT>();

export default async function (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void | Response<void>> {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(400).json({ error: 'You need provide JWT token' });
  }

  const [bearer, token] = authorization.split(' ');

  if (bearer !== 'Bearer' || !token) {
    return res.status(400).json({ error: 'Token authorization malformatted' });
  }

  const payload = await jsonWebToken.check(token);

  if (!payload) {
    return res.status(401).json({ error: 'You dont have permission' });
  }

  req.clientSessionPayload = payload;

  return next();
}
