// Array<T> - T[]
function multiplicaArgs(...args: Array<number>): number  {
  return args.reduce((ac, valor) => ac * valor,1);
}

function concatenaStrings(...args: string[]): string  {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[]  {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1,2,3);
const concatena = concatenaStrings('D','O','U','G');
const upper = toUpperCase('a','b','c');

console.log(result);
console.log(concatena);
console.log(upper);