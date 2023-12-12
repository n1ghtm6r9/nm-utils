import math from 'big.js';
import { ICalcAvgPriceOptions } from './interfaces';
import { sum } from '../Sum';

export const calcAvgPrice = ({ data }: ICalcAvgPriceOptions) =>
  math(sum({ numbers: data.map(v => math(v.price).mul(v.amount).toNumber()) }))
    .div(sum({ numbers: data.map(v => v.amount) }))
    .toNumber();
