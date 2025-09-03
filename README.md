# Goupy

**Goupy** é uma biblioteca para Node.js inspirada no **NumPy**, que permite criar e manipular arrays de forma simples e intuitiva, com sintaxe semelhante à do Python.  

Ideal para estudantes e desenvolvedores que querem realizar operações matemáticas, manipular arrays e testar algoritmos de forma rápida no JavaScript/Node.js.  

## Funcionalidades principais

- Criação de arrays: `array`, `zeros`, `ones`, `arange`, `linspace`, `eye`  
- Operações matemáticas: `sum`, `mean`, `dot`  
- Manipulação de shape: `reshape`, `flatten`  
- Saída de arrays no terminal igual ao NumPy (Python-like)  

## Exemplo de uso

```js
import { goupy } from 'goupy';

const a = goupy.array([1, 2, 3, 4]);
console.log(a);             // [1 2 3 4]
console.log(goupy.sum(a));  // 10
console.log(goupy.mean(a)); // 2.5

const b = goupy.reshape(a, [2, 2]);
console.log(b);
// [[1 2]
//  [3 4]]

console.log(goupy.flatten(b)); // [1 2 3 4]
