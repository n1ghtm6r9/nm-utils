import { ISelectFromObjOptions } from './interfaces';

export function selectFromObj<T = any>({ select, obj }: ISelectFromObjOptions<T>) {
  if (!select?.length) {
    return obj;
  }
  return select.reduce((res: any, key) => {
    res[key] = obj[key];
    return res;
  }, {});
}
