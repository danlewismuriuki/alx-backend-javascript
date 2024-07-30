export default function updateUniqueItems(maparg) {
  if (!(maparg instanceof Map)) {
    throw new Error('Cannot process');
  }
  maparg.forEach((value, key) => {
    if (value === 1) {
      maparg.set(key, 100);
    }
  });

  return maparg;
}
