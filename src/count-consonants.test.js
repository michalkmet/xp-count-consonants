const countConsonants = require('./count-consonants');

describe('Story 1: When user pass incorrect data, it should return exception', () => {
  it('UAT1.1 - When given number, it should return exception', () => {
    expect(() => countConsonants(123)).toThrow();
  });
});
