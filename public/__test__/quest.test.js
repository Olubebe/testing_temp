import sumOfNumbersTo from "../src/assignment"

import { describe, expect, it } from "vitest"

describe('sumOfNumbersTo', () => {
  it('should calculate the sum of numbers from 1 to 10', () => {
    expect(sumOfNumbersTo(10)).toEqual(55);
  });

  it('should return 1 when destination is 1', () => {
    expect(sumOfNumbersTo(1)).toBe(1);
  });

  it('should return 0 when destination is less than 1', () => {
    expect(sumOfNumbersTo(0)).toBe(0);
    expect(sumOfNumbersTo(-5)).toBe(0);
  });

  // Add more test cases as needed for edge cases or other scenarios
});

