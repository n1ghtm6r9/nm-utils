import math from 'big.js';

export const decrement = (value: number): number => math(value).minus(1).toNumber();
