import { pluralNames } from './plural-names.js';

describe('pluralNames', () => {
  it('should create pluralNames', () => {
    const n = pluralNames('some name');
    expect(n.camel).toEqual('someNames');
    expect(n.propertyName).toEqual('someNames');
    expect(n.className).toEqual('SomeNames');
    expect(n.pascal).toEqual('SomeNames');
    expect(n.constantName).toEqual('SOME_NAMES');
    expect(n.screamingSnake).toEqual('SOME_NAMES');
    expect(n.snake).toEqual('some_names');
    expect(n.fileName).toEqual('some-names');
    expect(n.kebab).toEqual('some-names');
    expect(n.lower).toEqual('some names');
    expect(n.upper).toEqual('SOME NAMES');
    expect(n.sentence).toEqual('Some names');
    expect(n.title).toEqual('Some Names');
  });
});
