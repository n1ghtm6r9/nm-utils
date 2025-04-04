import { decPercentage } from './decPercentage';

describe('decPercentage', () => {
  it('success', () => {
    const result = decPercentage(300, 25);
    expect(result).toEqual(225);
  });
});
