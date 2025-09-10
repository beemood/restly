export class TypeError extends Error {
  constructor(message = 'Invalid type') {
    super(`Type : ${message} `);
  }
}
