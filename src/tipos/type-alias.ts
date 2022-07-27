type Idade = number;
type Pessoa = {
  nome: string;
  sobrenome: string;
  idade: Idade;
  salario: number;
  corPreferida?: CorPreferida;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  nome: 'Théo',
  sobrenome: 'Henrique',
  idade: 6,
  salario: 15_000,
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa{
  return { ...pessoa, corPreferida: cor }
}

console.log(pessoa);
console.log(setCorPreferida(pessoa, 'Azul'));