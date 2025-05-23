var cruzadinhaModel = require("../models/cruzadinhaModel");

function listar(req, res) {
    cruzadinhaModel.listar()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.error("Erro ao listar dados:", erro);
            res.status(500).json({
                mensagem: "Erro ao listar os dados da cruzadinha.",
                erro: erro.sqlMessage || erro.message
            });
        });
}

function cadastrar(req, res) {
    var tempoCruzadinhaServer = req.body.tempoCruzadinhaServer;
    var idUserServer = req.body.idUserServer;

    if (!tempoCruzadinhaServer) {
        return res.status(400).send("O campo 'tempoCruzadinhaServer' está vazio ou undefined!");
    }
    if (!idUserServer) {
        return res.status(400).send("O campo 'idUsuarioServer' está vazio ou undefined!");
    }

    console.log("Dados recebidos no controller:", idUserServer, tempoCruzadinhaServer);

    cruzadinhaModel.cadastrar(idUserServer, tempoCruzadinhaServer)
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
