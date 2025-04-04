import { getPercentageOfNumber } from './getPercentageOfNumber';

describe('getPercentageOfNumber', () => {
  it('success', () => {
    const result = getPercentageOfNumber(300, 25);
    expect(result).toEqual(75);
  });
});
