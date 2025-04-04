import { subtract } from '../Subtract';

export const decrement = (value: number, precision?: number): number => subtract(value, 1, precision);
