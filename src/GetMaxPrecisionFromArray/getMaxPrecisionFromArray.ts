import { IGetMaxPrecisionFromArrayOptions } from './interfaces';

export const getMaxPrecisionFromArray = ({ numbers }: IGetMaxPrecisionFromArrayOptions) =>
  Math.max(
    ...numbers.map(v => {
      const [_, precision] = v.toString().split('.');
      return precision ? precision.length : 0;
    })
  );
