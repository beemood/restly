import {
  isComponentName,
  isControllerName,
  isDtoName,
  isListenerName,
  isModuleName,
  isServiceName,
} from './component-name.js';

describe('component-name', () => {
  describe('isComponentName', () => {
    describe('returns', () => {
      it.each`
        value               | returnValue
        ${''}               | ${false}
        ${'  '}             | ${false}
        ${'Some'}           | ${false}
        ${'ControllerSome'} | ${false}
        ${'Controller'}     | ${true}
        ${'SomeController'} | ${true}
        ${'SomeService'}    | ${true}
        ${'SomeModule'}     | ${true}
        ${'SomeListener'}   | ${true}
        ${'SomeDto'}        | ${true}
      `(
        `isComponentName($value) should return $returnValue`,
        ({ value, returnValue }) => {
          expect(isComponentName(value)).toEqual(returnValue);
        }
      );
    });
  });
  describe('isControllerName', () => {
    describe('returns', () => {
      it.each`
        value               | returnValue
        ${''}               | ${false}
        ${'  '}             | ${false}
        ${'Some'}           | ${false}
        ${'ControllerSome'} | ${false}
        ${'Controller'}     | ${true}
        ${'SomeController'} | ${true}
      `(
        `isControllerName($value) should return $returnValue`,
        ({ value, returnValue }) => {
          expect(isControllerName(value)).toEqual(returnValue);
        }
      );
    });
  });

  describe('isServiceName', () => {
    describe('returns', () => {
      it.each`
        value            | returnValue
        ${''}            | ${false}
        ${'  '}          | ${false}
        ${'Some'}        | ${false}
        ${'ServiceSome'} | ${false}
        ${'Service'}     | ${true}
        ${'SomeService'} | ${true}
      `(
        `isServiceName($value) should return $returnValue`,
        ({ value, returnValue }) => {
          expect(isServiceName(value)).toEqual(returnValue);
        }
      );
    });
  });

  describe('isListenerName', () => {
    describe('returns', () => {
      it.each`
        value             | returnValue
        ${''}             | ${false}
        ${'  '}           | ${false}
        ${'Some'}         | ${false}
        ${'ListenerSome'} | ${false}
        ${'Listener'}     | ${true}
        ${'SomeListener'} | ${true}
      `(
        `isListenerName($value) should return $returnValue`,
        ({ value, returnValue }) => {
          expect(isListenerName(value)).toEqual(returnValue);
        }
      );
    });
  });
  describe('isModuleName', () => {
    describe('returns', () => {
      it.each`
        value           | returnValue
        ${''}           | ${false}
        ${'  '}         | ${false}
        ${'Some'}       | ${false}
        ${'ModuleSome'} | ${false}
        ${'Module'}     | ${true}
        ${'SomeModule'} | ${true}
      `(
        `isModuleName($value) should return $returnValue`,
        ({ value, returnValue }) => {
          expect(isModuleName(value)).toEqual(returnValue);
        }
      );
    });
  });
  describe('isDtoName', () => {
    describe('returns', () => {
      it.each`
        value        | returnValue
        ${''}        | ${false}
        ${'  '}      | ${false}
        ${'Some'}    | ${false}
        ${'DtoSome'} | ${false}
        ${'Dto'}     | ${true}
        ${'SomeDto'} | ${true}
      `(
        `isDtoName($value) should return $returnValue`,
        ({ value, returnValue }) => {
          expect(isDtoName(value)).toEqual(returnValue);
        }
      );
    });
  });
});
