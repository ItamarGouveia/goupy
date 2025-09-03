import { NDArray } from "./ndarray.js";

// soma todos os elementos
export function sum(array) {
  return array.data.reduce((acc, val) => acc + val, 0);
}

// média
export function mean(array) {
  return sum(array) / array.size;
}

// produto escalar (dot)
export function dot(a, b) {
  if (a.size !== b.size) throw new Error("Arrays must have same size");
  return a.data.reduce((acc, val, i) => acc + val * b.data[i], 0);
}
