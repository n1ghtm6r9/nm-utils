import { div } from '../Div';

export const average = (numbers: number[], precision?: number) =>
  div(
    numbers.reduce((sum, v) => sum + v, 0),
    numbers.length,
    precision,
  );
