type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersecao = AB & AC & AD;

console.log()

const pessoa: Pessoa = {
  nome: 'Théo',
  sobrenome: 'Henrique',
  idade: 6,
};

 console.log(pessoa);

 // Module mode
 export { pessoa };