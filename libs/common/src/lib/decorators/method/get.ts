import { Get as __Get } from '@nestjs/common';
import { names, pluralNames } from '@restly/names';
import { InvalidComponentNameError } from '../../errors/invalid-component-name.error.js';
import { inferResourceNameFromComponentName } from '../../names/component-name.js';

export function Get(): MethodDecorator {
  return (target, propertyKey, descriptor) => {
    const name = inferResourceNameFromComponentName(target.constructor.name);

    const pluralNameVariants = pluralNames(name);

    if (names(name).fileName === pluralNameVariants.fileName) {
      throw new InvalidComponentNameError(
        `${target.constructor.name} ( irregular plural name )`
      );
    }

    const path = `${pluralNameVariants.fileName}`;

    __Get(path)(target, propertyKey, descriptor);
  };
}

export function GetBy(param: string): MethodDecorator {
  return (target, propertyKey, descriptor) => {
    const name = inferResourceNameFromComponentName(target.constructor.name);
    const pluralNameVariants = pluralNames(name);

    if (names(name).fileName === pluralNameVariants.fileName) {
      throw new InvalidComponentNameError(
        `${target.constructor.name} ( irregular plural name )`
      );
    }

    const path = `${pluralNameVariants.fileName}/:${param}`;

    __Get(path)(target, propertyKey, descriptor);
  };
}
export function GetOne(): MethodDecorator {
  return (target, propertyKey, descriptor) => {
    const name = inferResourceNameFromComponentName(target.constructor.name);
    const nameVariants = names(name);
    const path = `${nameVariants.fileName}`;
    __Get(path)(target, propertyKey, descriptor);
  };
}

export function GetOneBy(param: string): MethodDecorator {
  return (target, propertyKey, descriptor) => {
    const name = inferResourceNameFromComponentName(target.constructor.name);
    const nameVariants = names(name);
    const path = `${nameVariants.fileName}/:${param}`;
    __Get(path)(target, propertyKey, descriptor);
  };
}

export function GetOneById(): MethodDecorator {
  return (target, propertyKey, descriptor) => {
    const name = inferResourceNameFromComponentName(target.constructor.name);
    const nameVariants = names(name);
    const path = `${nameVariants.fileName}/:id`;
    __Get(path)(target, propertyKey, descriptor);
  };
}

export const GetMany = Get;
export const GetManyBy = GetBy;

export const Find = Get;
export const FindManyBy = GetBy;
export const FindMany = Get;

export const FindOne = GetOne;
export const FindOneBy = GetOneBy;
export const FindOneById = GetOneById;
