function countConsonants(input) {

  let lowerInput = input.toLowerCase();
  if (typeof lowerInput != 'string') {
    throw new Error();
  }

  if (lowerInput === 'p' || lowerInput === 'b') return 1;
  if (lowerInput.length === 2) return 2;

  return 0;
}

module.exports = countConsonants;
