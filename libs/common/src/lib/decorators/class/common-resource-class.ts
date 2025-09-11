import { ValidateResourceClass } from './validate-resource-class.js';

export function CommonResourceClass(): ClassDecorator {
  return (target) => {
    ValidateResourceClass()(target);
  };
}
