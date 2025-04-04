import { numberToString } from '../NumberToString';

export function trimNumber(number: number | string, precision: number): number {
  const strNumber = typeof number === 'string' ? number : numberToString(number);
  const dotIndex = strNumber.indexOf('.');

  if (dotIndex === -1) {
    return typeof number === 'string' ? parseFloat(number) : number;
  }

  const nextIndexFromDot = dotIndex + 1;
  const intPart = strNumber.substring(0, nextIndexFromDot);

  return parseFloat(`${intPart}${strNumber.substring(nextIndexFromDot, precision + nextIndexFromDot)}`);
}
