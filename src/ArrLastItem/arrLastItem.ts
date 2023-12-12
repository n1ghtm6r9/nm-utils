import math from 'big.js';

export const arrLastItem = <T>(arr: T[]): T => (!arr.length ? undefined : arr[math(arr.length).minus(1).toNumber()]);
