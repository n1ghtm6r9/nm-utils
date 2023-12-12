import math from 'big.js';

export const increment = (value: number): number => math(value).add(1).toNumber();
