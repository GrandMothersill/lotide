// const eqArrays = function(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   } else {
//     for (let i = 0; i < array1.length; i++) {
//       if (array1[i] !== array2[i]) {
//         return false;
//       }
//     }
//   }
//   return true;
// };

// const assertArraysEqual = function(array1, array2) {
//   if (eqArrays(array1, array2) === true) {
//     console.log(`🥰🥰Assertion Passed: ${array1} === ${array2}`);
//   } else {
//     console.log(`😳😰Assertion Passed: ${array1} === ${array2}`);
//   }
// };

const without = function(array, itemsToRemove) {
  let moddedArray = [];
  for (let s = 0; s < array.length; s++) {
    if (!itemsToRemove.includes(array[s])) {
      moddedArray.push(array[s]);
    }
  }
  return (moddedArray);
};

module.exports = without;

// console.log(without([1, 2, 3], [1])); // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"])