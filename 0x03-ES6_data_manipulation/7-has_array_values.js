export default function hasValuesFromArray(mySet, myArray) {
  return myArray.every((value) => mySet.has(value));
}
