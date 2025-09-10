import { ESLintUtils } from '@typescript-eslint/utils';

export type RuleType = 'layout' | 'problem' | 'suggestion';

export function createRule() {
  return ESLintUtils.RuleCreator((name) => {
    return `https://beemood.github.io/restly/libs/eslint-rules/${name}`;
  });
}
