const mongoose = require('mongoose');

const { Schema } = mongoose;

const pedido = new Schema({
  refeicao: { type: Schema.Types.ObjectId, ref: 'Refeicao' },
  adicionais: [{ type: Schema.Types.ObjectId, ref: 'Adicional' }],
  tamanho: String,
  valor: Number,
  qtd: Number
});

module.exports = mongoose.model('Pedido', pedido);