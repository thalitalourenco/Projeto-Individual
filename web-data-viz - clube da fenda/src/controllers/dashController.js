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
    var idUserServer = req.query.idUserServer;

    dashModel.jogosMaisJogados(idUserServer).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function personagensPartidas(req, res) {
    var idUserServer = req.query.idUserServer;

    dashModel.personagensPartidas(idUserServer).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarRanking(req, res) {
    dashModel.listarRanking().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function atualizarPerfil(req, res) {
    const { idUsuario, nome, email, telefone, senha } = req.body;

    dashModel.atualizarPerfil(idUsuario, nome, email, telefone, senha)
        .then(function (resultado) {
            if (resultado.affectedRows > 0) {
                res.status(200).json({ mensagem: "Perfil atualizado com sucesso!" });
            } else {
                res.status(204).send("Nenhuma alteração realizada.");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function atualizarAvatar(req, res) {
    const { idUsuario, fkAvatar } = req.body;

    dashModel.atualizarAvatar(idUsuario, fkAvatar)
    .then(() => res.status(200).send('Avatar atualizado com sucesso!'))
    .catch(erro => {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function vizualizarAvatar(req, res) {
    const { idUsuario, fkAvatar } = req.body;

    dashModel.vizualizarAvatar(idUsuario, fkAvatar)
    .then(() => res.status(200).send('Avatar vizualizado com sucesso!'))
    .catch(erro => {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function excluirConta(req, res) {
    const { idUserServer } = req.body;

    if (!idUserServer) {
        return res.status(400).send('ID do usuário não fornecido!');
    }

    dashModel.excluirConta(idUserServer) 
        .then(() => res.status(200).send('Conta excluída com sucesso!'))
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage || 'Erro ao excluir conta.');
        });
}  


module.exports = {
    listarQuiz,
    listarQuizPersonalidade,
    listarCruzadinha,
    listarPontuacaoGaryDoodle,
    jogosMaisJogados,
    personagensPartidas,
    listarRanking,
    atualizarPerfil,
    atualizarAvatar,
    vizualizarAvatar,
    excluirConta
}