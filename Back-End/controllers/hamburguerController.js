const express = require('express');
const Hamburguer = require('../models/hamburguer');
const router = express.Router();


router.post('/', async (req, res) => {
    const { nome, preco, ingredientes, foto, qtdCurtidas } = req.body;
    const hamburguer = { nome, preco, ingredientes, foto, qtdCurtidas };
    try {
        await Hamburguer.create(hamburguer);
        res.status(201).json(hamburguer);
    } catch (error) {
        res.status(500).json({ erro: error });
    }
});

router.get('/', async (req, res) => {
    try {
        const hamburguers = await Hamburguer.find();
        res.status(200).json(hamburguers);
    } catch (error) {
        res.status(500).json({ erro: error });
    }
});
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const hamburguer = await Hamburguer.findOne({ _id: id });
        res.status(200).json(hamburguer);
    } catch (error) {
        res.status(500).json({ erro: error });
    }
});
router.put('/:id/editarHamburguer', (req, res) => {
    const id = req.params.id;
    const hamburguer = Hamburguer.findOne({ _id: id });
    if(!hamburguer) return res.status(404).json({})
    else{
    hamburguer.name = String,
    hamburguer.preco = Number,
    hamburguer.ingredientes = String,
    hamburguer.foto = String,
    hamburguer.qtdCurtidas = Number
    }
    
   
   });

router.delete('/:id', async (req, res) => {
        try {
        const id = req.params.id;
        const hamburguerDel = await Hamburguer.findOne({ _id: id });
        if (!hamburguerDel) {
        res.status(422).json({ mensagem: "Item não encontrado no cardápio!" });
        return;
        }
        await Hamburguer.deleteOne({ _id: id });
        res.status(200).json({ mensagem: "Retirado do cardápio com sucesso!" });
        } catch (error) {
        res.status(500).json({ error: error });
        }
        });
    

module.exports = router;