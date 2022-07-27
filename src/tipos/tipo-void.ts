// Void somente usado quando uma função não retorna nada
function semRetorno(...args: string[]): void{
  console.log(args.join(''));
}

const pessoa = {
  nome: 'Douglas',
  sobrenome: 'Souza',

  exibirNome(): void{
    console.log(this.nome +  ' ' + this.sobrenome);
  }
};

semRetorno('Duuglas', 'Souza');
pessoa.exibirNome();

export { pessoa };