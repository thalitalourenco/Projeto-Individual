const express = require('express');
const router = express.Router();

const quizController = require('../controllers/quizController');

router.post('/cadastrar', (req, res) => {
    quizController.cadastrar(req, res);
});

router.get('/listar', (req, res) => {
    quizController.listar(req, res);
});

module.exports = router;