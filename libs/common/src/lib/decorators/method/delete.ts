import { Delete as __Delete } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { names, pluralNames } from '@restly/names';
import { InvalidComponentNameError } from '../../errors/invalid-component-name.error.js';
import { inferResourceNameFromComponentName } from '../../names/component-name.js';

export function Delete(): MethodDecorator {
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

    ApiOperation({ summary: `Delete ${pluralNameVariants.pascal}` })(...args);

    __Delete(path)(...args);
  };
}

export function DeleteBy(param: string): MethodDecorator {
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
      summary: `Delete ${pluralNameVariants.pascal} by ${param}`,
    })(...args);
    __Delete(path)(...args);
  };
}

export function DeleteOne(): MethodDecorator {
  return (...args) => {
    const className = args[0].constructor.name;

    const name = inferResourceNameFromComponentName(className);
    const nameVariants = names(name);
    const path = `${nameVariants.fileName}`;

    ApiOperation({ summary: `Delete ${nameVariants.pascal}` })(...args);
    __Delete(path)(...args);
  };
}

export function DeleteOneBy(param: string): MethodDecorator {
  return (...args) => {
    const className = args[0].constructor.name;
    const name = inferResourceNameFromComponentName(className);
    const nameVariants = names(name);
    const path = `${nameVariants.fileName}/:${param}`;

    ApiOperation({ summary: `Delete ${nameVariants.pascal} by ${param}` })(
      ...args
    );
    __Delete(path)(...args);
  };
}

export function DeleteOneById(): MethodDecorator {
  return (...args) => {
    const className = args[0].constructor.name;
    const name = inferResourceNameFromComponentName(className);
    const nameVariants = names(name);
    const path = `${nameVariants.fileName}/:id`;

    ApiOperation({ summary: `Delete ${nameVariants.pascal} by id` })(...args);
    __Delete(path)(...args);
  };
}

export const DeleteMany = Delete;
export const DeleteManyBy = DeleteBy;
