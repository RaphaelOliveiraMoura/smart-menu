import CategoryRepository from '@infra/typeorm/repositories/TypeORMCategoryRepository';
import ICategoryModel from '@interfaces/models/ICategoryModel';
import ICategoryRepository from '@interfaces/repositories/ICategoryRepository';

class GetCategoriesService {
  private categoryRepository: ICategoryRepository;

  async execute(): Promise<ICategoryModel[]> {
    this.categoryRepository = new CategoryRepository();

    const categories = await this.categoryRepository.find();

    return categories;
  }
}

export default new GetCategoriesService();
