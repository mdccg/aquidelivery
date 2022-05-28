const Endereco = require('./../models/Endereco');

const getUsuario = async result => {
  var enderecos = [];
  for(let endereco of result.enderecos) {
    await Endereco.findById(endereco, function(err, result) {
      enderecos.push(result);
    });
  }
  
  var usuario = { ...result._doc };
  usuario.enderecos = enderecos;

  return usuario;
}

module.exports = getUsuario;