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
  it('UAT4.1 - When user pass "a", it should return 0', () => {
    expect(countConsonants('a')).toBe(0);
  });
  it('UAT4.2 - When user pass ".", it should return 0', () => {
    expect(countConsonants('.')).toBe(0);
  });
  it('UAT4.3 - When user pass "9", it should return 0', () => {
    expect(countConsonants('9')).toBe(0);
  });
  it('UAT4.4 - When user pass " ", it should return 0', () => {
    expect(countConsonants(' ')).toBe(0);
  });
  it('UAT4.5 - When user pass "A", it should return 0', () => {
    expect(countConsonants('A')).toBe(0);
  });
});

describe('Story 5: When user pass string of length 2, both consonant', () => {
  it('UAT5.1 - When user pass "kp", it should return 2', () => {
    expect(countConsonants('kp')).toBe(2);
  });
  it('UAT5.2 - When user pass "cc", it should return 2', () => {
    expect(countConsonants('cc')).toBe(2);
  });
});

describe('Story 6: When user pass string of length 2, one consonant, one not', () => {
  it('UAT6.1 - When user pass "k0", it should return 1', () => {
    expect(countConsonants('k0')).toBe(1);
  });
  it('UAT6.2 - When user pass "ca", it should return 1', () => {
    expect(countConsonants('ca')).toBe(1);
  });
  it('UAT6.3 - When user pass " r", it should return 1', () => {
    expect(countConsonants(' r')).toBe(1);
  });
  it('UAT6.4 - When user pass "9q", it should return 1', () => {
    expect(countConsonants('9q')).toBe(1);
  });
});

describe('Story 7: When user pass string of length 2, no consonant', () => {
  it('UAT7.1 - When user pass "00", it should return 0', () => {
    expect(countConsonants('00')).toBe(0);
  });

  it('UAT7.2 - When user pass "aa", it should return 0', () => {
    expect(countConsonants('aa')).toBe(0);
  });

  it('UAT7.3 - When user pass " A", it should return 0', () => {
    expect(countConsonants(' A')).toBe(0);
  });

  it('UAT7.4 - When user pass " .", it should return 0', () => {
    expect(countConsonants(' .')).toBe(0);
  });
});

describe('Story 8: When user pass one word, it should return number of consonants', () => {
  it('UAT8.1 - When user pass "word", it should return 3', () => {
    expect(countConsonants('word')).toBe(3);
  });

  it('UAT8.2 - When user pass "lol", it should return 2', () => {
    expect(countConsonants('lol')).toBe(2);
  });

  it('UAT8.3 - When user pass "aaaaa", it should return 0', () => {
    expect(countConsonants('aaaaa')).toBe(0);
  });
});

describe('Story 9: When user pass sentence, it should return number of consonants', () => {
  it('UAT9.1 -  When user pass "hello world", it should return 7', () => {
    expect(countConsonants('hello world')).toBe(7);
  });

  it('UAT9.2 -  When user pass "uuutttkkkaajsndfdn", it should return 13', () => {
    expect(countConsonants('uuutttkkkaajsndfdn')).toBe(13);
  });
});
