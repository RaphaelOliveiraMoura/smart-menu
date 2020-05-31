export default interface IJwt<T> {
  sign(payload: T): Promise<string | null>;
  check(token: string): Promise<T | null>;
}
