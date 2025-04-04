import { getPercentFirstFromSecond } from './getPercentFirstFromSecond';

describe('getPercentFirstFromSecond', () => {
  it('success positive', () => {
    const result = getPercentFirstFromSecond(300, 330);
    expect(result).toEqual(10);
  });

  it('success negative', () => {
    const result = getPercentFirstFromSecond(300, 270);
    expect(result).toEqual(-10);
  });
});
