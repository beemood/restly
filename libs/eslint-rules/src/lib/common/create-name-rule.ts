import { AST_NODE_TYPES } from '@typescript-eslint/utils';
import { createRule, RuleType } from './create-rule.js';

export function createNameRule(
  ruleName: string,
  type: RuleType,
  classNameExp: RegExp,
  decoratorNameExp: RegExp,
  description: string
) {
  const ruleFactory = createRule();
  return ruleFactory({
    name: ruleName,
    meta: {
      type,
      docs: {
        description,
      },
      schema: [],
      messages: {
        invalidControllerName: `Decorators, named like ${decoratorNameExp.source.toString()} should be applied to classes named like, ${classNameExp.source.toString()}`,
      },
    },
    defaultOptions: [],
    create(context) {
      return {
        ClassDeclaration(node) {
          if (!node.decorators) {
            return;
          }

          if (!node.id?.name) {
            return;
          }

          const HAS_THE_DECORATOR = node.decorators.some(
            (decorator) =>
              decorator.expression.type === AST_NODE_TYPES.CallExpression &&
              decorator.expression.callee.type === AST_NODE_TYPES.Identifier &&
              decoratorNameExp.test(decorator.expression.callee.name)
          );

          const IS_NOT_VALID_CLASS_NAME = !classNameExp.test(node?.id?.name);

          if (IS_NOT_VALID_CLASS_NAME && HAS_THE_DECORATOR) {
            context.report({
              node: node.id,
              messageId: 'invalidControllerName',
            });
          }
        },
      };
    },
  });
}
