import math from 'big.js';
import { ISumOptions } from './interfaces';

export const sum = ({ numbers }: ISumOptions) => math(numbers.filter(Boolean).reduce((sum, v) => math(sum).add(v), math(0))).toNumber();
