import { InvalidResourceOperationNameError } from '../../errors/invalid-resource-operation-name.error.js';
import { isResourceOperationName } from '../../names/resource-operation-name.js';

export function ValiateResourceOperation(): MethodDecorator {
  return (target, propertyKey, descriptor) => {
    if (!isResourceOperationName(propertyKey.toString())) {
      throw new InvalidResourceOperationNameError(propertyKey.toString());
    }
  };
}
