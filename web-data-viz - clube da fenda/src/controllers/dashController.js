var dashModel = require("../models/dashModel");


function listarQuiz(req, res) {
    var idUserServer = req.query.idUserServer;
    console.log("ID do usuário recebido no listarQuiz:", idUserServer);

    dashModel.listarQuiz(idUserServer)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
            console.log("Dados enviados para a dashboard");
        })
        .catch(function (erro) {
            console.log("Houve um erro ao buscar os dados: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}



function listarQuizPersonalidade(req, res) {
    var idUserServer = req.query.idUserServer;
    dashModel.listarQuizPersonalidade(idUserServer).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
        console.log("dados enviados para a dashboard")
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarCruzadinha(req, res) {
    var idUserServer = req.query.idUserServer;
    dashModel.listarCruzadinha(idUserServer).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
        console.log("dados enviados para a dashboard")
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarPontuacaoGaryDoodle(req, res) {
    var idUserServer = req.query.idUserServer;
    dashModel.listarPontuacaoGaryDoodle(idUserServer).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
        console.log("dados enviados para a dashboard")
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function jogosMaisJogados(req, res) {

    const limite_linhas = 7;

    var idUserServer = req.query.idUserServer;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    dashModel.jogosMaisJogados(idUserServer, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    listarQuiz,
    listarQuizPersonalidade,
    listarCruzadinha,
    listarPontuacaoGaryDoodle,
    jogosMaisJogados
}