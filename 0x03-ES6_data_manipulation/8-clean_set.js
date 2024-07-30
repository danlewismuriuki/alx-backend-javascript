export default function cleanSet(set, startString) {
  const results = [];

  // check if the startstring is empty
  if (startString === '') {
    return '';
  }
  // Loop through the set array
  for (const value of set) {
    if (value.startsWith(startString)) {
      results.push(value.slice(startString.length));
    }
  }
  return results.join('-');
}
