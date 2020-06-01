# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@grandmothersill/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: asserts whether the inputted arrays are equal or not
* `assertEqual(actual, expected)`: asserts whether actual and expected are equal or not
* `assertObjectsEqual(object1, object2)`: asserts wether the inputted objects are equal or not
* `countLetters(string)`: returns an object where key-value pairs represent the characters present in the string, and the count of how many times they are included. spaces are excluded
* `countOnly(array, object)`: returns an object indicating how many times counted values occur in the input array
* `eqArrays(array1, array2)`: returns true if arrays are equal, false if they are not equal
* `eqObjects(object1, object2)`: returns true if objects are equal, false if they are not equal
* `findKey(object, callack)`: returns the first key that meets callback condition
* `findKeyByValue(object, soughtValue)`: returns first key whose value equals soughtValue
* `flatten(array)`: returns flatten nested arrays up to one nesting-deep
* `head(array)`: returns the value at array's first index
* `letterPositions(sentence)` : returns objects indicating the indices of each unique character in a string sentence. spaces are excluded
* `map(array, callback)`: iterates through array applying callback function to each element, returns array of result
* `middle(array)`: if length of array is odd, returns middle value, if length of array is even, returns middle two values, if array contains 2 or fewer elements, return an empty array
* `tail(array)`: returns new array containing all but the first value of input array
* `takeUntil(array, callback)`: returns values in array up until a value satisfies the callback condition, non-inclusive
* `without(array, itemsToRemove)`: return modded array of input array, with items in itemsToRemove removed
