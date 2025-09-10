import { isPascalOrCamelCase } from './is-pascal-or-camel-case.js';

describe('isPascalOrCamelCase', () => {
  describe('returns', () => {
    it.each`
      value           | returnValue
      ${''}           | ${false}
      ${'some'}       | ${false}
      ${'some-value'} | ${false}
    `(
      `isPascalOrCamelCase($value) should return $returnValue`,
      ({ value, returnValue }) => {
        expect(isPascalOrCamelCase(value)).toEqual(returnValue);
      }
    );
  });
});
