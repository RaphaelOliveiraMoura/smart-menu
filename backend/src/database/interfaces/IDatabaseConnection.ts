export default interface IDatabaseConnection {
  synchronize(force: boolean): Promise<void>;
}
