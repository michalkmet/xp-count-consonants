const countConsonants = require('./count-consonants');

describe('Story 1: When user pass incorrect data, it should return exception', () => {
  it('UAT1.1 - When given number, it should return exception', () => {
    expect(() => countConsonants(123)).toThrow();
  });

  it('UAT1.2 - When given empty array, it should return exception', () => {
    expect(() => countConsonants([])).toThrow();
  });
});

describe('Story 2: When user pass empty string, it should return 0', () => {
  it('UAT2.1 - When given empty string, it should return 0', () => {
    expect(countConsonants('')).toBe(0);
  });
});

describe('Story 3: When user pass one consonant', () => {
  it('UAT3.1 - When user pass "p", it should return 1', () => {
    expect(countConsonants('p')).toBe(1);
  });
});