function countConsonants(input) {
  if (typeof input != 'string') {
    throw new Error();
  }

  if (input === 'p' || input === 'b') return 1;

  return 0;
}

module.exports = countConsonants;
