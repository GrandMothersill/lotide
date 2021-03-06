// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`🤖Assertion Passed: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`🔥Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const findKeyByValue = function(object, soughtValue) {
  for (const key in object) {
    if (object[key] === soughtValue) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));