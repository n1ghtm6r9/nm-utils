import math from 'big.js';
import { IGetArrUnitedBatchesOptions } from './interfaces';

export function getArrUnitedBatches<T>({ arr, length = arr.length }: IGetArrUnitedBatchesOptions<T>): T[][] {
  if (arr.length < length) {
    return [];
  }

  const result = [];

  const batchesCount = math(arr.length).minus(length).add(1).toNumber();

  for (let i = 0; i < batchesCount; i++) {
    result.push(arr.slice(i, math(i).add(length).toNumber()));
  }

  return result;
}
