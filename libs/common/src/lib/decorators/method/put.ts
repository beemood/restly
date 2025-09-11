import { Put as __Put } from '@nestjs/common';
import { names, pluralNames } from '@restly/names';
import { InvalidComponentNameError } from '../../errors/invalid-component-name.error.js';
import { inferResourceNameFromComponentName } from '../../names/component-name.js';

export function Put(): MethodDecorator {
  return (target, propertyKey, descriptor) => {
    const name = inferResourceNameFromComponentName(target.constructor.name);

    const pluralNameVariants = pluralNames(name);

    if (names(name).fileName === pluralNameVariants.fileName) {
      throw new InvalidComponentNameError(
        `${target.constructor.name} ( irregular plural name )`
      );
    }

    const path = `${pluralNameVariants.fileName}`;

    __Put(path)(target, propertyKey, descriptor);
  };
}

export function PutBy(param: string): MethodDecorator {
  return (target, propertyKey, descriptor) => {
    const name = inferResourceNameFromComponentName(target.constructor.name);
    const pluralNameVariants = pluralNames(name);

    if (names(name).fileName === pluralNameVariants.fileName) {
      throw new InvalidComponentNameError(
        `${target.constructor.name} ( irregular plural name )`
      );
    }

    const path = `${pluralNameVariants.fileName}/:${param}`;

    __Put(path)(target, propertyKey, descriptor);
  };
}

export function PutOne(): MethodDecorator {
  return (target, propertyKey, descriptor) => {
    const name = inferResourceNameFromComponentName(target.constructor.name);
    const nameVariants = names(name);
    const path = `${nameVariants.fileName}`;
    __Put(path)(target, propertyKey, descriptor);
  };
}

export function PutOneBy(param: string): MethodDecorator {
  return (target, propertyKey, descriptor) => {
    const name = inferResourceNameFromComponentName(target.constructor.name);
    const nameVariants = names(name);
    const path = `${nameVariants.fileName}/:${param}`;
    __Put(path)(target, propertyKey, descriptor);
  };
}

export function PutOneById(): MethodDecorator {
  return (target, propertyKey, descriptor) => {
    const name = inferResourceNameFromComponentName(target.constructor.name);
    const nameVariants = names(name);
    const path = `${nameVariants.fileName}/:id`;
    __Put(path)(target, propertyKey, descriptor);
  };
}

export const PutMany = Put;
export const Update = Put;
export const UpdateMany = Put;

export const UpdateOne = PutOne;
export const UpdateOneBy = PutOneBy;
export const UpdateOneById = PutOneById;
