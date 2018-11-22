import { powerOfTen, toPrecision3 } from './utils';

describe('#powerOfTen', () => {
  describe('when passed a number', () => {
    it('returns the power of ten of that number', () => {
      expect(powerOfTen(0)).toBe(0);

      expect(powerOfTen(1)).toBe(0);
      expect(powerOfTen(9)).toBe(0);
      expect(powerOfTen(10)).toBe(1);
      expect(powerOfTen(1000)).toBe(3);

      expect(powerOfTen(0.1)).toBe(-1);
      expect(powerOfTen(0.012)).toBe(-2);

      expect(powerOfTen(-1)).toBe(0);
      expect(powerOfTen(-10000)).toBe(4);
      expect(powerOfTen(-0.00001)).toBe(-5);
    });
  });
});

describe('#toPrescision3', () => {
  describe('when passed a number', () => {
    it('returns a string representation with 3 significant digits', () => {
      expect(toPrecision3(0)).toBe('0.00');
      expect(toPrecision3(1)).toBe('1.00');
      expect(toPrecision3(12)).toBe('12.0');
      expect(toPrecision3(123)).toBe('123');
      expect(toPrecision3(1234)).toBe('1.23k');
      expect(toPrecision3(12345)).toBe('12.3k');
      expect(toPrecision3(123456)).toBe('123k');
      expect(toPrecision3(1234567)).toBe('1.23M');
      expect(toPrecision3(12345678)).toBe('12.3M');
      expect(toPrecision3(123456789)).toBe('123M');
      expect(toPrecision3(1234567890)).toBe('1.23G');
      expect(toPrecision3(12345678901)).toBe('12.3G');

      expect(toPrecision3(-0)).toBe('0.00');
      expect(toPrecision3(-1)).toBe('-1.00');
      expect(toPrecision3(-12)).toBe('-12.0');
      expect(toPrecision3(-123)).toBe('-123');
      expect(toPrecision3(-1234)).toBe('-1.23k');
      expect(toPrecision3(-12345)).toBe('-12.3k');
      expect(toPrecision3(-123456)).toBe('-123k');
      expect(toPrecision3(-1234567)).toBe('-1.23M');
      expect(toPrecision3(-12345678)).toBe('-12.3M');
      expect(toPrecision3(-123456789)).toBe('-123M');
      expect(toPrecision3(-1234567890)).toBe('-1.23G');
      expect(toPrecision3(-12345678901)).toBe('-12.3G');

      expect(toPrecision3(0.1)).toBe('0.10');
      expect(toPrecision3(0.01)).toBe('0.01');
      expect(toPrecision3(0.001)).toBe('1.00m');
      expect(toPrecision3(0.0001)).toBe('0.10m');
      expect(toPrecision3(0.00001)).toBe('0.01m');
      expect(toPrecision3(0.000001)).toBe('1.00µ');
      expect(toPrecision3(0.0000001)).toBe('0.10µ');

      expect(toPrecision3(1000000000000000000000000001)).toBe('1.00?');
      expect(toPrecision3(0.00000000000000000000000000001)).toBe('0.01?');
    });
  });
});
