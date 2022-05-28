const mongoose = require('mongoose');
const { Schema } = mongoose;

const ingrediente = new Schema({
  nome: {
    type: String,
    unique: true
  },
  qtd: Number
});

module.exports = mongoose.model('Ingrediente', ingrediente);