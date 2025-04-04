import { mult } from '../Mult';

export const getPercentageOfNumber = (value: number, percentage: number, precision?: number) => mult(value, percentage / 100, precision);
