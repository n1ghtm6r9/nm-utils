import { sub } from '../Sub';
import { getPercentageOfNumber } from '../GetPercentageOfNumber';

export const decPercentage = (value: number, percent: number, precision?: number) =>
  sub(value, getPercentageOfNumber(value, percent, precision), precision);
