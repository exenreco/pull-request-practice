/**
 * Calculates the Greatest Common Divisor (GCD) of two integers
 * using the Euclidean Algorithm.
 *
 * @param {number} a - First integer
 * @param {number} b - Second integer
 * @returns {number} GCD of a and b
 *
 * Why Euclidean Algorithm?
 * - Efficient for large numbers (O(log min(a,b)) time complexity)
 * - Handles negative inputs via Math.abs()
 * - Base case: GCD(a, 0) = |a|
 */
export default function gcd(a, b) {

  // Convert negative numbers to positive equivalents
  a = Math.abs(a);
  b = Math.abs(b);

  // Euclidean Algorithm core logic
  while (b !== 0) {
    const temp = b;
    b = a % b;  // Compute remainder
    a = temp;   // Replace a with previous b
  }

  return a;
};