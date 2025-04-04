export const getMaxPrecisionFromArray = (numbers: number[]) =>
  Math.max(
    ...numbers.map(v => {
      const [_, precision] = v.toString().split('.');
      return precision ? precision.length : 0;
    }),
  );
