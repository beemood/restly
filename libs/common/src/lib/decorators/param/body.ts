import { Body as __Body } from '@nestjs/common';
import { type ZodType } from 'zod';

export function Body(schema?: ZodType): ParameterDecorator {
  return (...args) => {
    __Body({
      transform(value) {
        return schema?.parse(value) ?? value;
      },
    })(...args);
  };
}
