import { getHash } from '../GetHash';

export const objToHash = (obj: object | unknown[]) => getHash({ value: JSON.stringify(obj) });
