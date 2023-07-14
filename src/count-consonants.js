function countConsonants(input) {
  if (typeof input != 'string') {
    throw new Error();
  }
  return input.replace(/[^a-z]/gi, '').replace(/[aeiou]/gi, '').length;
}

module.exports = countConsonants;
