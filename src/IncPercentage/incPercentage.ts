import { sum } from '../Sum';
import { getPercentageOfNumber } from '../GetPercentageOfNumber';

export const incPercentage = (value: number, percent: number, precision?: number) =>
  sum(value, getPercentageOfNumber(value, percent, precision), precision);
