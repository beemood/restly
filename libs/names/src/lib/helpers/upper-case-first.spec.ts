import { upperCaseFirst } from './upper-case-first.js';

describe('upperCaseFirst', () => {
  describe('returns', () => {
    it.each`
      value     | returnValue
      ${'s'}    | ${'S'}
      ${'some'} | ${'Some'}
    `(
      `upperCaseFirst($value) should return $returnValue`,
      ({ value, returnValue }) => {
        expect(upperCaseFirst(value)).toEqual(returnValue);
      }
    );
  });
});
