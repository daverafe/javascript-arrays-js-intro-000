var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray(array, element) {
  ["foo", ...array];
  return ["foo", ...array]
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift()
  return ["foo",]
}
function addElementToEndOfArray(array, element) {
  [...array, "foo"]
  return [...array, "foo"]
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push()
  return array, "element"
}
function accessElementInArray(array, index) {
  return array[2]
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array) {
  array = array.slice(1)
  return array
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}
function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length - 1)
  return array
}
