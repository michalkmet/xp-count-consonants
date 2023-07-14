function countConsonants(input) {
  const numbers = ['0','1','2','3','4','5','6','7','8','9'];
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let result = 0;
  let lowerInput = input.toLowerCase();
  if (typeof lowerInput != 'string') {
    throw new Error();
  }

  for (let i = 0; i < input.length; i++) {
    const letter = input[i];
    if (!numbers.includes(letter) && !vowels.includes(letter)) result++;
  }

  // if (lowerInput === 'p' || lowerInput === 'b') return 1;
  // if (lowerInput.length === 2) return 2;

  return result;
}

module.exports = countConsonants;
