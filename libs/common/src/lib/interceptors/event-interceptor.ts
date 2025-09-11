import {
    Injectable,
    type CallHandler,
    type ExecutionContext,
    type NestInterceptor,
} from '@nestjs/common';
import { type EventEmitter2 } from '@nestjs/event-emitter';
import { type Any } from '@restly/types';
import { type Request } from 'express';
import { tap, type Observable } from 'rxjs';
import { v4 as uuid4 } from 'uuid';
import { createResourceEventName } from '../events/create-resource-event-name.js';
import { type EventPayload } from '../events/resource-event-listeners.js';
import { InjectEventEmitter } from '../inject/inject-event-emitter.js';
import { inferResourceNameFromComponentName } from '../names/component-name.js';

@Injectable()
export class EventEmitterInterceptor implements NestInterceptor {
  constructor(
    @InjectEventEmitter() protected readonly eventEmitter: EventEmitter2
  ) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<Any> {
    const req = context.switchToHttp().getRequest<Request>();

    const resouceName = inferResourceNameFromComponentName(
      context.getClass().name
    );
    const operationName = context.getHandler().name;
    const eventName = createResourceEventName(resouceName, operationName);

    const id = uuid4();
    const timestamp = () => Date.now();

    const requestPayload: Readonly<EventPayload> = {
      handled: false,
      req: {
        id,
        params: req.params,
        body: req.body,
        query: req.query,
        timestamp: timestamp(),
      },
    };

    this.eventEmitter.emit(eventName, requestPayload);

    return next.handle().pipe(
      tap((res) => {
        const responsePayload: Readonly<EventPayload> = {
          ...requestPayload,
          res: { id, body: res.body, timestamp: timestamp() },
          handled: true,
        };
        this.eventEmitter.emit(eventName, responsePayload);
      })
    );
  }
}
