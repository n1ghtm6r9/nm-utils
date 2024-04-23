import { IReverseOptions } from './interfaces';

export const reverse = ({ value, isReversed }: IReverseOptions) => (isReversed ? !value : value);
