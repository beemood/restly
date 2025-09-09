import { ESLintUtils } from '@typescript-eslint/utils';

export type RuleType = 'layout' | 'problem' | 'suggestion';

export function createRule() {
  return ESLintUtils.RuleCreator(
    (name) => `https://beemood.github.io/restly/eslint-rules/${name}`
  );
}
