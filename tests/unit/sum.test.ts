import { hello, sample } from '../../src';

describe('test sample', () => {
  test('should return Hola Mundo', () => {
    expect(sample('Mundo')).toBe('HolaMundo');
  });
});

describe('test hello', () => {
  it('should return hello world', () => {
    expect(hello()).toBe('Hello world!');
  });
});
