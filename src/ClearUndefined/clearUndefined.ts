export const clearUndefined = <T extends object>(obj: T) =>
  Object.keys(obj).reduce((res, key) => {
    if (obj[key] !== undefined) {
      res[key] = obj[key];
    }
    return res;
  }, <T>{});
