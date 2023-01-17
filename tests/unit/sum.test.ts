import { hello } from '../../src';
/* eslint-disable no-magic-numbers */
/* eslint-disable no-undef */
const var1 = 2;
const var2 = var1 + var1;
describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(var1 + var1).toBe(var2);
  });
});

describe('test hello', () => {
  it('should return hello world', () => {
    expect(hello()).toBe('Hello world!');
  });
});
