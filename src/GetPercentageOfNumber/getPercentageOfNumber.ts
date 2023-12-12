import math from 'big.js';
import { IGetPercentageOfNumberOptions } from './interfaces';

export const getPercentageOfNumber = ({ number, percent }: IGetPercentageOfNumberOptions) => math(number).mul(math(percent).div(100)).toNumber();
