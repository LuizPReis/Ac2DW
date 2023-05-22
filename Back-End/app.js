const express = require('express');
const app = express();
const mongoose = require('mongoose');
const hamburguerController = require('./controllers/hamburguerController');
const userController = require('./controllers/userController');

app.use(express.json());
app.use('/hamburguer.js', hamburguerController);
app.use('/user.js', userController);

const db_user = 'viniciusbotelho527';
const db_pass = 'HTGfAnnxeuxlRITr';
mongoose.connect(`mongodb+srv://${db_user}:${db_pass}@cluster0.2jdtnne.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        app.listen('3000', () => {
            console.log('MongoDB conectado!!!')
            console.log('Servidor iniciado na porta 3000!!!');
        })
    }).catch((error) => {
        console.log(error);
    });
