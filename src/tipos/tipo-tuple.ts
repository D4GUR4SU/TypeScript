// Tipo tuple
const dadosCliente: readonly [number, string] = [1, 'Douglas']; // Imutável
const dadosCliente2: [number, string, string] = [1, 'Douglas', 'Souza'];
const dadosCliente3: [number, string, string?] = [1, 'Douglas'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Douglas', 'Souza', 'Barbosa'];

// dadosCliente[0] = 100;
// dadosCliente[1] = 'Théo';

dadosCliente2.pop(); // evitar usar

console.log(dadosCliente);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly array
const array1: readonly string[] = ['Douglas', 'Souza'];
const array2: ReadonlyArray<string> =  ['Douglas', 'Souza'];

console.log(array1);
console.log(array2);
