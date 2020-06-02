const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let result = true;
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } for (const key in object1) {
    if (!Array.isArray(object1[key]) && !Array.isArray(object2[key])) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    } else if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (eqArrays(object1[key], object2[key]) === false) {
        return false;
      }
    }
  }
  return result;
};

module.exports = eqObjects;


// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true);

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);

// const cba = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(abc, cba), true);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false);
