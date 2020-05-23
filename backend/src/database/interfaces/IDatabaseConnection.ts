export default interface IDatabaseConnection {
  synchronize(): Promise<void>;
}
