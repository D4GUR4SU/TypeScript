let x = 10;
x = 0b1010;
// x = 'Douglas';

const y = 10; // tipo literal, so pode ter esse valor
let a = 100 as const; // asserção de um tipo literal

const pessoa = {
  nome: 'Douglas' as const,
  sobrenome: 'Souza',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string{
  return cor;
}
console.log(escolhaCor('Azul'))

// Module mode
export default 1;