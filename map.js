const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`🥰🥰Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`😳😰Assertion Passed: ${array1} === ${array2}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["look", "at", "the", "sky"];
const words3 = ["so", 'say', 'we', 'all'];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);

assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words2, word => word[0]), ['l', 'a', 't', 's']);
assertArraysEqual(map(words3, word => word[0]), ['s', 's', 'w', 'a']);