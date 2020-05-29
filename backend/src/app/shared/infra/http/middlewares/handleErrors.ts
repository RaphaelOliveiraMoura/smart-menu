import { Request, Response, NextFunction } from 'express';

import HttpError from '@shared/utils/HttpError';

export default function (
  error: Error,
  _req: Request,
  res: Response,
  // eslint-disable-next-line
  _next: NextFunction,
): Response<void> {
  if (error instanceof HttpError) {
    const { message, statusCode } = error;

    return res.status(statusCode).json({ error: message });
  }

  // eslint-disable-next-line no-console
  console.log(error);

  return res.status(500).json({ error: 'Internal Server Error' });
}
