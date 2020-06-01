import { Request, Response } from 'express';
import { container } from 'tsyringe';

import GenerateSessionTokenService from '@modules/client/services/GenerateSessionTokenService';

const generateSessionTokenService = container.resolve(
  GenerateSessionTokenService,
);

class SessionController {
  async store(request: Request, response: Response): Promise<Response> {
    const { id_table } = request.headers;

    const token = await generateSessionTokenService.execute(Number(id_table));

    return response.json({ token });
  }
}

export default SessionController;
