const express = require('express');
const router = express.Router();

const quizPersonalidadeController = require('../controllers/quizPersonalidadeController');

router.post('/cadastrar', (req, res) => {
    quizPersonalidadeController.cadastrar(req, res);
});

router.get('/listar', (req, res) => {
    quizPersonalidadeController.listar(req, res);
});

module.exports = router;