const express = require('express');
const router = express.Router();

const quizController = require('../controllers/quizController');

// Rota para cadastrar pontuação
router.post('/cadastrar', (req, res) => {
    quizController.cadastrar(req, res);
});

// Rota para listar dados do quiz
router.get('/listar', (req, res) => {
    quizController.listar(req, res);
});

module.exports = router;