// estrutura de dados não ordenada para colocar vários tipos de dados
enum Cores {
  VERMELHO,
  AZUL,
  AMARELO
}

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

export function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaCor(124345);