import { isEmptyString } from './is-empty-string.js';

describe('isEmptyString', () => {
  describe('returns', () => {
    it.each`
      value                | returnValue
      ${''}                | ${true}
      ${' '}               | ${true}
      ${'               '} | ${true}
    `(
      `isEmptyString($value) should return $returnValue`,
      ({ value, returnValue }) => {
        expect(isEmptyString(value)).toEqual(returnValue);
      }
    );
  });
});
