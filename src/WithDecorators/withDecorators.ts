import { FunctionType } from '@nmxjs/types';
import { IWithDecoratorsOptions } from './interfaces';

export const withDecorators = <T extends FunctionType>({ fn, decorators }: IWithDecoratorsOptions<T>) =>
  decorators.reduce((resultFn, decorator) => decorator(resultFn), fn);
