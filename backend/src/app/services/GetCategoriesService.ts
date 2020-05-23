import { inject, injectable } from 'tsyringe';

import ICategoryModel from '@interfaces/models/ICategoryModel';
import ICategoryRepository from '@interfaces/repositories/ICategoryRepository';

@injectable()
export default class GetCategoriesService {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository,
  ) {}

  async execute(): Promise<ICategoryModel[]> {
    const categories = await this.categoryRepository.find();

    return categories;
  }
}
