
import countEvenNumbersWithin from '../src/assignment-2';
 import { describe, it, expect } from 'vitest';

 describe('countEvenNumbersWithin', () => {
    it('should count even numbers within the range 1 to 10', () => {
      expect(countEvenNumbersWithin(10)).toEqual({
        count: 5,
        sum: 30,
        arrayOfEvenNumbers: [2, 4, 6, 8, 10],
      });
    });
  
    it('should count even numbers within the range 1 to 20', () => {
      expect(countEvenNumbersWithin(20)).toEqual({
        count: 10,
        sum: 110,
        arrayOfEvenNumbers: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      });
    });
  
  });

