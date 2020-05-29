export default interface IOrderDTO {
  table: { id: number };
  product: { id: number };
  observations?: string;
  ammount: number;
}
