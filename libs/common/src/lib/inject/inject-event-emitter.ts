import { Inject } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

export function InjectEventEmitter(): ParameterDecorator {
  return (...args) => {
    Inject(EventEmitter2)(...args);
  };
}
