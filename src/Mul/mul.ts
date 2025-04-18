import { getPrecisionMult } from '../GetPrecisionMult';

export const mul = (first: number, second: number, precision?: number): number => {
  const mult = getPrecisionMult(first, second, precision);
  return Math.round(first * second * mult) / mult;
};
