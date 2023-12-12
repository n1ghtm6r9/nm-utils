import { IFirstLetterUpperCaseOptions } from './interfaces';

export const firstLetterUpperCase = ({ str }: IFirstLetterUpperCaseOptions) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
