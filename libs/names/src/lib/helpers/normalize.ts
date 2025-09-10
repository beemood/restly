import { InvalidNameError } from '../errors/invalid-name-error.js';
import { isEmptyString } from './is-empty-string.js';
import { isPascalOrCamelCase } from './is-pascal-or-camel-case.js';
import { isUpperCase } from './is-upper-case.js';
import { replaceSpecialCharsWithSingleSpace } from './replace-special-chars-with-single-space.js';
import { trim } from './trim.js';

function __normalizePascalOrCamelCase(name: string) {
  if (isPascalOrCamelCase(name)) {
    return name
      .split('')
      .map((value, index) => {
        if (index > 0) {
          if (isUpperCase(value)) {
            return `-${value}`;
          }
        }
        return value;
      })
      .join('');
  }
  return name;
}

export function normalize(name: string): string {
  if (/^[0-9]/.test(name)) {
    throw new InvalidNameError(`The name, ${name}, cannot start with numbers`);
  }

  name = replaceSpecialCharsWithSingleSpace(name);
  name = trim(name).split(' ').join('-');

  if (isEmptyString(name)) {
    throw new InvalidNameError(`The name cannot be empty`);
  }

  if (name.length < 2) {
    throw new InvalidNameError(`The name, ${name},  is too short `);
  }

  if (isPascalOrCamelCase(name)) {
    name = __normalizePascalOrCamelCase(name);
  }

  return name.toLowerCase();
}
