import { injectable, inject } from 'tsyringe';

import IJwtSessionPayload from '@modules/client/interfaces/IJwtSessionPayload';
import ITableRepository from '@modules/client/repositories/ITableRepository';
import JsonWebToken from '@shared/infra/lib/JsonWebToken';
import IJwt from '@shared/services/IJwt';
import HttpError from '@shared/utils/HttpError';

@injectable()
export default class GenerateSessionTokenService {
  private jsonWebTokenService: IJwt<IJwtSessionPayload>;

  constructor(
    @inject('@client/TableRepository')
    private tableRepository: ITableRepository,
  ) {
    this.jsonWebTokenService = new JsonWebToken<IJwtSessionPayload>();
  }

  async execute(id_table: number): Promise<string> {
    if (!id_table) {
      throw new HttpError('You need provide your credentials').withStatus(400);
    }

    const tableExists = await this.tableRepository.findById(id_table);

    if (!tableExists) {
      throw new HttpError('Invalid credentials').withStatus(400);
    }

    const token = await this.jsonWebTokenService.sign({ id_table });

    if (!token) {
      throw new HttpError('Error generating your token').withStatus(500);
    }

    return token;
  }
}
