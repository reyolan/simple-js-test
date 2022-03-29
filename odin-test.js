//function that accepts a string and returns it with the first character capitalized.
function capitalizeFirst(input) {
  const firstUpperCase = input.charAt(0).toUpperCase();
  return firstUpperCase + input.slice(1);
}

//function that takes a string and reverses it (i.e. "hello" -> "olleh")
function reverseString(input) {
  return input.split("").reverse().join("");
}

// calculator object that contains add, subtract, divide and multiply functions
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

//create a caesarCipher function

function shiftCharacter(character, shift) {
  const characterCode = character.charCodeAt(0);
  const shiftedCharacterCode = characterCode + shift;

  if (
    characterCode < 65 ||
    (characterCode > 90 && characterCode < 97) ||
    characterCode > 122
  ) {
    return characterCode;
  }

  if (shiftedCharacterCode > 90 && characterCode > 64 && characterCode < 91) {
    const startingCharacterCode = 64;
    const codeDifference = shiftedCharacterCode - 90;
    return startingCharacterCode + codeDifference;
  }

  if (shiftedCharacterCode > 122 && characterCode > 96) {
    const startingCharacterCode = 96;
    const codeDifference = shiftedCharacterCode - 122;
    return startingCharacterCode + codeDifference;
  }

  if (
    (shiftedCharacterCode < 97 && characterCode > 96) ||
    (shiftedCharacterCode < 65 && characterCode > 64 && characterCode < 91)
  ) {
    const codeSum = shiftedCharacterCode + 26;
    return codeSum;
  }

  return shiftedCharacterCode;
}

function caesarCipher(input, shift) {
  const strToArr = input.split("");
  const shiftedCodeArr = strToArr.map(char => shiftCharacter(char, shift));

  return shiftedCodeArr.map(code => String.fromCharCode(code)).join("");
}

//analyzeArray that takes an array of numbers and returns an object with the following properties: average, min, max and length;
function analyzeArray(array) {
  const average = array.reduce((acc, num) => acc + num, 0) / array.length;
  const min = array.sort((a, b) => a - b)[0];
  const max = array.sort((a, b) => b - a)[0];
  const length = array.length;

  return { average, min, max, length };
}

export {
  capitalizeFirst,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
