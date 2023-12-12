import { IFirstLetterLowerCaseOptions } from './interfaces';

export const firstLetterLowerCase = ({ str }: IFirstLetterLowerCaseOptions) => `${str.charAt(0).toLowerCase()}${str.slice(1)}`;
