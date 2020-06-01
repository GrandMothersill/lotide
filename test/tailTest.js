const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {

  it("returns [2, 3, 4, 5, 6, 7, 8, 9, 10] for [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});