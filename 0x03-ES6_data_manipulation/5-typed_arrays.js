export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // returns new ArrayBuffer  Int8 value
  const buffer = new ArrayBuffer(length); // 16 bytes

  // const int8View = new Int8Array(buffer);

  const dataView = new DataView(buffer);

  dataView.setInt8(position, value); //

  return dataView;
}
