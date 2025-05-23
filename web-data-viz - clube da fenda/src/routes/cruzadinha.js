const express = require('express');
const router = express.Router();

const cruzadinhaController = require('../controllers/cruzadinhaController');

router.post('/cadastrar', (req, res) => {
    cruzadinhaController.cadastrar(req, res);
});

router.get('/listar', (req, res) => {
    cruzadinhaController.listar(req, res);
});

module.exports = router;