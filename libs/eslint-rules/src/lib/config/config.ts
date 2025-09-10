import { controllerClassNameRule } from '../names//controller-class-name-rule.js';
import { dtoClassNameRule } from '../names//dto-class-name.rule.js';
import { listenerClassNameRule } from '../names//listener-class-name.rule.js';
import { moduleClassNameRule } from '../names//module-class-name.rule.js';
import { repositoryClassNameRule } from '../names//repository-class-name.rule.js';
import { serviceClassNameRule } from '../names//service-class-name.rule.js';

export const plugins = () => {
  return {
    restly: {
      rules: {
        'controller-class-name': controllerClassNameRule,
        'service-class-name': serviceClassNameRule,
        'listener-class-name': listenerClassNameRule,
        'module-class-name': moduleClassNameRule,
        'dto-class-name': dtoClassNameRule,
        'repository-class-name': repositoryClassNameRule,
      },
    },
  };
};

const naming = {
  files: ['**/*.ts'],
  plugins: plugins(),
  rules: {
    'restly/controller-class-name': 'error',
    'restly/service-class-name': 'error',
    'restly/repository-class-name': 'error',
    'restly/module-class-name': 'error',
    'restly/dto-class-name': 'error',
    'restly/listener-class-name': 'error',
  },
};

export const configs = {
  naming: [naming],
  all: [naming],
};
