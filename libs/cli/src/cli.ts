import { type Command, program } from 'commander';

import { type AbstractCommand } from './commands/abstract-command';
import { HelloCommand } from './commands/hello.command';

type CommandConstructor = { new (program: Command): AbstractCommand };

function cli(...commands: CommandConstructor[]) {
  program.name('restly').description('Tools and generator');

  for (const c of commands) {
    new c(program);
  }

  program.parse();
}

cli(HelloCommand);
