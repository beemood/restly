import { Post as __Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { names, pluralNames } from '@restly/names';
import { InvalidComponentNameError } from '../../errors/invalid-component-name.error.js';
import { inferResourceNameFromComponentName } from '../../names/component-name.js';

export function Post(): MethodDecorator {
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
    ApiOperation({ summary: `Create ${pluralNameVariants.pascal}` })(...args);
    __Post(path)(...args);
  };
}

export function PostOne(): MethodDecorator {
  return (...args) => {
    const className = args[0].constructor.name;
    const name = inferResourceNameFromComponentName(className);
    const nameVariants = names(name);
    const path = `${nameVariants.fileName}`;

    ApiOperation({ summary: `Create ${nameVariants.pascal}` })(...args);
    __Post(path)(...args);
  };
}

export const PostMany = Post;
export const Create = Post;
export const CreateMany = Post;
export const Save = Post;
export const SaveMany = Post;

export const CreateOne = PostOne;
export const SaveOne = PostOne;
