var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.get("/listarQuiz", function (req, res) {
    dashController.listarQuiz(req, res);
});

router.get("/listarQuizPersonalidade", function (req, res) {
    dashController.listarQuizPersonalidade(req, res);
});

router.get("/listarCruzadinha", function (req, res) {
    dashController.listarCruzadinha(req, res);
});

router.get("/listarPontuacaoGaryDoodle", function (req, res) {
    dashController.listarPontuacaoGaryDoodle(req, res);
});

router.get("/jogosMaisJogados", function (req, res) {
    dashController.jogosMaisJogados(req, res);
});

module.exports = router;