export default function updateUniqueItems(maparg) {
  if (!(maparg instanceof Map)) {
    throw new Error('argument is not a map');
  }
  maparg.forEach((value, key) => {
    if (value === 1) {
      maparg.set(key, 100);
    }
  });

  return maparg;
}
