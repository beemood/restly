export class InvalidNameError extends Error {
  constructor(message = 'Invalid name') {
    super(`Invalid name : ${message} `);
  }
}
