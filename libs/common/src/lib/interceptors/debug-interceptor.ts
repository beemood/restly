import {
  Injectable,
  type CallHandler,
  type ExecutionContext,
  type NestInterceptor,
} from '@nestjs/common';
import { type Any } from '@restly/types';
import { type Request } from 'express';
import { tap, type Observable } from 'rxjs';
import { inspect } from 'util';
import { v4 } from 'uuid';

@Injectable()
export class DebugInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Any> {
    const { params, body, query } = context
      .switchToHttp()
      .getRequest<Request>();

    const id = v4();
    const timestamp = () => Date.now();

    console.log();

    const requestParams = {
      handled: false,
      req: {
        id,
        params,
        body,
        query,
        timestamp: timestamp(),
      },
    };

    console.log(inspect(requestParams, true, 100));

    return next.handle().pipe(
      tap((body) => {
        console.log(
          inspect({ ...requestParams, handled: true, res: { body } }, true, 100)
        );
      })
    );
  }
}
