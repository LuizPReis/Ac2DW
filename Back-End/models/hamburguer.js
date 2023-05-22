const mongoose = require('mongoose');
const Hamburguer = mongoose.model('Hamburguer', {
nome: String,
preco: Number,
ingredientes: String,
foto: String,
qtdCurtidas: Number

});
module.exports = Hamburguer;