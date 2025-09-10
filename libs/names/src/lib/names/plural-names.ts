import { names } from './names.js';
import { pluralize } from './pluralize.js';

/**
 * Create all plural name variants of the given {@link name}
 *
 * @group Names
 * @param name string
 * @returns all plural variant of the given {@link name}
 *
 * @example
 *
 * ```ts
 *    const result = pluralNames('category')
 *
 *    result.fileName     // returns: 'categories'
 *    result.className     // returns: 'Categories'
 *    ...
 * ```
 */
export function pluralNames(name: string) {
  return names(pluralize(name));
}
