import { IGetArrUnitedBatchesOptions } from './interfaces';

export function getArrUnitedBatches<T>({ arr, length = arr.length }: IGetArrUnitedBatchesOptions<T>): T[][] {
  if (arr.length < length) {
    return [];
  }

  const result = [];

  const batchesCount = arr.length - length + 1;

  for (let i = 0; i < batchesCount; i++) {
    result.push(arr.slice(i, i + length));
  }

  return result;
}
