import { div } from '../Div';
import { ICalcAvgPriceOptionsData } from './interfaces';

export const calcAvgPrice = (data: ICalcAvgPriceOptionsData[], precision?: number) => {
  const totalValue = data.reduce((sum, item) => sum + item.price * item.amount, 0);
  const totalAmount = data.reduce((sum, item) => sum + item.amount, 0);
  return div(totalValue, totalAmount, precision);
};
