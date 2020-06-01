// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`🤖Assertion Passed: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`🔥Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const countLetters = function(string) {
  let letterCount = {};
  for (const letter of string) {
    if (letter !== ' ') {
      if (letterCount[letter]) {
        letterCount[letter] += 1
      } else {
        letterCount[letter] = 1;
      }
    }
  }
  return letterCount
}

module.exports = countLetters;


// const result = countLetters('Look at all of the stars')
// console.log(result);
// assertEqual(result["a"], 3);

// const result2 = countLetters('seoi  aeriaje r aer 14-9 11-0')
// console.log(result2);
// assertEqual(result2["1"], 3);