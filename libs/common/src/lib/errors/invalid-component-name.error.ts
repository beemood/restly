import { componentNameSuffixes } from '../names/component-name.js';

export class InvalidComponentNameError extends Error {
  constructor(componentName: string) {
    super(
      `${InvalidComponentNameError.name}: The component name, ${componentName}, must end with one of ${componentNameSuffixes} suffixes`
    );
  }
}
