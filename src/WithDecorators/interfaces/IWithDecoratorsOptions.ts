import type { DecoratorHandler, FunctionType } from '@nmxjs/types';

export interface IWithDecoratorsOptions<T extends FunctionType> {
  fn: T;
  decorators: DecoratorHandler[];
}
