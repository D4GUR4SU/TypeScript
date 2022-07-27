// unknown é um any, mais seguro forçando a checagem de tipos antes de fazer qualquer operação com o valor
let x: unknown;

x = 100;
x = 'Douglas';
x = 900;
x = 10;

const y = 800;

if (typeof x === 'number') console.log(x + y);