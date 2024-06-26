import math from 'big.js';
import { numberToString } from '../NumberToString';
import { ITrimNumberOptions } from './interfaces';

export function trimNumber({ number, precision }: ITrimNumberOptions): number {
  const strNumber = typeof number === 'string' ? number : numberToString(number);
  const dotIndex = strNumber.indexOf('.');

  if (dotIndex === -1) {
    return typeof number === 'string' ? parseFloat(number) : number;
  }

  const nextIndexFromDot = math(dotIndex).add(1).toNumber();
  const intPart = strNumber.substring(0, nextIndexFromDot);

  return parseFloat(`${intPart}${strNumber.substring(nextIndexFromDot, math(precision).add(nextIndexFromDot).toNumber())}`);
}
