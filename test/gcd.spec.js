import gcd from '../src/gcd';

/**
 * Unit tests for GCD function
 *
 * Why these test cases?
 * 1. Normal case: Verify basic functionality (8, 12 → 4)
 * 2. Prime numbers: Confirm GCD=1 for primes (7, 13 → 1)
 * 3. Negative inputs: Validate absolute value handling (-24, 18 → 6)
 * 4. Zero handling: Check GCD with zero (0, 5 → 5)
 * 5. Equal numbers: Verify GCD of same number (15, 15 → 15)
 */
describe('gcd', () => {
  test('calculates GCD of 8 and 12 as 4', () => {
    expect(gcd(8, 12)).toBe(4);
  });

  test('returns 1 for prime numbers (7 and 13)', () => {
    expect(gcd(7, 13)).toBe(1);
  });

  test('handles negative numbers (-24 and 18)', () => {
    expect(gcd(-24, 18)).toBe(6);
  });

  test('handles zero (0 and 5)', () => {
    expect(gcd(0, 5)).toBe(5);
  });

  test('returns number itself when inputs are equal (15 and 15)', () => {
    expect(gcd(15, 15)).toBe(15);
  });
});