import { InvalidComponentNameError } from '../../errors/invalid-component-name.error.js';
import { isComponentName } from '../../names/component-name.js';

export function ValidateResourceClass(): ClassDecorator {
  return (target) => {
    if (!isComponentName(target.name)) {
      throw new InvalidComponentNameError(target.name);
    }
  };
}
