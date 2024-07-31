// export default function cleanSet(set, startString) {
//   const results = [];

//   // check if the startstring is empty
//   if (startString === '') {
//     return '';
//   }
//   // Loop through the set array
//   for (const value of set) {
//     if (value.startsWith(startString)) {
//       results.push(value.slice(startString.length));
//     }
//   }
//   return results.join('-');
// }

export default function cleanSet(set, startString) {
  if (
    !set && !startString && !(set instanceof Set) && typeof startString !== 'string'
  ) {
    return '';
  }

  const parts = [];

  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        parts.push(valueSubStr);
      }
    }
  }
  return parts.join('-');
}
