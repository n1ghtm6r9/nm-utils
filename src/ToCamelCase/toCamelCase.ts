import { firstLetterUpperCase } from '../FirstLetterUpperCase';
import { IToCamelCaseOptions } from './interfaces';

export const toCamelCase = ({ str, splitter = '-' }: IToCamelCaseOptions) =>
  str
    .split(splitter)
    .map((str, i) => (i > 0 ? firstLetterUpperCase(str) : str))
    .join('');
