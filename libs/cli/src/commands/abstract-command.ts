import { type Command } from 'commander';

export abstract class AbstractCommand<Parameters = unknown> {
  constructor(protected readonly program: Command) {
    this.init();
  }

  protected init() {
    throw new Error(`Not implemented`);
  }

  protected action(options: Parameters) {
    throw new Error(`Not implemented: ${options}`);
  }
}
