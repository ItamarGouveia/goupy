# Goupy

**Goupy** é uma biblioteca para Node.js inspirada no **NumPy**, que permite criar e manipular arrays de forma simples e intuitiva, com sintaxe semelhante à do Python.  

Ideal para estudantes e desenvolvedores que querem realizar operações matemáticas, manipular arrays e testar algoritmos de forma rápida no JavaScript/Node.js.  


## Instalação

Via NPM:

```bash
npm install goupy
```

## Funcionalidades principais

- Criação de arrays: `array`, `zeros`, `ones`, `arange`, `linspace`, `eye`  
- Operações matemáticas: `sum`, `mean`, `dot`  
- Manipulação de shape: `reshape`, `flatten`  
- Saída de arrays no terminal igual ao NumPy (Python-like)  

## Exemplo de uso

```js
import { goupy } from 'goupy';

// Array 1D
const a = goupy.array([1, 2, 3]);
console.log(a);  // [1 2 3]

// Array 2D
const b = goupy.array([[1, 2], [3, 4]]);
console.log(b);
// [[1 2]
//  [3 4]]

// Zeros
const z = goupy.zeros([2, 3]);
console.log(z);
// [[0 0 0]
//  [0 0 0]]

// Ones
const o = goupy.ones([3, 2]);
console.log(o);
// [[1 1]
//  [1 1]
//  [1 1]]

// Arange
const r = goupy.arange(0, 5, 1);
console.log(r); // [0 1 2 3 4]

// Linspace
const l = goupy.linspace(0, 1, 5);
console.log(l); // [0 0.25 0.5 0.75 1]

// Eye (matriz identidade)
const e = goupy.eye(3);
console.log(e);
// [[1 0 0]
//  [0 1 0]
//  [0 0 1]]

// Operações
console.log(goupy.sum(a));  // 6
console.log(goupy.mean(a)); // 2

// Reshape e Flatten
const reshaped = goupy.reshape(a, [3, 1]);
console.log(reshaped);
// [[1]
//  [2]
//  [3]]

const flat = goupy.flatten(reshaped);
console.log(flat); // [1 2 3]

```