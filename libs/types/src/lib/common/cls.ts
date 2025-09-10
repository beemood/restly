import { type Any } from './any.js';

export interface Cls<T = Any> {
  new (...args: Any[]): T;
}
