function getNomeSobrenome(nomeCompleto) {
  const nomes = nomeCompleto.split(' ');

  var nome = nomes.shift();
  var sobrenome = '';

  if(nomes.length !== 1)
    sobrenome = ` ${nomes.pop()}`;
  
  return nome + sobrenome;
}

export default getNomeSobrenome;