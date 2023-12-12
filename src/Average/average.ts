import math from 'big.js';
import { sum } from '../Sum';
import { IAverageOptions } from './interfaces';

export const average = (options: IAverageOptions) => math(sum(options)).div(options.numbers.length).toNumber();
