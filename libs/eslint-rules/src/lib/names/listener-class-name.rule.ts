import { createNameRule } from '../common/create-name-rule.js';

/**
 * Controller class name rule
 */
export const listenerClassNameRule = createNameRule(
  'listener-class-name',
  'problem',
  /^.*Listener$/,
  /^.*Listener$/,
  'Listener class name linter'
);
