import { InvalidNameError } from '../errors/invalid-name-error.js';
import { isEmptyString } from '../helpers/is-empty-string.js';
import { normalize } from '../helpers/normalize.js';

/**
 * Pluralize the given {@link name} into its plural form in American English.
 *
 * This function handles the most common irregular nouns and general
 * pluralization rules. It is not an exhaustive list but covers
 * the majority of cases.
 *
 * @group Names
 * @param name string
 * @returns plural string
 *
 *
 * @example
 *
 *
 * ```ts
 *    pluralize('some')         // returns: somes
 *    pluralize('Box')          // returns: boxes
 *    pluralize('ProductCategory')     // returns: product-categories
 * ```
 */
export function pluralize(name: string) {
  name = normalize(name);

  if (isEmptyString(name)) {
    throw new InvalidNameError('The name cannot be empty');
  }

  // --- 1. Handle irregular nouns ---
  // This object maps singular irregular nouns to their plural forms.
  const irregularPlurals: Record<string, string> = {
    man: 'men',
    woman: 'women',
    child: 'children',
    tooth: 'teeth',
    foot: 'feet',
    goose: 'geese',
    mouse: 'mice',
    louse: 'lice',
    person: 'people',
    ox: 'oxen',
    cortex: 'cortices',
    appendix: 'appendices',
    criterion: 'criteria',
    phenomenon: 'phenomena',
    datum: 'data',
    alumnus: 'alumni',
    fungus: 'fungi',
    nucleus: 'nuclei',
    cactus: 'cacti',
    syllabus: 'syllabi',
  };

  if (irregularPlurals[name]) {
    return irregularPlurals[name];
  }

  // --- 2. Handle nouns that are the same in singular and plural form ---
  const sameSingularPlural = new Set<string>([
    'sheep',
    'fish',
    'deer',
    'moose',
    'species',
    'series',
    'salmon',
    'trout',
    'bison',
    'aircraft',
    'offspring',
  ]);

  if (sameSingularPlural.has(name)) {
    return name;
  }

  // --- 3. Apply general pluralization rules ---

  // Rule 1: Words ending in 's', 'x', 'z', 'sh', 'ch' get 'es'
  if (
    name.endsWith('s') ||
    name.endsWith('x') ||
    name.endsWith('z') ||
    name.endsWith('sh') ||
    name.endsWith('ch')
  ) {
    return name + 'es';
  }

  // Rule 2: Words ending in 'y' preceded by a consonant change 'y' to 'ies'
  const vowels = 'aeiou';
  if (name.endsWith('y') && !vowels.includes(name.charAt(name.length - 2))) {
    return name.slice(0, -1) + 'ies';
  }

  // Rule 3: Words ending in 'f' or 'fe' often change to 'ves'
  if (name.endsWith('fe')) {
    return name.slice(0, -2) + 'ves';
  }
  if (name.endsWith('f')) {
    return name.slice(0, -1) + 'ves';
  }

  // Rule 4: Words ending in 'o' preceded by a consonant get 'es'
  // There are exceptions, but this covers most cases like 'potato' and 'tomato'
  if (name.endsWith('o') && !vowels.includes(name.charAt(name.length - 2))) {
    return name + 'es';
  }

  // Rule 5: Default rule - add 's' to the end of the word
  return name + 's';
}
