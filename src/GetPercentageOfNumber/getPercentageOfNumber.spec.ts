import { getPercentageOfNumber } from './getPercentageOfNumber';

describe('getPercentageOfNumber', () => {
  it('success', () => {
    const result = getPercentageOfNumber({
      number: 300,
      percent: 25,
    });
    expect(result).toEqual(75);
  });
});
