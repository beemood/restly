import { SetMetadata } from '@nestjs/common';

export const PUBLIC_METADATA_KEY = Symbol('PUBLIC_METADATA_KEY');

export function PublicResource(): ClassDecorator {
  return (target) => {
    SetMetadata(PUBLIC_METADATA_KEY, true)(target);
  };
}

export function PublicOperation(): MethodDecorator {
  return (target, propertyKey, descriptor) => {
    SetMetadata(PUBLIC_METADATA_KEY, true)(target, propertyKey, descriptor);
  };
}
