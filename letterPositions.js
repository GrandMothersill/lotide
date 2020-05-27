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


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let x = sentence[i];
    if (x !== ' ') {
      if (!results[x]) {
        results[x] = [i];
      } else {
        results[x].push(i);
      }
    }
  }

  return results;
};

const result1 = letterPositions("hello");
console.log(result1);
assertArraysEqual(result1['l'], [2, 3]);

const result2 = letterPositions("lighthouse in the house");
console.log(result2);
assertArraysEqual(result2['h'], [3, 5, 15, 18]);