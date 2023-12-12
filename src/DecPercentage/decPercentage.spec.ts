import { decPercentage } from './decPercentage';

describe('decPercentage', () => {
  it('success', () => {
    const result = decPercentage({
      number: 300,
      percent: 25,
    });
    expect(result).toEqual(225);
  });
});
