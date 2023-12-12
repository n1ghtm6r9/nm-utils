import math from 'big.js';
import { ISplitUpperCaseOptions } from './interfaces';

export const splitUpperCase = ({ str }: ISplitUpperCaseOptions) =>
  Array.from(str)
    .reduce((indexes: number[], letter, i) => {
      if (letter.toUpperCase() === letter) {
        indexes.push(i);
      }
      return indexes;
    }, [])
    .map((_, i, indexes) => str.slice(indexes[i], indexes[math(i).add(1).toNumber()]));
