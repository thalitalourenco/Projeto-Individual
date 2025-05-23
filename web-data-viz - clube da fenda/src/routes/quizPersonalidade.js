const express = require('express');
const router = express.Router();

const quizPersonalidadeController = require('../controllers/quizPersonalidadeController');

// Rota para cadastrar pontuação
router.post('/cadastrar', (req, res) => {
    quizPersonalidadeController.cadastrar(req, res);
});

// Rota para listar dados do quiz
router.get('/listar', (req, res) => {
    quizPersonalidadeController.listar(req, res);
});

module.exports = router;