var quizPersonalidadeModel = require("../models/quizPersonalidadeModel");

function listar(req, res) {
    quizPersonalidadeModel.listar()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.error("Erro ao listar dados:", erro);
            res.status(500).json({
                mensagem: "Erro ao listar os dados do quiz.",
                erro: erro.sqlMessage || erro.message
            });
        });
}

function cadastrar(req, res) {
    var personagemQuizServer = req.body.personagemQuizServer;
    var idUserServer = req.body.idUserServer; 

    if (!personagemQuizServer) {
        return res.status(400).send("O campo 'personagemQuizServer' está vazio ou undefined!");
    }
    if (!idUserServer) {
        return res.status(400).send("O campo 'idUserServer' está vazio ou undefined!");
    }

    console.log("Dados recebidos no controller:", idUserServer, personagemQuizServer);

    quizPersonalidadeModel.cadastrar(idUserServer, personagemQuizServer)
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
