import { calcAvgPrice } from './calcAvgPrice';

describe('calcAvgPrice', () => {
  it('success', () => {
    const result = calcAvgPrice([
      {
        price: 20000,
        amount: 10,
      },
      {
        price: 18000,
        amount: 15,
      },
    ]);
    expect(result).toEqual(18800);
  });
});
