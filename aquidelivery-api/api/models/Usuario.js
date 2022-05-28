const mongoose = require('mongoose');

const { Schema } = mongoose;

const usuario = new Schema({
  enderecos: [{ type: Schema.Types.ObjectId, ref: 'Endereco' }],
  nome: String,
  cpf: {
    type: String,
    unique: true
  },
  telefone: String,
  tipo: {
    type: String,
    enum: ['cliente', 'administrador']
  }
});

module.exports = mongoose.model('Usuario', usuario);