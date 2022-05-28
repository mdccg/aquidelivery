const mongoose = require('mongoose');
const { Schema } = mongoose;

const adicional = new Schema({
  nome: {
    type: String,
    unique: true
  },
  qtd: Number
});

module.exports = mongoose.model('Adicional', adicional);