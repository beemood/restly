import { trim } from './trim.js';

describe('trim', () => {
  it('should trim string', () => {
    expect(trim('         some             value ')).toEqual('some value');
  });
});
