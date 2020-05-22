export default interface IProductDAO {
  title: string;
  description: string;
  image_url: string;
  price: number;
  oldPrice?: number;
  category: {
    id: number;
  };
}
