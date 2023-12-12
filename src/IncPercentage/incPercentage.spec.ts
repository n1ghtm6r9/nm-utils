import { incPercentage } from './incPercentage';

describe('incPercentage', () => {
  it('success', () => {
    const result = incPercentage({
      number: 300,
      percent: 10,
    });
    expect(result).toEqual(330);
  });
});
