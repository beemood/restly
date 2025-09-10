import { createNameRule } from '../common/create-name-rule.js';

/**
 * module class name rule
 */
export const moduleClassNameRule = createNameRule(
  'module-class-name',
  'problem',
  /^\.*Module$/,
  /^\.*Module$/,
  'module class name linter'
);
