const express = require('express');
const User = require('../models/User');
const Hamburguer = require('../models/User');
const router = express.Router();


router.post('/', async (req, res) => {
    const { nome, celular, hPreferido } = req.body;
    const user = { nome, celular, hPreferido };
    try {
        await User.create(user);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ erro: error });
    }
});

router.get('/', async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ erro: error });
    }
});
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findOne({ _id: id });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ erro: error });
    }
});


router.delete('/:id', async (req, res) => {
        try {
        const id = req.params.id;
        const userDel = await User.findOne({ _id: id });
        if (!userDel) {
        res.status(422).json({ mensagem: "Usuario não encontrado!" });
        return;
        }
        await User.deleteOne({ _id: id });
        res.status(200).json({ mensagem: "Usuário retirado com sucesso!" });
        } catch (error) {
        res.status(500).json({ error: error });
        }
        });
    

module.exports = router;