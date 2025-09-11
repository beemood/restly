import { Get as __Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { names, pluralNames } from '@restly/names';
import { InvalidComponentNameError } from '../../errors/invalid-component-name.error.js';
import { inferResourceNameFromComponentName } from '../../names/component-name.js';

export function Get(): MethodDecorator {
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

    ApiOperation({ summary: `Find ${pluralNameVariants.pascal}` })(...args);

    __Get(path)(...args);
  };
}

export function GetBy(param: string): MethodDecorator {
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

    ApiOperation({ summary: `Find ${pluralNameVariants.pascal} by ${param}` })(
      ...args
    );
    __Get(path)(...args);
  };
}
export function GetOne(): MethodDecorator {
  return (...args) => {
    const className = args[0].constructor.name;
    const name = inferResourceNameFromComponentName(className);
    const nameVariants = names(name);
    const path = `${nameVariants.fileName}`;
    ApiOperation({ summary: `Find ${nameVariants.pascal}` })(...args);
    __Get(path)(...args);
  };
}

export function GetOneBy(param: string): MethodDecorator {
  return (...args) => {
    const className = args[0].constructor.name;
    const name = inferResourceNameFromComponentName(className);
    const nameVariants = names(name);
    const path = `${nameVariants.fileName}/:${param}`;

    ApiOperation({ summary: `Find ${nameVariants.pascal} by ${param}` })(
      ...args
    );
    __Get(path)(...args);
  };
}

export function GetOneById(): MethodDecorator {
  return (...args) => {
    const className = args[0].constructor.name;
    const name = inferResourceNameFromComponentName(className);
    const nameVariants = names(name);
    const path = `${nameVariants.fileName}/:id`;

    ApiOperation({ summary: `Find ${nameVariants.pascal} by id` })(...args);
    __Get(path)(...args);
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
