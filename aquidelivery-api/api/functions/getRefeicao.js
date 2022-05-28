const Ingrediente = require('./../models/Ingrediente');
const Adicional   = require('./../models/Adicional');
const Categoria   = require('./../models/Categoria');

const getRefeicao = async result => {
  var ingredientes = [];
  for (let ingrediente of result.ingredientes) {
    await Ingrediente.findById(ingrediente, function (err, result) {
      ingredientes.push(result);
    });
  }

  var adicionais = [];
  for (let adicional of result.adicionais) {
    await Adicional.findById(adicional, function (err, result) {
      adicionais.push(result);
    });
  }

  var categoria = {};
  await Categoria.findById(result.categoria, function (err, result) {
    categoria = result;
  });

  var refeicao = { ...result._doc };
  refeicao.ingredientes = ingredientes;
  refeicao.adicionais = adicionais;
  refeicao.categoria = categoria;

  return refeicao;
}

module.exports = getRefeicao;