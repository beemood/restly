import { InvalidResourceOperationNameError } from '../../errors/invalid-resource-operation-name.error.js';
import { isResourceOperationName } from '../../names/resource-operation-name.js';
import { AutoWireMethod } from '../method/auto-wire-method.js';
import { ResourceController } from './resource-controller.js';

export function AutoWireResourceController(): ClassDecorator {
  return (target) => {
    //
    ResourceController()(target);

    const methodNames = Object.getOwnPropertyNames(target.prototype);
    const prototype = target.prototype;

    for (const methodName of methodNames) {
      const descriptor = Object.getOwnPropertyDescriptor(prototype, methodName);

      // Check if the property is a method and not the constructor itself
      if (
        descriptor &&
        typeof descriptor.value === 'function' &&
        methodName !== 'constructor'
      ) {
        if (!isResourceOperationName(methodName)) {
          throw new InvalidResourceOperationNameError(methodName);
        }

        AutoWireMethod()(target.prototype, methodName, descriptor);
      }
    }
  };
}
