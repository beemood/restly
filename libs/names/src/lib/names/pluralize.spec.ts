import { InvalidNameError } from '../errors/invalid-name-error.js';
import { pluralize } from './pluralize.js';

describe('pluralize', () => {
  describe('same', () => {
    it.each`
      value           | returnValue
      ${'sheep'}      | ${'sheep'}
      ${'fish'}       | ${'fish'}
      ${'deer'}       | ${'deer'}
      ${'moose'}      | ${'moose'}
      ${'species'}    | ${'species'}
      ${'series'}     | ${'series'}
      ${'salmon'}     | ${'salmon'}
      ${'trout'}      | ${'trout'}
      ${'bison'}      | ${'bison'}
      ${'aircraft'}   | ${'aircraft'}
      ${'offspring'}  | ${'offspring'}
      ${'offspring1'} | ${'offspring1s'}
      ${'man'}        | ${'men'}
      ${'woman'}      | ${'women'}
      ${'child'}      | ${'children'}
      ${'tooth'}      | ${'teeth'}
      ${'foot'}       | ${'feet'}
      ${'goose'}      | ${'geese'}
      ${'mouse'}      | ${'mice'}
      ${'louse'}      | ${'lice'}
      ${'person'}     | ${'people'}
      ${'ox'}         | ${'oxen'}
      ${'cortex'}     | ${'cortices'}
      ${'appendix'}   | ${'appendices'}
      ${'criterion'}  | ${'criteria'}
      ${'phenomenon'} | ${'phenomena'}
      ${'datum'}      | ${'data'}
      ${'alumnus'}    | ${'alumni'}
      ${'fungus'}     | ${'fungi'}
      ${'nucleus'}    | ${'nuclei'}
      ${'cactus'}     | ${'cacti'}
      ${'syllabus'}   | ${'syllabi'}
      ${'category'}   | ${'categories'}
      ${'box'}        | ${'boxes'}
      ${'go'}         | ${'goes'}
    `(
      `pluralize($value) should return $returnValue`,
      ({ value, returnValue }) => {
        expect(pluralize(value)).toEqual(returnValue);
      }
    );
  });

  describe('throws', () => {
    it.each`
      value      | error
      ${''}      | ${InvalidNameError}
      ${'  '}    | ${InvalidNameError}
      ${'1   '}  | ${InvalidNameError}
      ${'11   '} | ${InvalidNameError}
    `(`pluralize($value) should throw $error `, ({ value, error }) => {
      expect(() => pluralize(value)).toThrow(error);
    });
  });
});
