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
  return [].concat(...arrOfArrs)
}

module.exports = flattenArray
