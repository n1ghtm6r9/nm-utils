import { sub } from '../Sub';

export const decrement = (value: number, precision?: number): number => sub(value, 1, precision);
