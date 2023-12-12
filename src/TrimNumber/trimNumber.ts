import math from 'big.js';
import { numberToString } from '../NumberToString';
import { ITrimNumberOptions } from './interfaces';

export function trimNumber({ number, precision }: ITrimNumberOptions) {
  const strNumber = numberToString(number);
  const dotIndex = strNumber.indexOf('.');

  if (dotIndex === -1) {
    return number;
  }

  const nextIndexFromDot = math(dotIndex).add(1).toNumber();
  const intPart = strNumber.substring(0, nextIndexFromDot);

  return parseFloat(`${intPart}${strNumber.substring(nextIndexFromDot, math(precision).add(nextIndexFromDot).toNumber())}`);
}
