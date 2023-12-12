import { numberToString } from '../NumberToString';

export const getPrecision = (number: number) => numberToString(number).split('.')[1]?.length || 0;
