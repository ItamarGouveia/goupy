import { NDArray } from "./ndarray.js";

export function array(data) {
  let flatData = [];
  const flatten = (arr) => {
    if (Array.isArray(arr)) arr.forEach(flatten);
    else flatData.push(arr);
  };
  flatten(data);

  const shape = [];
  let tmp = data;
  while (Array.isArray(tmp)) {
    shape.push(tmp.length);
    tmp = tmp[0];
  }

  return new NDArray(flatData, shape, false); // forceFloat=false
}

export function zeros(shape) {
  const size = shape.reduce((a, b) => a * b, 1);
  const data = new Float64Array(size).fill(0);
  return new NDArray(data, shape, true); // forceFloat=true
}

export function ones(shape) {
  const size = shape.reduce((a, b) => a * b, 1);
  const data = new Float64Array(size).fill(1);
  return new NDArray(data, shape, true); // forceFloat=true
}

export function arange(start, stop, step = 1) {
  const size = Math.max(Math.ceil((stop - start) / step), 0);
  const data = new Float64Array(size);
  for (let i = 0; i < size; i++) data[i] = start + i * step;
  return new NDArray(data, [size], false);
}

export function linspace(start, stop, num = 50) {
  const data = new Float64Array(num);
  if (num === 1) data[0] = start;
  else {
    const step = (stop - start) / (num - 1);
    for (let i = 0; i < num; i++) data[i] = start + i * step;
  }
  return new NDArray(data, [num], true); // linspace geralmente é float
}

export function eye(n) {
  const data = new Float64Array(n * n).fill(0);
  for (let i = 0; i < n; i++) data[i * n + i] = 1;
  return new NDArray(data, [n, n], true);
}
