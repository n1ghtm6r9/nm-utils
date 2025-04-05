import { mul } from '../Mul';

export const getPercentageOfNumber = (value: number, percentage: number, precision?: number) => mul(value, percentage / 100, precision);
