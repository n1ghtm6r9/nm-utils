import math from 'big.js';
import { IDecPercentageOptions } from './interfaces';
import { getPercentageOfNumber } from '../GetPercentageOfNumber';

export const decPercentage = (options: IDecPercentageOptions) => math(options.number).minus(getPercentageOfNumber(options)).toNumber();
