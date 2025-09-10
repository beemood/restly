import { createNameRule } from '../common/create-name-rule.js';

/**
 * Controller class name rule
 */
export const serviceClassNameRule = createNameRule(
  'service-class-name',
  'problem',
  /^.*Service$/,
  /^.*Service$/,
  'Service class name linter'
);
