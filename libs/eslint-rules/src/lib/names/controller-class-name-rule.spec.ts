// Import the RuleTester from the correct package

// Import the rule you want to test
import { RuleTester } from '@typescript-eslint/rule-tester';
import { controllerClassNameRule as rule } from './controller-class-name-rule.js';

// Create a new instance of RuleTester.
// The key is to specify the parser to handle TypeScript syntax.
const ruleTester = new RuleTester();

// Run the tests using the `ruleTester.run` method
describe('controller-class-name', () => {
  ruleTester.run('controller-class-name', rule, {
    // Define the valid test cases
    valid: [
      {
        code: `
          // This class should pass because it's a valid controller
          @Controller('users')
          export class UserController {}
        `,
      },
      {
        code: `
          // This class should pass because it's not a controller
          export class MyComponent {}
        `,
      },
      {
        code: `
          // A valid decorated class with a different decorator
          @Injectable()
          export class UserService {}
        `,
      },
      // You can add more valid test cases here
    ],

    // Define the invalid test cases
    invalid: [
      {
        code: `
          // This class should fail because it's decorated with @Controller but doesn't end with 'Controller'
          @Controller('users')
          export class Users {}
        `,
        // Define the expected errors
        errors: [
          {
            messageId: 'invalidControllerName',
            data: { ruleName: 'controller-class-name' },
          },
        ],
      },
      {
        code: `
          // This class should fail as it's decorated but has the wrong name
          @Controller('posts')
          export class MyPost {}
        `,
        errors: [
          {
            messageId: 'invalidControllerName',
            data: { ruleName: 'controller-class-name' },
          },
        ],
      },
    ],
  });
});
