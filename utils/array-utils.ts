export const range = (lo: number, hi: number): number[] => {
  const result = Array<number>(hi - lo);
  for (let i = lo; i < hi; i++) {
    result[i - lo] = i;
  }
  return result;
};

export const sum = (numbers: number[]): number => {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
};

export const numbersEqual = (
  a: readonly number[],
  b: readonly number[]
): boolean => {
  return a.length === b.length && a.every((_, i) => a[i] === b[i]);
};
