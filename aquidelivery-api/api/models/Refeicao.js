const mongoose = require('mongoose');

const { Schema } = mongoose;

const refeicao = new Schema({
  nome: String,
  ingredientes: [{ type: Schema.Types.ObjectId, ref: 'Ingrediente' }],
  adicionais: [{ type: Schema.Types.ObjectId, ref: 'Adicional' }],
  tamanhos: { type: [Object] },
  valorUnitario: Number,
  imagem: String,
  categoria: { type: Schema.Types.ObjectId, ref: 'Categoria' },
  qtd: Number
});

module.exports = mongoose.model('Refeicao', refeicao);