import { getPercentFirstFromSecond } from './getPercentFirstFromSecond';

describe('getPercentFirstFromSecond', () => {
  it('success positive', () => {
    const result = getPercentFirstFromSecond({
      first: 300,
      second: 330,
    });
    expect(result).toEqual(10);
  });

  it('success negative', () => {
    const result = getPercentFirstFromSecond({
      first: 300,
      second: 270,
    });
    expect(result).toEqual(-10);
  });
});
