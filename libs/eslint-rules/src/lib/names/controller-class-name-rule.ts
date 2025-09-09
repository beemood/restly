import { createNameRule } from '../common/create-name-rule.js';

/**
 * Controller class name rule
 */
export const controllerClassNameRule = createNameRule(
  'controller-class-name',
  'problem',
  /^\w{0,}Controller$/,
  /^\w{0,}Controller$/,
  'Controller class name linter'
);
