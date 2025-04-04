import { div } from '../Div';

export const getPercentFirstFromSecond = (first: number, second: number, precision?: number) => div((100 * second) / first - 100, precision);
