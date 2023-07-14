function countConsonants(input) {
  if (typeof input != 'string') {
    throw new Error();
  }

  let firstR = input.replace(/[^a-z]/gi, '');

  let secondR = firstR.replace(/[aeiou]/gi, '');

  return secondR.length;
}

module.exports = countConsonants;
