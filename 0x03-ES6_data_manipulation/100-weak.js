// export const weakMap = new WeakMap();

// const MAX_ENDPOINT_CALLS = 5;

// export function queryAPI(endpoint) {
//   if (!weakMap.has(endpoint)) {
//     weakMap.set(endpoint, 0);
//   }
//   weakMap.set(endpoint, weakMap.get(endpoint) + 1);
//   if (weakMap.get(endpoint) >= MAX_ENDPOINT_CALLS) {
//     throw new Error('Endpoint load is high');
//   }
// }

// 100-weak.js

// Create and export a new WeakMap instance
export const weakMap = new WeakMap();

// Export the queryAPI function
export function queryAPI(endpoint) {
  // Initialize or update the count in the WeakMap
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  // Get the current count and increment it
  const count = weakMap.get(endpoint) + 1;

  // Update the count in the WeakMap
  weakMap.set(endpoint, count);

  // Check if the count is 5 or more
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
