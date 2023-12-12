import { IGetBatchesFromArrayOptions } from './interfaces';

export function getBatchesFromArray<T>({ arr, size }: IGetBatchesFromArrayOptions<T>): T[][] {
  const res = [];
  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);
    res.push(chunk);
  }
  return res;
}
