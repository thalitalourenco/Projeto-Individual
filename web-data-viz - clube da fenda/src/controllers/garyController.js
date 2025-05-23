var garyModel = require("../models/garyModel");

function listar(req, res) {
    garyModel.listar()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.error("Erro ao listar dados:", erro);
            res.status(500).json({
                mensagem: "Erro ao listar os dados do Gary Doodle.",
                erro: erro.sqlMessage || erro.message
            });
        });
}

function cadastrar(req, res) {
    var pontuacaoGaryServer = req.body.pontuacaoGaryServer;
    var idUserServer = req.body.idUserServer;

    if (!pontuacaoGaryServer) {
        return res.status(400).send("O campo 'pontuacaoGaryServer' está vazio ou undefined!");
    }
    if (!idUserServer) {
        return res.status(400).send("O campo 'idUsuarioServer' está vazio ou undefined!");
    }

    console.log("Dados recebidos no controller:", idUserServer, pontuacaoGaryServer);

    garyModel.cadastrar(idUserServer, pontuacaoGaryServer)
        .then(function (resposta) {
            res.status(200).send("Pontuação enviada ao Banco de Dados com sucesso!");
        })
        .catch(function (erro) {
            console.error("Erro ao cadastrar pontuação:", erro);
            res.status(500).json({
                mensagem: "Erro ao cadastrar a pontuação no Banco de Dados.",
                erro: erro.sqlMessage || erro.message
            });
        });
}

module.exports = {
    listar,
    cadastrar
};
