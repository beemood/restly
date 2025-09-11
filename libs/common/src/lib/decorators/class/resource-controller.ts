import { Controller } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

export function ResourceController(): ClassDecorator {
  return (target) => {
    Controller()(target);
    ApiBearerAuth()(target);
  };
}
