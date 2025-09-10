export class EmptyStringError extends Error {
  constructor(message = 'Empty string error') {
    super(`Empty string: ${message} `);
  }
}
