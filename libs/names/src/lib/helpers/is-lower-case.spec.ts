import { isLowerCase } from './is-lower-case.js';

describe('isLowerCase', () => {
  describe('returns', () => {
    it.each`
      value      | returnValue
      ${''}      | ${false}
      ${'A'}     | ${false}
      ${'s'}     | ${true}
      ${'s   f'} | ${true}
    `(
      `isLowerCase($value) should return $returnValue`,
      ({ value, returnValue }) => {
        expect(isLowerCase(value)).toEqual(returnValue);
      }
    );
  });
});
