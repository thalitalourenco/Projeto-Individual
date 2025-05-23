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

router.get("/listarGaryDoodle", function (req, res) {
    dashController.listarGaryDoodle(req, res);
});

router.get("/totalJogadores", function (req, res) {
    dashController.totalJogadores(req, res);
});

module.exports = router;