import { AbstractCommand } from './abstract-command';

export type HelloCommandOptions = {
  name: string;
};

export class HelloCommand extends AbstractCommand<HelloCommandOptions> {
  override init() {
    this.program
      .command('hello')
      .description('say hello ')
      .requiredOption('-n, --name <string>, Your name')
      .action(this.action);
  }

  override action(options: HelloCommandOptions) {
    console.log(`Hello, ${options.name}`);
  }
}
