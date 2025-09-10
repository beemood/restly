import { createNameRule } from '../common/create-name-rule.js';

/**
 * dto class name rule
 */
export const dtoClassNameRule = createNameRule(
  'dto-class-name',
  'problem',
  /^(Create|Update|Query|Find|Delete|Page|Select|Read).*Dto$/,
  /^.*Dto$/,
  'dto class name linter'
);
