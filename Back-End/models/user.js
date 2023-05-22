const mongoose = require('mongoose');
const User = mongoose.model('User', {
nome: String,
celular: String,
email: String,
hPreferido: String,


});
module.exports = User;