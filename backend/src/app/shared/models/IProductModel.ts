import ICategoryModel from '@shared/models/ICategoryModel';

export default interface IProductModel {
  id?: number;
  title: string;
  description?: string;
  image_url?: string;
  price?: number;
  oldPrice?: number;
  category?: ICategoryModel;
  createdAt?: Date;
  updatedAt?: Date;
}
