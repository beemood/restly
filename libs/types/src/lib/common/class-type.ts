import { ExplicitAny } from './explicit-any.js';

export interface ClassType<T = ExplicitAny> {
  new (...args: ExplicitAny[]): T;
}
