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


const flatten = function(array) {
  let flattenedArray = [];
  array.forEach(element => {
    if (!Array.isArray(element)) {
      flattenedArray.push(element);
    } else {
      element.forEach(nestedElement => {
        flattenedArray.push(nestedElement);
      });
    }
  });
};

module.exports = flatten;