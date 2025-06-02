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

router.get("/personagensPartidas", function (req, res) {
    dashController.personagensPartidas(req, res);
});

router.get("/listarRanking", function (req, res) {
    dashController.listarRanking(req, res);
});

router.patch("/atualizarPerfil", function (req, res) {
    dashController.atualizarPerfil(req, res);
});

router.patch("/atualizarAvatar", (req, res) => {
    dashController.atualizarAvatar(req, res);
});

router.get("/vizualizarAvatar", (req, res) => {
    dashController.vizualizarAvatar(req, res);
});

router.delete("/excluirConta", (req, res) => {
    dashController.excluirConta(req, res);
});

module.exports = router;