import { IGetNumberPrecisionOptions } from './interfaces';

export const getNumberPrecision = ({ number }: IGetNumberPrecisionOptions) => number.toString().split('.')[1]?.length || 0;
