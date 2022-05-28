const mongoose = require('mongoose');

const { Schema } = mongoose;

const mesa = new Schema({
  identificador: {
    type: String,
    unique: true
  },
  carrinho: Schema.Types.ObjectId
});

module.exports = mongoose.model('Mesa', mesa);