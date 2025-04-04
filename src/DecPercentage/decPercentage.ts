import { subtract } from '../Subtract';
import { getPercentageOfNumber } from '../GetPercentageOfNumber';

export const decPercentage = (value: number, percent: number, precision?: number) =>
  subtract(value, getPercentageOfNumber(value, percent, precision), precision);
