import gcd from '../src/gcd';

describe('gcd', () => {
  test('calculates GCD of 8 and 12 correctly', () => {
    expect(gcd(8, 12)).toBe(4);
  });

  test('calculates GCD of 7 and 13 (primes) as 1', () => {
    expect(gcd(7, 13)).toBe(1);
  });

  test('handles negative numbers', () => {
    expect(gcd(-24, 18)).toBe(6);
  });
});