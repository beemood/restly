import { Post as __Post } from '@nestjs/common';
import { names, pluralNames } from '@restly/names';
import { InvalidComponentNameError } from '../../errors/invalid-component-name.error.js';
import { inferResourceNameFromComponentName } from '../../names/component-name.js';

export function Post(): MethodDecorator {
  return (target, propertyKey, descriptor) => {
    const name = inferResourceNameFromComponentName(target.constructor.name);

    const pluralNameVariants = pluralNames(name);

    if (names(name).fileName === pluralNameVariants.fileName) {
      throw new InvalidComponentNameError(
        `${target.constructor.name} ( irregular plural name )`
      );
    }

    const path = `${pluralNameVariants.fileName}`;
    __Post(path)(target, propertyKey, descriptor);
  };
}

export function PostOne(): MethodDecorator {
  return (target, propertyKey, descriptor) => {
    const name = inferResourceNameFromComponentName(target.constructor.name);
    const nameVariants = names(name);
    const path = `${nameVariants.fileName}`;
    __Post(path)(target, propertyKey, descriptor);
  };
}

export const PostMany = Post;
export const Create = Post;
export const CreateMany = Post;
export const Save = Post;
export const SaveMany = Post;

export const CreateOne = PostOne;
export const SaveOne = PostOne;
