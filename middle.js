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
    console.log("🥰🥰These arrays are equal");
  } else {
    console.log("😳😰These arrays are NOT equal");
  }
};

const middle = function(array) {
  let middleElement = [];
  let x = array.length;
  console.log('X:' + x);
  if (x % 2 === 1 && x > 2) {
    middleElement.push(array[(x - 1) / 2]);
  } else if (x % 2 === 0 && x > 2) {
    middleElement.push(array[(x / 2) - 1]);
    middleElement.push(array[(x / 2)]);
  }
  return middleElement;
};

assertArraysEqual(middle([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(middle([1, 2]), [1, 2]);

console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2]));