import math from 'big.js';
import { ISubtractNumbersArraysOptions } from './interfaces';

export function subtractNumbersArrays({ arrFirst, arrSecond }: ISubtractNumbersArraysOptions) {
  const result = [];
  const minLength = Math.min(arrFirst.length, arrSecond.length);

  for (let i = 1; i <= minLength; i++) {
    const difference = math(arrFirst[math(arrFirst.length).minus(i).toNumber()])
      .minus(arrSecond[math(arrSecond.length).minus(i).toNumber()])
      .toNumber();

    if (difference) {
      result.unshift(difference);
    } else {
      break;
    }
  }

  return result;
}
