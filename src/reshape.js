import { NDArray } from "./ndarray.js";

// apenas um exemplo simples
export function flatten(array) {
  return new NDArray([...array.data], [array.size]);
}

// reshape simples (1D -> 2D)
export function reshape(array, newShape) {
  if (array.size !== newShape.reduce((a, b) => a * b, 1))
    throw new Error("New shape must have same number of elements");
  return new NDArray([...array.data], newShape);
}
