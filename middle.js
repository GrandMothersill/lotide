const eqArrays = require('./eqArrays.js');

const assertArraysEqual = require('./assertArraysEqual.js');

const middle = function(array) {
  let middleElement = [];
  let x = array.length;
  if (x % 2 === 1 && x > 2) {
    middleElement.push(array[(x - 1) / 2]);
  } else if (x % 2 === 0 && x > 2) {
    middleElement.push(array[(x / 2) - 1]);
    middleElement.push(array[(x / 2)]);
  }
  return middleElement;
};

module.exports = middle;