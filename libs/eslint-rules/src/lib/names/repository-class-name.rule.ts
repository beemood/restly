import { createNameRule } from '../common/create-name-rule.js';

/**
 * repository class name rule
 */
export const repositoryClassNameRule = createNameRule(
  'repository-class-name',
  'problem',
  /^.*Repository$/,
  /^.*Repository$/,
  'repository class name linter'
);
