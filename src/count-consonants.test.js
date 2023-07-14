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

  it('UAT3.2 - When user pass "b", it should return 1', () => {
    expect(countConsonants('b')).toBe(1);
  });

  it('UAT3.3 - When user pass "B", it should return 1', () => {
    expect(countConsonants('B')).toBe(1);
  });
});

describe('Story 4: When user pass one string, not consonant', () => {
  it('UAT4.1 - hen user pass "a", it should return 0', () => {
    expect(countConsonants('a')).toBe(0);
  });
  it('UAT4.2 - hen user pass ".", it should return 0', () => {
    expect(countConsonants('.')).toBe(0);
  });
  it('UAT4.3 - hen user pass "9", it should return 0', () => {
    expect(countConsonants('9')).toBe(0);
  });
  it('UAT4.4 - hen user pass " ", it should return 0', () => {
    expect(countConsonants(' ')).toBe(0);
  });
  it('UAT4.5 - hen user pass "A", it should return 0', () => {
    expect(countConsonants('A')).toBe(0);
  });
});

describe('Story 5: When user pass string of length 2, both consonant', () => {
  it('UAT5.1 - hen user pass "kp", it should return 2', () => {
    expect(countConsonants('kp')).toBe(2);
  });
  it('UAT5.2 - hen user pass "cc", it should return 2', () => {
    expect(countConsonants('cc')).toBe(2);
  });
});
