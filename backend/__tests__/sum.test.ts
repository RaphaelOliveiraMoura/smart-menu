function sum(a: number, b: number): number {
  return a + b;
}

it('should sum 1 + 1', () => {
  expect(sum(1, 1)).toBe(2);
});
