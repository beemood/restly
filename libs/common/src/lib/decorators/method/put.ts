import { Put as __Put } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { names, pluralNames } from '@restly/names';
import { InvalidComponentNameError } from '../../errors/invalid-component-name.error.js';
import { inferResourceNameFromComponentName } from '../../names/component-name.js';

export function Put(): MethodDecorator {
  return (...args) => {
    const className = args[0].constructor.name;
    const name = inferResourceNameFromComponentName(className);
    const pluralNameVariants = pluralNames(name);
    if (names(name).fileName === pluralNameVariants.fileName) {
      throw new InvalidComponentNameError(
        `${className} ( irregular plural name )`
      );
    }
    const path = `${pluralNameVariants.fileName}`;
    ApiOperation({ summary: `Update ${pluralNameVariants.pascal}` })(...args);
    __Put(path)(...args);
  };
}

export function PutBy(param: string): MethodDecorator {
  return (...args) => {
    const className = args[0].constructor.name;
    const name = inferResourceNameFromComponentName(className);
    const pluralNameVariants = pluralNames(name);
    if (names(name).fileName === pluralNameVariants.fileName) {
      throw new InvalidComponentNameError(
        `${className} ( irregular plural name )`
      );
    }
    const path = `${pluralNameVariants.fileName}/:${param}`;
    ApiOperation({
      summary: `Update ${pluralNameVariants.pascal} by ${param}`,
    })(...args);
    __Put(path)(...args);
  };
}

export function PutOne(): MethodDecorator {
  return (...args) => {
    const className = args[0].constructor.name;
    const name = inferResourceNameFromComponentName(className);
    const nameVariants = names(name);
    const path = `${nameVariants.fileName}`;
    ApiOperation({ summary: `Update ${nameVariants.pascal}` })(...args);
    __Put(path)(...args);
  };
}

export function PutOneBy(param: string): MethodDecorator {
  return (...args) => {
    const className = args[0].constructor.name;
    const name = inferResourceNameFromComponentName(className);
    const nameVariants = names(name);
    const path = `${nameVariants.fileName}/:${param}`;

    ApiOperation({ summary: `Update ${nameVariants.pascal} by ${param}` })(
      ...args
    );
    __Put(path)(...args);
  };
}

export function PutOneById(): MethodDecorator {
  return (...args) => {
    const className = args[0].constructor.name;
    const name = inferResourceNameFromComponentName(className);
    const nameVariants = names(name);
    const path = `${nameVariants.fileName}/:id`;
    ApiOperation({ summary: `Update ${nameVariants.pascal} by id` })(...args);
    __Put(path)(...args);
  };
}

export const PutMany = Put;
export const Update = Put;
export const UpdateMany = Put;

export const UpdateOne = PutOne;
export const UpdateOneBy = PutOneBy;
export const UpdateOneById = PutOneById;
