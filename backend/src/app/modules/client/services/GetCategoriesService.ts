import { inject, injectable } from 'tsyringe';

import ICategoryRepository from '@modules/client/repositories/ICategoryRepository';
import ICategoryModel from '@shared/models/ICategoryModel';

@injectable()
export default class GetCategoriesService {
  constructor(
    @inject('@client/CategoryRepository')
    private categoryRepository: ICategoryRepository,
  ) {}

  async execute(): Promise<ICategoryModel[]> {
    const categories = await this.categoryRepository.find();

    return categories;
  }
}
