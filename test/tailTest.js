const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual');

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertArraysEqual(result, ["Lighthouse", "Labs"]);

const result2 = tail([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assertArraysEqual(result2, [2, 3, 4, 5, 6, 7, 8, 9, 10]);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
