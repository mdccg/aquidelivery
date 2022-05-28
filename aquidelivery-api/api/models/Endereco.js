const mongoose = require('mongoose');
const { Schema } = mongoose;

const endereco = new Schema({
  cep: String,
  endereco: String,
  numero: String,
  complemento: String,
  bairro: String,
  cidade: String,
  estado: String,
  pontoReferencia: String
});

module.exports = mongoose.model('Endereco', endereco);