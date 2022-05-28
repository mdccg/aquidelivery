const mongoose = require('mongoose');

const { Schema } = mongoose;

const carrinho = new Schema({
  pedidos: [{ type: Schema.Types.ObjectId, ref: 'Pedido' }],
  valorTotal: Number,
  cliente: { type: Schema.Types.ObjectId, ref: 'Usuario' }
});

module.exports = mongoose.model('Carrinho', carrinho);