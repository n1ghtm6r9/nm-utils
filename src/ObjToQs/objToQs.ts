export const objToQs = (obj: Record<string, unknown>, encode = true) =>
  Object.keys(obj)
    .reduce((res, key) => {
      const data = typeof obj[key] === 'string' ? <string>obj[key] : JSON.stringify(obj[key]);

      if (!data) {
        return;
      }

      res.push(`${key}=${encode ? encodeURIComponent(data) : data}`);

      return res;
    }, [])
    .join('&');
