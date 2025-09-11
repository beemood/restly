import { componentNameSuffixes } from '../names/component-name.js';

export class InvalidResourceOperationNameError extends Error {
  constructor(resourceOperationName: string) {
    super(
      `${InvalidResourceOperationNameError.name}: The component name, ${resourceOperationName}, must end with one of ${componentNameSuffixes} suffixes`
    );
  }
}
