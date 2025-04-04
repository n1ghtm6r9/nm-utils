import { ISubtractNumbersArraysOptions } from './interfaces';

export function subtractNumbersArrays({ arrFirst, arrSecond }: ISubtractNumbersArraysOptions) {
  const result = [];
  const minLength = Math.min(arrFirst.length, arrSecond.length);

  for (let i = 1; i <= minLength; i++) {
    const difference = arrFirst[arrFirst.length - i] - arrSecond[arrSecond.length - i];

    if (difference) {
      result.unshift(difference);
    } else {
      break;
    }
  }

  return result;
}
