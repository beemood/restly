import { Query as __Query } from '@nestjs/common';
import { type ZodType } from 'zod';

export function Query(schema?: ZodType): ParameterDecorator {
  return (...args) => {
    __Query({
      transform(value) {
        return schema?.parse(value) ?? value;
      },
    })(...args);
  };
}
