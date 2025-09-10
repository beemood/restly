import { InvalidNameError } from '../errors/invalid-name-error.js';
import { normalize } from './normalize.js';

describe('normalize', () => {
  describe('returns', () => {
    it.each`
      value                           | returnValue
      ${'   some name   '}            | ${'some-name'}
      ${'   some name   '}            | ${'some-name'}
      ${'some Name'}                  | ${'some-name'}
      ${'some.name'}                  | ${'some-name'}
      ${'some.Name'}                  | ${'some-name'}
      ${'   SOME_NAME   '}            | ${'some-name'}
      ${'   SOME_!$!*(&^$!&&NAME   '} | ${'some-name'}
      ${'some-name'}                  | ${'some-name'}
      ${'SomeName'}                   | ${'some-name'}
      ${'someName!'}                  | ${'some-name'}
      ${'someName.'}                  | ${'some-name'}
      ${'someName!@#$%^&*()'}         | ${'some-name'}
    `(
      `normalize($value) should return $returnValue`,
      ({ value, returnValue }) => {
        expect(normalize(value)).toEqual(returnValue);
      }
    );
  });

  describe('throws', () => {
    it.each`
      value        | error
      ${undefined} | ${Error}
      ${null}      | ${Error}
      ${NaN}       | ${Error}
      ${1}         | ${Error}
      ${true}      | ${Error}
      ${false}     | ${Error}
      ${''}        | ${InvalidNameError}
      ${'  '}      | ${InvalidNameError}
      ${'1'}       | ${InvalidNameError}
    `(`normalize($value) should throw $error `, ({ value, error }) => {
      expect(() => normalize(value)).toThrow(error);
    });
  });
});
