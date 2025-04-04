import { sum } from '../Sum';

export const arrSum = (numbers: number[], precision?: number) => numbers.filter(Boolean).reduce((res, v) => sum(res, v, precision), 0);
