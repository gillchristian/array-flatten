"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Array flatten
 *
 * This is a pure function, does not mutate the provided array,
 * instead it returns a new one
 *
 * @param {Array<Any>}  array to flat
 * @returns {Array}  flatten array
 */
function flattenArray(arrOfArrs) {
  var _ref;

  return (_ref = []).concat.apply(_ref, _toConsumableArray(arrOfArrs));
}

module.exports = flattenArray;
