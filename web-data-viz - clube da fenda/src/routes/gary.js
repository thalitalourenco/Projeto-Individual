const express = require('express');
const router = express.Router();

const garyController = require('../controllers/garyController');

router.post('/cadastrar', (req, res) => {
    garyController.cadastrar(req, res);
});

router.get('/listar', (req, res) => {
    garyController.listar(req, res);
});

module.exports = router;