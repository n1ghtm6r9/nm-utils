import { getPrecision } from '../GetPrecision';

export const getPrecisionMult = (first: number, second: number, precision?: number): number =>
  Math.pow(10, typeof precision === 'number' ? precision : Math.max(getPrecision(first), getPrecision(second)));
