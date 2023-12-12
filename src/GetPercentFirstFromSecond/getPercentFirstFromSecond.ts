import math from 'big.js';
import { IGetPercentFirstFromSecondOptions } from './interfaces';

export const getPercentFirstFromSecond = ({ first, second }: IGetPercentFirstFromSecondOptions) =>
  math(100).mul(second).div(first).minus(100).toNumber();
