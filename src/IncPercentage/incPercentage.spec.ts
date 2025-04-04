import { incPercentage } from './incPercentage';

describe('incPercentage', () => {
  it('success', () => {
    const result = incPercentage(300, 10);
    expect(result).toEqual(330);
  });
});
