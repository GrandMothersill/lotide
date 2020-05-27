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
    console.log(`🥰🥰Assertion Passed: ${object1} === ${object2}`);
  } else {
    console.log(`😳😰Assertion Passed: ${object1} === ${object2}`);
  }
};

const without = function(source, itemsToRemove) {
  let moddedArray = [];
  for (let s = 0; s < source.length; s++) {
    if (!itemsToRemove.includes(source[s])) {
      moddedArray.push(source[s]);
    }
  }
  console.log(moddedArray);
};

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"])