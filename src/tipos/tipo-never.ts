// Esse tipo quer dizer que uma função nunca vai retornar nada, podendo ser um loop infinito ou um erro
function criaErro(): never {
  throw new Error('Erro qualquer');
}

criaErro();