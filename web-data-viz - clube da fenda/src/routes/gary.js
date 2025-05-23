const express = require('express');
const router = express.Router();

const garyController = require('../controllers/garyController');

// Rota para cadastrar pontuação
router.post('/cadastrar', (req, res) => {
    garyController.cadastrar(req, res);
});

// Rota para listar dados do gary
router.get('/listar', (req, res) => {
    garyController.listar(req, res);
});

module.exports = router;