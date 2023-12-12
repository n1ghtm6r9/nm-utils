import math from 'big.js';
import { IIncPercentageOptions } from './interfaces';
import { getPercentageOfNumber } from '../GetPercentageOfNumber';

export const incPercentage = (options: IIncPercentageOptions) => math(options.number).add(getPercentageOfNumber(options)).toNumber();
