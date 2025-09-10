import { createNameRule } from '../common/create-name-rule.js';

/**
 * Controller class name rule
 */
export const controllerClassNameRule = createNameRule(
  'controller-class-name',
  'problem',
  /^.*Controller$/,
  /^.*Controller$/,
  'Controller class name linter'
);
