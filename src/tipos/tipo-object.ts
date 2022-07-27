const objetoA: {
  chaveA: string;
  readonly chaveB: string; // readonly a chave não pode mais ser alterada
  chaveC?: string;
  [key: string]: unknown; // index signature [key: string]: unknow or any
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveA = 'Outro Valor';
objetoA.chaveD = 1;
objetoA.chaveC = 'Nova Chave';