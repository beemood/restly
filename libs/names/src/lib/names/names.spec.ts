import { names } from './names.js';

describe('names', () => {
  it('should create names', () => {
    const n = names("some name'");
    expect(n.camel).toEqual('someName');
    expect(n.propertyName).toEqual('someName');
    expect(n.className).toEqual('SomeName');
    expect(n.pascal).toEqual('SomeName');
    expect(n.constantName).toEqual('SOME_NAME');
    expect(n.screamingSnake).toEqual('SOME_NAME');
    expect(n.snake).toEqual('some_name');
    expect(n.fileName).toEqual('some-name');
    expect(n.kebab).toEqual('some-name');
    expect(n.lower).toEqual('some name');
    expect(n.upper).toEqual('SOME NAME');
    expect(n.sentence).toEqual('Some name');
    expect(n.title).toEqual('Some Name');
  });
});
