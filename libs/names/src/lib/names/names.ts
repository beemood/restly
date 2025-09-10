import { Names } from '@restly/types';
import { normalize } from '../helpers/normalize.js';
import { upperCaseFirst } from '../helpers/upper-case-first.js';
/**
 * Create all name variants from the given {@link name}
 *
 * @group Names
 * @param name string
 * @returns - {@link Names} object, all naming variants of the {@link name}
 *
 *
 * @example
 *
 * ````ts
 *    const result = names('productCategory|PRODUCT_CATEGORY|product-category|product category');
 *
 *    result.kebab;           // returns: product-category
 *    result.camel;           // returns: productCategory
 *    result.pascal;          // returns: ProductCategory
 *    result.snake;           // returns: product_category
 *    result.screamingSnake;  // returns: PRODUCT_CATEGORY
 *    result.title;           // returns: Product Category
 *    result.sentence;        // returns: Product category
 *    result.upper;           // returns: PRODUCT CATEGORY
 *    result.lower;           // returns: product category
 *    result.className;       // returns: ProductCategory
 *    result.propertyName;    // returns: productCategory
 *    result.constantName;    // returns: PRODUCT_CATEGORY
 *    result.fileName;        // returns: product-category
 * ````
 *
 */
export function names(name: string): Names {
  const normalized = normalize(name);

  const kebab = normalized;

  const camel = normalized
    .split('-')
    .map((value, index) => {
      if (index > 0) {
        return upperCaseFirst(value);
      }
      return value;
    })
    .join('');

  const pascal = upperCaseFirst(camel);

  const snake = normalized.replace(/[-]{1,}/g, '_');

  const constantName = snake.toUpperCase();

  const lower = normalized.replace(/[-]{1,}/, ' ');

  const upper = lower.toUpperCase();

  const sentence = upperCaseFirst(lower);

  const title = normalized.split('-').map(upperCaseFirst).join(' ');

  return {
    kebab,
    camel,
    className: pascal,
    constantName,
    fileName: kebab,
    lower,
    pascal,
    propertyName: camel,
    screamingSnake: constantName,
    sentence,
    snake,
    title,
    upper,
  };
}
